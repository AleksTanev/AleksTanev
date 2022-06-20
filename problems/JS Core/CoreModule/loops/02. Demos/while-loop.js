let text = "Telerik Academy";

console.log(`The length of the text is: ${text.length}`);

while (text.length > 0) {
    text = text.substring(0, text.length - 1);
}

console.log(`The length of the text is: ${text.length}`);
