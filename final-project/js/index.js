const canvas = document.getElementById("canvas-1");
const ctx = canvas.getContext("2d");

const width = 810;
const height = 600;



function resizeCanvas() {
  //fit canvas to window and fix issues with canvas blur on zoom
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
  canvas.width = width * scale;
  canvas.height = height * scale;
  ctx.scale(scale, scale);
  
  //example drawings
  // ctx.clearRect(0, 0, width, height);
  // ctx.fillText("left", 5, 200);
  // ctx.font = '70px serif';
  // ctx.textAlign = "right"; 
  // ctx.fillText("right", width, 150);
  // ctx.fillRect(width-50, height-50, 45, 45);
  // ctx.beginPath();
  // ctx.arc(40, 40, 50, 0, 2 * Math.PI);
  // ctx.stroke();
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);


var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
grd.addColorStop(0, "#ff661a");
grd.addColorStop(1, "#ff9933");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(canvas.width/2 +150, 130, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(canvas.width/2, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(200, 300, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 450, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(420, 500, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(canvas.width/2 +150, canvas.height/2 +150, 50, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
// function draw();
//  for (i=0; i< 5; i++);



//___________________get mouse input___________________

// let mouse = {
//   down: false,
//   x: 0,
//   y: 0
// };
// canvas.addEventListener("mousemove", event => {
//   mouse.x = event.offsetX
//   mouse.y = event.offsetY
// });
// canvas.addEventListener("mousedown", event => {
//   mouse.down = true;
//   // console.log(mouse);
// });
// canvas.addEventListener("mouseup", event => {
//   mouse.down = false;
// });

//___________________get keyboard input___________________

// const keys = [];
// document.onkeydown = function(e){
//   keys[e.keyCode] = true;
//   //console.log(e.keyCode);
// }
// document.onkeyup = function(e){
//   keys[e.keyCode] = false;
// }

//___________________animation loop ___________________

// function cycle(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   requestAnimationFrame(cycle);
// }
// requestAnimationFrame(cycle);