// C# Version
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

public class RateLimiter
{
    private readonly int _requestLimit;
    private readonly TimeSpan _timeWindow;
    private readonly ConcurrentDictionary<string, List<long>> _requestLogs;

    public RateLimiter(int requestLimit, TimeSpan timeWindow)
    {
        _requestLimit = requestLimit;
        _timeWindow = timeWindow;
        _requestLogs = new ConcurrentDictionary<string, List<long>>();
    }

    public bool IsAllow(string clientId)
    {
        long currentTime = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
        var requestTimestamps = _requestLogs.GetOrAdd(clientId, _ => new List<long>());

        lock (requestTimestamps)
        {
            requestTimestamps.RemoveAll(timestamp => timestamp < currentTime - _timeWindow.TotalMilliseconds);
            if (requestTimestamps.Count >= _requestLimit)
            {
                return false;
            }
            requestTimestamps.Add(currentTime);
            return true;
        }
    }
}
