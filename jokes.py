import re

# Sample string containing jokes
string = "Why did the chicken cross the road? Because it wanted to get to the other side"

# Regular expression pattern for extracting jokes
pattern = r"Why did the (.*?)\? Because(.*?)"

# Extract jokes using regex
match = re.search(pattern, string)

# Print the match
if match:
    print("Joke Setup:", match.group(1))
    print("Joke Punchline:", match.group(2))
