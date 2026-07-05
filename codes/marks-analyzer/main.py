students = {
    "Aarav": [91, 84, 88],
    "Diya": [76, 82, 79],
    "Pavit": [95, 92, 97],
    "Riya": [68, 74, 71],
}

def grade(average):
    if average >= 90:
        return "A"
    if average >= 75:
        return "B"
    if average >= 60:
        return "C"
    return "Needs practice"

for name, marks in students.items():
    average = sum(marks) / len(marks)
    print(f"{name}: {average:.1f}% - {grade(average)}")

topper = max(students, key=lambda student: sum(students[student]))
print(f"Top performer: {topper}")
