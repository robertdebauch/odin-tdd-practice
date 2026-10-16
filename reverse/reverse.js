function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError("Please enter string value");
  }

  const splittedString = [...string].reverse().join("");
  return splittedString;
}

export default reverseString;
