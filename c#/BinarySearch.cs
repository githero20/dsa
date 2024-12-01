var sortedList = new List<int>()
{
    1, 3, 4, 5, 6, 11, 12, 14, 16, 18
};

var indexOf1 = sortedList.FindIndexInSorted(1);
var indexOf11 = sortedList.FindIndexInSorted(11);
var indexOf12 = sortedList.FindIndexInSorted(12);




Console.ReadKey();
// using IList because it guarantees that an indexer will bew present

public static class ListExtensions
{
    //Binary search
    //There's also an in-built Binary Search
    public static int? FindIndexInSorted<T>(
        this IList<T> list, T itemToFind)
        where T : IComparable<T>
        // with IComparable, it can also work for other types like strings
    {
        int leftBound = 0;
        int rightBound = list.Count - 1;

        while (leftBound <= rightBound)
        {
            int middleIndex = (leftBound + rightBound) / 2;
            if (itemToFind.Equals(list[middleIndex]))
            {
                return middleIndex;
            }
            else if (itemToFind.CompareTo(list[middleIndex]) < 0)
            {
                rightBound = middleIndex - 1;
            }
            else
            {
                leftBound = middleIndex + 1;
            }
        }

        return null;
    }

    public static bool IsPerfectSquare(int num)
    {
        Int64 low = 0;
        Int64 squareNum = num;
        Int64 high = squareNum;

        // begin the bst loop
        while (low <= high)
        {
            // same as normal bst, only we use mid * mid here instead
            Int64 mid = (low + high) / 2;
            if (mid * mid == squareNum)
            {
                return true;
            }
            else if ((mid * mid) > squareNum)
            {
                high = mid - 1;
            }
            else
            {
                low = mid + 1;
            }
        }

        return false;
    }
}