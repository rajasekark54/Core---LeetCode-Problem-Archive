/* 
136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

const singleNumber = function (nums) {
  let hash = {};

  for (const val of nums) {
    if (val in hash) {
      delete hash[val];
    } else {
      hash[val] = true;
    }
  }

  return parseInt(Object.keys(hash)[0]);
};

describe('Single Number', () => {
  test('Ex-1', () => {
    const res = singleNumber([2, 2, 1]);
    expect(res).toEqual(1);
  });

  test('Ex-2', () => {
    const res = singleNumber([4, 1, 2, 1, 2]);
    expect(res).toEqual(4);
  });

  test('Ex-3', () => {
    const res = singleNumber([1]);
    expect(res).toEqual(1);
  });
});
