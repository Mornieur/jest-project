import { SimpleFunction } from "../components/SimpleFunction";

describe("SimpleFunction", () => {
  test("should add two numbers correctly", () => {
    expect(SimpleFunction(1, 2)).toBe(3);
    expect(SimpleFunction(-1, 1)).toBe(0);
  });
});
