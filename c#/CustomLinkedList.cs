using System.Collections;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

ICollection<int> builtInLinkedList = new LinkedList<int>();
builtInLinkedList.Add(5);

var list = new SinglyLinkedList<string>();

list.AddToFront("a");
list.AddToFront("b");
list.AddToFront("c");

foreach (var item in list)
{
    Console.WriteLine(item);
}

Console.ReadKey();

public interface ILinkedList<T> : ICollection<T>
{
    void AddToFront(T item);
    void AddToBack(T item);
}

public class SinglyLinkedList<T> : ILinkedList<T?>
{
    private Node _head;
    private int _count;
    public int Count => _count;

    public bool IsReadOnly => false;

    // same as below
    public void Add(T? item)
    {
        AddToBack(item);
    }

    public void AddToBack(T? item)
    {
        var newNode = new Node(item);
        if (_head is null)
        {
            _head = newNode;
        }
        else
        {
            var tail = GetNodes().Last();
            tail.Next = newNode;
        }
        ++_count;
    }

    public void AddToFront(T? item)
    {
        var newHead = new Node(item)
        {
            Next = _head
        };
        _head = newHead;
        ++_count;
    }

    public void Clear()
    {
        // before we clear, we must remove every reference to the node outside
        // this is to prevent garbage collector from saving the info elsewhere
        // this means you need to clear every next
        Node? current = _head;
        while (current is not null)
        {
            Node? temporary = current;
            current = current.Next;
            temporary.Next = null;
        }
        _head = null;
        _count = 0;
    }

    public bool Contains(T? item)
    {
        if (item is null)
        {
            return GetNodes().Any(node => node.Value is null);
        }
        return GetNodes().Any(node => item.Equals(node.Value));
    }

    public void CopyTo(T?[] array, int arrayIndex)
    {
        if (array is null)
        {
            throw new ArgumentNullException(nameof(array));
        }
        if (arrayIndex < 0 || arrayIndex >= array.Length)
        {
            throw new ArgumentOutOfRangeException(nameof(arrayIndex));
        }
        if (array.Length < _count + arrayIndex)
        {
            throw new ArgumentException("Array is not long enough.");
        }
        foreach (var node in GetNodes())
        {
            array[arrayIndex] = node.Value;
            ++arrayIndex;
        }
    }

    public bool Remove(T? item)
    {
        Node? predecessor = null;
        foreach (var node in GetNodes())
        {
            if ((node.Value is null && item is null) || (node.Value is not null && node.Value.Equals(item)))
            {
                if (predecessor == null)
                {
                    _head = node.Next;
                }
                else
                {
                    predecessor.Next = node.Next;
                }
                --_count;
                return true;
            }
            predecessor = node;
        }
        return false;
    }

    public IEnumerator<T?> GetEnumerator()
    {
        foreach (var node in GetNodes())
        {
            yield return node.Value;
        }
    }


    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    // this is a private method to fetch all nodes
    private IEnumerable<Node> GetNodes()
    {
        if (_head is null)
        {
            yield break;
        }

        Node? current = _head;
        while (current is not null)
        {
            yield return current;
            current = current.Next;
        }
    }
    private class Node
    {
        public T? Value { get; set; } // ? is to show that it is a nullable property
        public Node Next { get; set; } // ? is to show that it is a nullable property

        public Node(T? value)
        {
            Value = value;
        }

        public override string ToString() =>
            $"Value: {Value}, " +
            $"Next: {(Next is null ? "null" : Next.Value)}";
    }
}
