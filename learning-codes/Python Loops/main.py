numbers = [4, 7, 2, 9, 5]
total = 0

for number in numbers:
    total += number
    print(f"Added {number}, total is now {total}")

print("Final total:", total)

for row in range(1, 6):
    print("*" * row)
