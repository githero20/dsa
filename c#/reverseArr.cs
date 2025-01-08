public void ReverseArr (List x)
{
  for (int i = 0; i < x.Length / 2 ; i++)
  {
    int other = x.Length - i - 1;
    int temp = x[i];
    x[i] = x[other];
    x[other] = temp;
  }
}