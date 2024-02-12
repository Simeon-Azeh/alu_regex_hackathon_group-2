// sample string with song lyrics 
const string = "[Verse 1] For now the day bleeds into night fall";

// Regular expression pattern for extracting the song lyrics
const pattern = /\[Verse \d+\] (.*)/;

// Extract song lyrics using regex 
const match = string.match(pattern);

// Print the match
if (match) {
    console.log("Verse 1:", match[1]);
}
