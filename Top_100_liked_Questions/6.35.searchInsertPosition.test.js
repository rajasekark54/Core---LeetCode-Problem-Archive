/* 
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

var searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};

describe('Search Insert Position', () => {
  test('Ex-1', () => {
    const res = searchInsert([1, 3, 5, 6], 5);
    expect(res).toEqual(2);
  });

  test('Ex-2', () => {
    const res = searchInsert([1, 3, 5, 6], 2);
    expect(res).toEqual(1);
  });

  test('Ex-3', () => {
    const res = searchInsert([1, 3, 5, 6], 7);
    expect(res).toEqual(4);
  });
});
