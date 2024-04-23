const isValid = (str) => {
  const SYMBOL = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  let stack = [];
  for (let char of str) {
    if (!SYMBOL[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== SYMBOL[char]) return false;
    }
  }

  return true;
};

describe('Valid Parentheses', () => {
  test('Ex-1', () => {
    const res = isValid('()');
    expect(res).toEqual(true);
  });

  test('Ex-2', () => {
    const res = isValid('()[]{}');
    expect(res).toEqual(true);
  });

  test('Ex-3', () => {
    const res = isValid('(]');
    expect(res).toEqual(false);
  });
});
