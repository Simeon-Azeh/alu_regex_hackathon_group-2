// Sample string containing weirdly formatted dates
const string = "Today's date is 11-Feb-2024";

// Regular expression pattern for extracting weirdly formatted dates
const pattern = /(\d{2})-(\w{3})-(\d{4})/;

// Extract weirdly formatted dates using regex
const match = string.match(pattern);

// Print the match
if (match) {
    console.log("Day:", match[1]);
    console.log("Month:", match[2]);
    console.log("Year:", match[3]);
}
