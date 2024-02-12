// Sample string containing Twitter usernames
const string = "Follow me on @simeon123 and @azeh_tweet";

// Regular expression pattern for extracting Twitter usernames
const pattern = /@(\w+)/g;

// Extract Twitter usernames using regex
const usernames = string.match(pattern);

// Print the usernames
if (usernames) {
    usernames.forEach(username => {
        console.log("Twitter Username:", username);
    });
}
