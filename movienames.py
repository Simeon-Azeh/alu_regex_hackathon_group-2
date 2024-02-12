import re

# Sample string containing TV episode titles
string = "Friends S01E01: The One Where Monica Gets a Roommate"

# Regular expression pattern for extracting TV episode titles
pattern = r"(\b\w+\b) S(\d{2})E(\d{2}): (.*)"

# Extract TV episode titles using regex
match = re.search(pattern, string)

# Print the match
if match:
    print("Show Name:", match.group(1))
    print("Season Number:", match.group(2))
    print("Episode Number:", match.group(3))
    print("Episode Title:", match.group(4))
