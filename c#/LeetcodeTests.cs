using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectionExamples
{
    public class LeetcodeTests
    {
        public LeetcodeTests()
        {
            
        }
        // a function that returns the age of a passenger on the flight
        //string[] details = c;
        public int CountSeniors(string[] details)
        {
            int seniorCount = 0;
            foreach (var item in details)
            {
                var age = int.Parse($"{item[11]}{item[12]}");
                if (age > 60) seniorCount++;
            }
            Console.WriteLine(seniorCount);
            return seniorCount;
        }

        

    }
}
