/* 
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

const twoSum = (array, target) => {
  let reminderProp = {};

  for (let i = 0; i < array.length; i++) {
    const val = array[i];

    if (val in reminderProp) {
      return [reminderProp[val], i];
    }

    const reminder = target - val;
    reminderProp[reminder] = i;
  }

  return [];
};

describe('Two Sum', () => {
  test('Ex-1', () => {
    const res = twoSum([2, 7, 11, 15], 9);
    expect(res).toEqual([0, 1]);
  });

  test('Ex-2', () => {
    const res = twoSum([3, 2, 4], 6);
    expect(res).toEqual([1, 2]);
  });

  test('Ex-3', () => {
    const res = twoSum([3, 3], 6);
    expect(res).toEqual([0, 1]);
  });
});
