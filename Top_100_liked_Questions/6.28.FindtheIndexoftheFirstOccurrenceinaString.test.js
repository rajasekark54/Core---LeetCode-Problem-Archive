/* 
28. Find the Index of the First Occurrence in a String


Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

const strStr = function (haystack, needle) {
  if (haystack === needle || needle === '') return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    let j = 0;

    while (haystack[i + j] === needle[j]) {
      if (j === needle.length - 1) return i;
      j++;
    }
  }

  return -1;
};

describe('Find the Index of the First Occurrence in a String', () => {
  test('Ex-1', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';

    const res = strStr(haystack, needle);
    expect(res).toEqual(0);
  });

  test('Ex-2', () => {
    const haystack = 'leetcode';
    const needle = 'leeto';

    const res = strStr(haystack, needle);
    expect(res).toEqual(-1);
  });
});
