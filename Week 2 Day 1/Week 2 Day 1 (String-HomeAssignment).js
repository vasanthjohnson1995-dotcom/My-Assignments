// Example 1 & 2
function lengthOfLastWord(s) {
  const words = s.trim().split(" ");
  const lastWord = words[words.length - 1];
  return lastWord.length;
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" fly me to the moon "));


// Example 3
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");

  return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));