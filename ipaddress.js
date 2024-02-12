//ssample string just look
const string = "The server's IP address is 192.168.1.2";

// Regular expression pattern for extracting IP addresses
const pattern = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g;

// Extract IP addresses using regex
const ipAddresses = string.match(pattern);

// Print the IP addresses
if (ipAddresses) {
    ipAddresses.forEach(ipAddress => {
        console.log("IP Address:", ipAddress);
    });
}
