let text = "Telerik Academy";

// Compared to while this loop is executed at least once
do {
  text = text.substring(0, text.length - 1);
} while (text.length > 0);

console.log(`The length of the text is: ${text.length}`);