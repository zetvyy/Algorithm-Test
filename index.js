// create a function that accept two string parameter
// your function should be able to determine the first parameter is anagram with from the second parameter vice versa
// anagram will happen if the amount of each letter
// from first parameter is exactly equal with the second parameter and vice versa
// examples:
// anagram('aaz', 'zza') => false
// anagram('anagram', 'nagaram')) => true

// const anagr = "";
// const versa = "";

function anagram(anagr, versa) {
  for (let i = 0; i < anagr.length; i++) {
    for (let j = 0; j < versa.length; j++) {
      if (anagr.count(charAt(i)) === versa.count(charAt(j))) {
        return true;
      } else {
        return false;
      }
    }
  }
}

anagram("aku", "kua");
