using System.Collections.Generic;

Console.ReadKey();

//Implement the CreateUnion method, which takes two HashSets and builds a new HashSet containing all items from both input HashSets.

public static class HashSetsUnionExercise
{
    public static HashSet<T> CreateUnion<T>(
        HashSet<T> set1, HashSet<T> set2)
    {
        //your code goes here
        var finalSet = new HashSet<T>(set1);
        foreach (var item in set2)
        {
            finalSet.Add(item);
        }

        return finalSet;
    }
}

public class SpellChecker
{
    private readonly HashSet<string> _correctWords = new()
    {
        "dog", "cat", "fish"
    };

    public bool IsCorrect(string word) => _correctWords.Contains(word);

    public void AddCorrectWord(string word) => _correctWords.Add(word);
}

public class YieldExercise
{
    public static IEnumerable<T> GetAllAfterLastNullReversed<T>(IList<T> input)
    {
        //your code goes here
        for (var i = input.Count - 1; i >= 0; i--)
        {
            if (input[i] == null)
            {
                yield break;
            }
            yield return input[i];
        }
    }
}
