import add from '../add';

test('add works', () => {
  console.log(process.env.NODE_ENV);
  expect(add(2, 1)).toBe(3);
});
