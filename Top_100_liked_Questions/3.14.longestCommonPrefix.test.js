/* 
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

const longestCommonPrefix = (strs) => {
  strs.sort();

  const firstArrElementStr = strs[0];
  const lastArrElementStr = strs[strs.length - 1];

  let i = 0;

  while (i < firstArrElementStr.length && i < lastArrElementStr.length) {
    if (firstArrElementStr[i] !== lastArrElementStr[i]) break;
    i++;
  }

  return firstArrElementStr.substring(0, i);
};

describe('Longest Common Prefix', () => {
  test('Ex-1', () => {
    const res = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(res).toEqual('fl');
  });

  test('Ex-2', () => {
    const res = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(res).toEqual('');
  });
});
