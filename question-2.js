const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let studentsScore = students.filter((student) => student.score > 50);
studentsScore.map((student) => (student.score += student.score * 0.1));
let totalScore = studentsScore.reduce(
  (total, student) => total + student.score,
  0
);

let result = `Total score is ${totalScore}`;

console.log(result);
