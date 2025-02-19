// TS (Class-based) Version
class RateLimiterTs {
  private requestLimit: number;
  private timeWindow: number;
  private requestLogs: Map<string, number[]>;

  constructor(requestLimit: number, timeWindow: number) {
    this.requestLimit = requestLimit;
    this.timeWindow = timeWindow;
    this.requestLogs = new Map();
  }

  isAllow(clientId: string): boolean {
    const currentTime = Date.now();
    if (!this.requestLogs.has(clientId)) {
      this.requestLogs.set(clientId, []);
    }
    const requestTimestamps = this.requestLogs.get(clientId)!;

    while (
      requestTimestamps.length > 0 &&
      requestTimestamps[0] < currentTime - this.timeWindow
    ) {
      requestTimestamps.shift();
    }

    if (requestTimestamps.length >= this.requestLimit) {
      return false;
    }

    requestTimestamps.push(currentTime);
    return true;
  }
}

// TS (Functional programming) Version
type RateLimiterFn = {
  isAllow: (clientId: string) => boolean;
};

const createRateLimiter = (
  requestLimit: number,
  timeWindow: number
): RateLimiterFn => {
  const requestLogs = new Map<string, number[]>();

  return {
    isAllow(clientId: string): boolean {
      const currentTime = Date.now();
      if (!requestLogs.has(clientId)) {
        requestLogs.set(clientId, []);
      }
      const requestTimestamps = requestLogs.get(clientId)!;

      while (
        requestTimestamps.length > 0 &&
        requestTimestamps[0] < currentTime - timeWindow
      ) {
        requestTimestamps.shift();
      }

      if (requestTimestamps.length >= requestLimit) {
        return false;
      }

      requestTimestamps.push(currentTime);
      return true;
    },
  };
};
