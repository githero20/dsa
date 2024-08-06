//Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
//The returned integer should be non-negative as well.
//You must not use any built-in exponent function or operator.
public int MySqrt(int x)
{
    if (x == 0) return 0;

    int left = 1;
    int right = x;

    while (left <= right)
    {
        int middle = (left + right) / 2;
        int sqrt = x / middle;

        if (middle == sqrt)
        {
            return middle;
        }
        else if (sqrt < middle)
        {
            right = middle - 1;
        }
        else
        {
            left = middle + 1;
        }
    }

    return right;
}