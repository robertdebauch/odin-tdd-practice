import reverseString from "./reverse.js";

describe("the function takes a string and returns it in reversed form", () => {
  test("the string 'abc' becomes 'cba'", () => {
    expect(reverseString("abc")).toBe("cba");
  });

  test("the string 'cba' becomes 'abc'", () => {
    expect(reverseString("cba")).toBe("abc");
  });

  test("the string 'abcde' becomes 'edcba'", () => {
    expect(reverseString("abcde")).toBe("edcba");
  });

  test("accepts a string with spaces and returns it mirrored, preserving the spaces", () => {
    expect(reverseString("abc def")).toBe("fed cba");
  });

  test("accepts an empty string and returns an empty string without an error", () => {
    expect(reverseString("")).toBe("");
  });

  test("takes a string containing special characters and returns it in mirrored form", () => {
    expect(reverseString("a😀b")).toBe("b😀a");
  });
});

describe("if something other than a string is passed to the function, an error is thrown", () => {
  test("if a number is passed, an error is thrown", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
  });

  test("if null is passed, an error is thrown", () => {
    expect(() => reverseString(null)).toThrow(TypeError);
  });

  test("if undefined is passed, an error is thrown", () => {
    expect(() => reverseString(undefined)).toThrow(TypeError);
  });
});
