/* 
118. Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
              1
            1   1
          1   2    1
        1   3    3   1
      1   4    6   4   1

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

const generate = (numRows) => {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    let curRow = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        curRow[j] = 1;
      } else {
        curRow[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    result.push(curRow);
  }

  return result;
};

describe('Pascals Triangle', () => {
  test('Ex-1', () => {
    const res = generate(5);
    expect(res).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  test('Ex-2', () => {
    const res = generate(1);
    expect(res).toEqual([[1]]);
  });
});
