import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
  if (typeof name !== "string") {
    return null;
  }

  let NameTrimmed = name.trim();

  if (NameTrimmed == "") {
    return "";
  } else if (NameTrimmed.includes("[`!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~]/")) {
    return null;
  }

  const words = NameTrimmed.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

//#endregion

//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("FormatName function");

tests.isEqual(
  formatName("hello world"),
  "Hello World",
  "formatted version of hello world should be Hello World"
);
tests.isEqual(formatName("%&"), "%&", "formatted version of %& should be null");
tests.isEqual(formatName(124), null, "formatted version of 124 should be null");
tests.isEqual(
  formatName("   hello"),
  "Hello",
  "formatted version of    hello should be Hello"
);
tests.isEqual(formatName(" "), "", "formatted version of   should be ");
//#endregion
