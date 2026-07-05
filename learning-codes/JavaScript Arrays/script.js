const marks = [92, 76, 88, 95, 67, 84];

const highScores = marks.filter(mark => mark >= 85);
const average = marks.reduce((total, mark) => total + mark, 0) / marks.length;
const sorted = [...marks].sort((a, b) => b - a);

console.log("High scores:", highScores);
console.log("Average:", average.toFixed(1));
console.log("Sorted:", sorted);
