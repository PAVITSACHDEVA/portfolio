const insight = document.querySelector("#insight");
const ideas = [
  "Your top task is ready for a focused sprint.",
  "Three project ideas can become one polished prototype.",
  "A simple plan beats a crowded dashboard."
];
document.querySelector("#action").addEventListener("click", () => {
  insight.textContent = ideas[Math.floor(Math.random() * ideas.length)];
});
