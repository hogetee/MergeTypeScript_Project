const { merge } = require("../src/merge");

describe("merge function", () => {
  test("should merge and sort correctly", () => {
    const col1 = [1, 3, 5];
    const col2 = [2, 4, 6];
    const col3 = [9, 8, 7];
    const result = merge(col1, col2, col3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
describe("merge function with negative numbers", () => {
  test("should merge and sort correctly", () => {
    const col1 = [0, 3, 5];
    const col2 = [2, 4, 6];
    const col3 = [-7, -8, -9];
    const result = merge(col1, col2, col3);
    expect(result).toEqual([-9, -8, -7, 0, 2, 3, 4, 5, 6]);
  });
});