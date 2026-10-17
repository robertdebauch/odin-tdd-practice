const calculator = {
  validate(value1, value2) {
    if (typeof value1 !== "number" || typeof value2 !== "number") {
      throw new TypeError("Only numbers can be used");
    }
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
      throw new Error("Do not use NaN");
    }
  },
  add(value1, value2) {
    this.validate(value1, value2);
    return value1 + value2;
  },
  subtract(value1, value2) {
    this.validate(value1, value2);

    return value1 - value2;
  },
  multiply(value1, value2) {
    this.validate(value1, value2);

    return value1 * value2;
  },
  divide(value1, value2) {
    this.validate(value1, value2);

    if (value2 === 0) {
      throw new Error("You cannot divide by zero!");
    }

    return value1 / value2;
  },
};

export default calculator;
