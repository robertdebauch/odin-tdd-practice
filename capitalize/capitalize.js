function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("You should only use strings!");
  }

  const trimmedString = string.trimStart();

  const capitalizedString =
    trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
  return capitalizedString;
}

export default capitalize;
