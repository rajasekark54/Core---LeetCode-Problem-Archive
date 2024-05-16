/* 
169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const majorityElement = (nums) => {
  const n = nums.length;
  const timesToFall = Math.floor(n / 2);
  let existenceCount = {};

  let i = 0;
  while (i < n) {
    let val = nums[i];

    if (val in existenceCount) {
      existenceCount[val]++;
    } else {
      existenceCount[val] = 1;
    }

    if (timesToFall < existenceCount[val]) {
      return val;
    }
  }

  return null;
};

describe('Single Number', () => {
  test('Ex-1', () => {
    const res = majorityElement([3, 2, 3]);
    expect(res).toEqual(3);
  });

  test('Ex-2', () => {
    const res = majorityElement([2, 2, 1, 1, 1, 2, 2]);
    expect(res).toEqual(2);
  });
});
