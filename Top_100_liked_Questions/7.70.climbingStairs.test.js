/* 
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

const climbStairs = (n) => {
  if (n === 0) return n;

  let memo = {};
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 2;

  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
};

describe('Climbing Stairs', () => {
  test('Ex-1', () => {
    const res = climbStairs(2);
    expect(res).toEqual(2);
  });

  test('Ex-2', () => {
    const res = climbStairs(3);
    expect(res).toEqual(3);
  });

  test('Ex-4', () => {
    const res = climbStairs(4);
    expect(res).toEqual(5);
  });

  test('Ex-4', () => {
    const res = climbStairs(5);
    expect(res).toEqual(8);
  });
});
