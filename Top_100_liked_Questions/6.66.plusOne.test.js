/* 
6. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
*/
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  return [1, ...digits];
};

describe('Plus One', () => {
  test('Ex-1', () => {
    const res = plusOne([1, 2, 3]);
    expect(res).toEqual([1, 2, 4]);
  });

  test('Ex-2', () => {
    const res = plusOne([4, 3, 2, 1]);
    expect(res).toEqual([4, 3, 2, 2]);
  });

  test('Ex-3', () => {
    const res = plusOne([9]);
    expect(res).toEqual([1, 0]);
  });
});
