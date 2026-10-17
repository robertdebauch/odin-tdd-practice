// объект калькулятор содержит методы для сложения, вычитания, умножения и деления
// каждый метод принимает два значения и возвращает итоговый результат
import calculator from "./calculator.js";

describe("testing the addition operation", () => {
  test("takes two positive numbers and returns their sum", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test("takes two negative numbers", () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });
  test("takes numbers with different signs and returns their sum", () => {
    expect(calculator.add(-2, 3)).toBe(1);
  });
  test("takes floating-point numbers and returns their sum", () => {
    expect(calculator.add(2.2, 3.3)).toBeCloseTo(5.5);
  });
  test("takes a floating-point number and an integer and returns their sum", () => {
    expect(calculator.add(2.2, 3)).toBeCloseTo(5.2);
  });
});

describe("testing the subtraction operation", () => {
  test("takes two positive numbers and returns their difference", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test("takes two negative numbers and returns their difference", () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  });
  test("accepts floating-point numbers", () => {
    expect(calculator.subtract(5.5, 3.3)).toBeCloseTo(2.2);
  });
  test("takes a floating-point number and an integer and returns their difference", () => {
    expect(calculator.subtract(5.5, 3)).toBeCloseTo(2.5);
  });

  describe("testing the correct sign of the returned value", () => {
    test("takes a positive and a negative number, and returns their difference", () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });
    test("takes a negative and a positive number, and returns their difference", () => {
      expect(calculator.subtract(-5, 3)).toBe(-8);
    });
  });
});

describe("testing the multiplication operation", () => {
  test("takes two positive numbers and returns their product", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });
  test("takes floating-point numbers and returns their product", () => {
    expect(calculator.multiply(5.5, 3.3)).toBeCloseTo(18.15);
  });
  test("takes a floating-point number and an integer and returns their product", () => {
    expect(calculator.multiply(5.5, 3)).toBeCloseTo(16.5);
  });

  describe("testing the correct sign of the returned value", () => {
    test("takes two negative numbers and returns their positive product", () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });
    test("takes positive and negative values ​​and returns their negative product", () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
    });
  });
});

describe("testing the division operation", () => {
  test("divides without a remainder and returns the integer quotient", () => {
    expect(calculator.divide(6, 3)).toBeCloseTo(2);
  });
  test("performs division with a remainder and returns a fractional quotient", () => {
    expect(calculator.divide(5, 3)).toBeCloseTo(1.6666);
  });
  test("divides floating-point numbers without a remainder", () => {
    expect(calculator.divide(6.6, 3.3)).toBeCloseTo(2);
  });
  test("performs division of floating-point numbers with a remainder", () => {
    expect(calculator.divide(5.5, 3.3)).toBeCloseTo(1.6666);
  });
  test("takes a floating-point number and an integer and returns their quotient", () => {
    expect(calculator.divide(5.5, 3)).toBeCloseTo(1.8333);
  });

  describe("testing the correct sign of the returned value", () => {
    test("takes two negative numbers and returns their quotient", () => {
      expect(calculator.divide(-5, -3)).toBeCloseTo(1.6666);
    });
    test("takes positive and negative values ​​and returns their negative product", () => {
      expect(calculator.divide(-5, 3)).toBeCloseTo(-1.6666);
    });
  });
});

describe("error handling testing", () => {
  test("если происходит деление на ноль, то вбрасывается ошибка", () => {
    expect(() => calculator.divide(5, 0)).toThrow(Error);
  });
  test("If division by zero occurs, an error is thrown.", () => {
    expect(() => calculator.add("5", 3)).toThrow(TypeError);
  });
  test("If null is entered, an error is thrown.", () => {
    expect(() => calculator.divide(null, 3)).toThrow(TypeError);
  });
  test("If undefined is entered, an error is thrown.", () => {
    expect(() => calculator.multiply(undefined, 3)).toThrow(TypeError);
  });
  test("If NaN is entered, an error is thrown", () => {
    expect(() => calculator.subtract(NaN, 3)).toThrow(Error);
  });
});
