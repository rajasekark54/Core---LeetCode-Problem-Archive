/* 
283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

const moveZeroes = (nums) => {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = i === idx ? nums[i] : 0;
      idx++;
    }
  }
  console.log(nums);
  return nums;
};

describe('isPalindrome', () => {
  test('Ex-1', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });
  test('Ex-2', () => {
    expect(moveZeroes([0])).toEqual([0]);
  });
});
