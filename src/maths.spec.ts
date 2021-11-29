import { add } from "./maths";

describe("add method", () => {
  it("adds numbers", () => {
    expect(add(1, 10)).toEqual(11);
  });
});
