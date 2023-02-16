const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 200);
ctx.fillRect(300,50,100,100);
