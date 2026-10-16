import capitalize from "./capitalize.js";

describe("The first letter of the returned string should be capitalized, while the rest of the string should remain the same", () => {
  test("the word 'string' becomes 'String'", () => {
    expect(capitalize("string")).toBe("String");
  });

  test("the word 'rock' becomes 'Rock'", () => {
    expect(capitalize("rock")).toBe("Rock");
  });

  test("the word 'капуста' becomes 'Капуста'", () => {
    expect(capitalize("капуста")).toBe("Капуста");
  });

  test("the word 'ворона' becomes 'Ворона'", () => {
    expect(capitalize("ворона")).toBe("Ворона");
  });
});

describe("Handling cases where the input is not a string", () => {
  test("throws an error if a number is provided", () => {
    expect(() => capitalize(1)).toThrow(Error);
  });

  test("throws an error if null is provided instead of a string", () => {
    expect(() => capitalize(null)).toThrow(Error);
  });

  test("throws an error if undefined is provided instead of a string", () => {
    expect(() => capitalize(undefined)).toThrow(Error);
  });
});

test("The first letter of a each string in array becomes capitalized", () => {
  const words = [
    "слово",
    "cat",
    "zeitgeist",
    "observer",
    "наблюдатель",
    "туман",
    "ночь",
  ];

  words.forEach((word) => {
    const expectedWord = word.charAt(0).toUpperCase() + word.slice(1);
    expect(capitalize(word)).toBe(expectedWord);
  });
});

test("The first letter of the returned string should be uppercase", () => {
  expect(capitalize("string")).toMatch(/^[A-Z][a-z]*$/);
});

test("If the string is empty, an empty string is returned and no error occurs", () => {
  expect(capitalize("")).toBe("");
});

test("If the word already starts with an uppercase letter, it remains unchanged", () => {
  expect(capitalize("String")).toBe("String");
});

test("If the string starts with a space, it is removed and the word becomes capitalized", () => {
  expect(capitalize(" string")).toBe("String");
});
