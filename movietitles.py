import re

# Sample string containing movie titles
string = "Avengers (2012), The Dark Knight (2008), Inception (2010)"

# Regular expression pattern for extracting movie titles
pattern = r"(\b\w+\b) \((\d{4})\)"

# Extract movie titles and years using regex
matches = re.findall(pattern, string)

# Print the matches
for match in matches:
    print("Movie Title:", match[0])
    print("Year:", match[1])
