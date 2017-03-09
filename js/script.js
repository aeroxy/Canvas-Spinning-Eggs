var canvas = document.getElementById('spinegg');
var ctx = canvas.getContext('2d');
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
var egg1 = new Image();
var egg2 = new Image();
var egg3 = new Image();
var circle = {centerX:250, centerY:560, radius:125, angle1:0, angle2:2, angle3:4}
var ball1 = {x:0, y:0};
var ball2 = {x:0, y:0};
var ball3 = {x:0, y:0};
var speed = 0.02;

console.log('width = '+canvas.width);
console.log('height = '+canvas.height);
console.log('sin1: ' + Math.sin(circle.angle1));
console.log('sin2: ' + Math.sin(circle.angle2));
console.log('sin3: ' + Math.sin(circle.angle3));
function drawEgg1(){
  ball1.x = circle.centerX + Math.cos(circle.angle1) * circle.radius;
  ball1.y = circle.centerY + Math.sin(circle.angle1) * (circle.radius-50);
  circle.angle1 += speed;
  ctx.drawImage(egg1, ball1.x, ball1.y);
  egg1.src = 'img/1.png';
}
function drawEgg2(){
  ball2.x = circle.centerX + Math.cos(circle.angle2) * circle.radius;
  ball2.y = circle.centerY + Math.sin(circle.angle2) * (circle.radius-50);
  circle.angle2 += speed;
  ctx.drawImage(egg2, ball2.x, ball2.y);
  egg2.src = 'img/2.png';
}
function drawEgg3(){
  ball3.x = circle.centerX + Math.cos(circle.angle3) * circle.radius;
  ball3.y = circle.centerY + Math.sin(circle.angle3) * (circle.radius-50);
  circle.angle3 += speed;
  ctx.drawImage(egg3, ball3.x, ball3.y);
  egg3.src = 'img/3.png';
}
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.translate(0, 0);
  if (Math.sin(circle.angle1)<Math.sin(circle.angle2) && Math.sin(circle.angle2)<Math.sin(circle.angle3)){
    drawEgg1();
    drawEgg2();
    drawEgg3();
    // console.log('option: 1<2<3');
  } else if (Math.sin(circle.angle2)<Math.sin(circle.angle1) && Math.sin(circle.angle1)<Math.sin(circle.angle3)){
    drawEgg2();
    drawEgg1();
    drawEgg3();
    // console.log('option: 2<1<3');
  } else if (Math.sin(circle.angle1)<Math.sin(circle.angle3) && Math.sin(circle.angle3)<Math.sin(circle.angle2)){
    drawEgg1();
    drawEgg3();
    drawEgg2();
    // console.log('option: 1<3<2');
  } else if (Math.sin(circle.angle3)<Math.sin(circle.angle1) && Math.sin(circle.angle1)<Math.sin(circle.angle2)){
    drawEgg3();
    drawEgg1();
    drawEgg2();
    // console.log('option: 3<1<3');
  } else if (Math.sin(circle.angle2)<Math.sin(circle.angle3) && Math.sin(circle.angle3)<Math.sin(circle.angle1)){
    drawEgg2();
    drawEgg3();
    drawEgg1();
    // console.log('option: 2<3<1');
  } else if (Math.sin(circle.angle3)<Math.sin(circle.angle2) && Math.sin(circle.angle2)<Math.sin(circle.angle1)){
    drawEgg3();
    drawEgg2();
    drawEgg1();
    // console.log('option: 3<2<1');
  }
  requestAnimationFrame(draw);
}
draw();