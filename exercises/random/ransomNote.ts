// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// type char = {
//   no: number;
// };

// type MapTypes = {
//   val: char;
// };

function canConstruct(ransomNote: string, magazine: string): boolean {
  // when comparing strings, best to use characterMaps
  let map: any = {};
  for (let char of magazine) {
    if (!map[char]) {
      map[char] = 1;
    }
    map[char]++;
  }

  for (let char of ransomNote) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }

  return true;
}

canConstruct("aa", "aab");
canConstruct("a", "b");
canConstruct("aa", "bb");
