// See https://aka.ms/new-console-template for more information
using CollectionExamples;
using System.Collections;

var customCollection = new CustomCollection(
    new string[] { "aaa", "bbb", "ccc" });

foreach (var word in customCollection)
{
    Console.WriteLine(word);
};

// Foreach implementation
//IEnumerator wordsEnumerator = words.GetEnumerator();
//object currentWord;
//while (wordsEnumerator.MoveNext())
//{
//    currentWord = wordsEnumerator.Current;
//    Console.WriteLine(currentWord);
//}

var leetCodeTest = new LeetcodeTests();
leetCodeTest.CountSeniors(["1313579440F2036", "2921522980M5644"]);


public class CustomCollection : IEnumerable<string>
{
    public string[] Words { get; }

    public CustomCollection(string[] words)
    {
        Words = words;
    }

    public string this[int index]
    {
        get => Words[index];
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    public IEnumerator<string> GetEnumerator()
    {
        throw new NotImplementedException();
    }

}

public class WordsEnumerator : IEnumerator<string>
{
    private const int InitialPosition = -1;
    private int _currentPosition = InitialPosition;
    private readonly string[] _words;

    public WordsEnumerator(string[] words)
    {
        _words = words;
    }

    object IEnumerator.Current => Current;

    public string Current
    {
        get
        {
            try
            {
                return _words[_currentPosition];
            }
            catch (IndexOutOfRangeException ex)
            {
                throw new IndexOutOfRangeException(
                    $"{nameof(CustomCollection)}'s end reached.",
                    ex);
            }
        }
    }

    public bool MoveNext()
    {
        ++_currentPosition;
        return _currentPosition < _words.Length;
    }

    public void Reset()
    {
        _currentPosition = InitialPosition;
    }

    public void Dispose()
    {

    }
}


public class PairOfArrays<TLeft, TRight>
{
    private readonly TLeft[] _left;
    private readonly TRight[] _right;

    public PairOfArrays(
        TLeft[] left, TRight[] right)
    {
        _left = left;
        _right = right;
    }

    //your code goes here
    public (TLeft Left, TRight Right) this[int indexInLeft, int indexInRight]
    {
        get
        {
            return (_left[indexInLeft], _right[indexInRight]);
        }
        set
        {
            _left[indexInLeft] = value.Left;
            _right[indexInRight] = value.Right;
        }
    }
}

