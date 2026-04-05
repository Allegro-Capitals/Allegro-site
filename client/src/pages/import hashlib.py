import hashlib

result = []

with open("server_logs.txt", "r") as f:
    for line in f:
        # Skip unwanted lines
        if line.startswith("SERVER") or line.startswith("-"):
            continue
        
        # MD5 hash (including newline)
        md5_hash = hashlib.md5(line.encode()).hexdigest()
        
        # Check last character
        if md5_hash[-1].isdigit():
            # Extract 5th character (index 4)
            if len(line) > 4:
                result.append(line[4])

# Join result
flag = "".join(result)
print(flag)