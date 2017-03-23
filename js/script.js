var canvas = document.getElementById('spinegg');
var ctx = canvas.getContext('2d');
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
var egg1 = new Image();
egg1.src = 'img/1.1.png';
var egg2 = new Image();
egg2.src = 'img/2.1.png';
var egg3 = new Image();
egg3.src = 'img/3.1.png';
var begg1 = new Image();
begg1.src = 'img/1b.png';
var begg2 = new Image();
begg2.src = 'img/2b.png';
var begg3 = new Image();
begg3.src = 'img/3b.png';
var halo = new Image();
halo.src = 'img/halo.png';
var hammer = new Image();
hammer.src = 'img/hammer.png';
var circle = {centerX:250, centerY:560, radius:125, angle1:0, angle2:2, angle3:4}
var ball1 = {x:0, y:0};
var ball2 = {x:0, y:0};
var ball3 = {x:0, y:0};
var speed = 0.02;
var pause = false;
var dist = [];
var x = 0;
var y = 0;

function drawEgg1(){
  ball1.x = circle.centerX + Math.cos(circle.angle1) * circle.radius;
  ball1.y = circle.centerY + Math.sin(circle.angle1) * (circle.radius-50);
  circle.angle1 += speed;
  egg1.src = 'img/1.png';
  ctx.drawImage(egg1, ball1.x, ball1.y);
}
function drawEgg2(){
  ball2.x = circle.centerX + Math.cos(circle.angle2) * circle.radius;
  ball2.y = circle.centerY + Math.sin(circle.angle2) * (circle.radius-50);
  circle.angle2 += speed;
  egg2.src = 'img/2.png';
  ctx.drawImage(egg2, ball2.x, ball2.y);
}
function drawEgg3(){
  ball3.x = circle.centerX + Math.cos(circle.angle3) * circle.radius;
  ball3.y = circle.centerY + Math.sin(circle.angle3) * (circle.radius-50);
  egg3.src = 'img/3.png';
  circle.angle3 += speed;
  ctx.drawImage(egg3, ball3.x, ball3.y);
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
    // console.log('option: 3<1<2');
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
  if (pause){
    var b1d = Math.abs(x-ball1.x-88.5) + Math.abs(y-ball1.y-110);
    var b2d = Math.abs(x-ball2.x-88.5) + Math.abs(y-ball2.y-110);
    var b3d = Math.abs(x-ball3.x-88.5) + Math.abs(y-ball3.y-110);
    function sortNumber(a,b){
      return a - b;
    }
    function hammeregg(ballX, ballY){
      ctx.drawImage(hammer, ballX+60, ballY-30, hammer.width*0.4, hammer.height*0.4);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dist.push(b1d, b2d, b3d);
    dist.sort(sortNumber);
    // console.log(dist);
    if (dist[0] == b1d){
      egg1.src = 'img/1.1.png';
      ctx.drawImage(begg1, ball1.x-66, ball1.y+180);
    } else if (dist[0] == b2d){
      egg2.src = 'img/2.1.png';
      ctx.drawImage(begg2, ball2.x-66, ball2.y+180);
    } else if (dist[0] == b3d){
      egg3.src = 'img/3.1.png';
      ctx.drawImage(begg3, ball3.x-66, ball3.y+180);
    } else{
      pause = !pause;
      draw();
    }
    if (Math.sin(circle.angle1)<Math.sin(circle.angle2) && Math.sin(circle.angle2)<Math.sin(circle.angle3)){
      ctx.drawImage(egg1, ball1.x, ball1.y);
      ctx.drawImage(egg2, ball2.x, ball2.y);
      ctx.drawImage(egg3, ball3.x, ball3.y);

      // ctx.drawImage(begg3, ball3.x-66, ball3.y+180);
      // ctx.drawImage(halo, ball3.x-80, ball3.y-130);
      // hammeregg(ball3.x,ball3.y);

      console.log('option: 1<2<3');
    } else if (Math.sin(circle.angle2)<Math.sin(circle.angle1) && Math.sin(circle.angle1)<Math.sin(circle.angle3)){
      ctx.drawImage(egg2, ball2.x, ball2.y);
      ctx.drawImage(egg1, ball1.x, ball1.y);
      ctx.drawImage(egg3, ball3.x, ball3.y);

      // ctx.drawImage(begg3, ball3.x-66, ball3.y+180);
      // ctx.drawImage(halo, ball3.x-80, ball3.y-130);
      // hammeregg(ball3.x,ball3.y);

      console.log('option: 2<1<3');
    } else if (Math.sin(circle.angle1)<Math.sin(circle.angle3) && Math.sin(circle.angle3)<Math.sin(circle.angle2)){
      ctx.drawImage(egg1, ball1.x, ball1.y);
      ctx.drawImage(egg3, ball3.x, ball3.y);
      ctx.drawImage(egg2, ball2.x, ball2.y);

      // ctx.drawImage(begg2, ball2.x-66, ball2.y+180);
      // ctx.drawImage(halo, ball2.x-80, ball2.y-130);
      // hammeregg(ball2.x,ball2.y);

      console.log('option: 1<3<2');
    } else if (Math.sin(circle.angle3)<Math.sin(circle.angle1) && Math.sin(circle.angle1)<Math.sin(circle.angle2)){
      ctx.drawImage(egg3, ball3.x, ball3.y);
      ctx.drawImage(egg1, ball1.x, ball1.y);
      ctx.drawImage(egg2, ball2.x, ball2.y);

      // ctx.drawImage(begg2, ball2.x-66, ball2.y+180);
      // ctx.drawImage(halo, ball2.x-80, ball2.y-130);
      // hammeregg(ball2.x,ball2.y);

      console.log('option: 3<1<2');
    } else if (Math.sin(circle.angle2)<Math.sin(circle.angle3) && Math.sin(circle.angle3)<Math.sin(circle.angle1)){
      ctx.drawImage(egg2, ball2.x, ball2.y);
      ctx.drawImage(egg3, ball3.x, ball3.y);
      ctx.drawImage(egg1, ball1.x, ball1.y);

      // ctx.drawImage(begg1, ball1.x-66, ball1.y+180);
      // ctx.drawImage(halo, ball1.x-80, ball1.y-130);
      // hammeregg(ball1.x,ball1.y);

      console.log('option: 2<3<1');
    } else if (Math.sin(circle.angle3)<Math.sin(circle.angle2) && Math.sin(circle.angle2)<Math.sin(circle.angle1)){
      ctx.drawImage(egg3, ball3.x, ball3.y);
      ctx.drawImage(egg2, ball2.x, ball2.y);
      ctx.drawImage(egg1, ball1.x, ball1.y);

      // ctx.drawImage(begg1, ball1.x-66, ball1.y+180);
      // ctx.drawImage(halo, ball1.x-80, ball1.y-130);
      // hammeregg(ball1.x,ball1.y);

      console.log('option: 3<2<1');
    }
    if (dist[0] == b1d){
      ctx.drawImage(halo, ball1.x-80, ball1.y-130);
      hammeregg(ball1.x,ball1.y);
    } else if (dist[0] == b2d){
      ctx.drawImage(halo, ball2.x-80, ball2.y-130);
      hammeregg(ball2.x,ball2.y);
    } else if (dist[0] == b3d){
      ctx.drawImage(halo, ball3.x-80, ball3.y-130);
      hammeregg(ball3.x,ball3.y);
    } else{
      pause = !pause;
      draw();
    }
    dist = [];
    return false;
  };
  requestAnimationFrame(draw);
}

draw();

document.getElementById('spinegg').onclick = function getCursorPosition(event) {
  var rect = canvas.getBoundingClientRect();
  x = event.clientX - rect.left;
  y = event.clientY - rect.top;
  console.log('x: ' + x + ' y: ' + y);
  pause = !pause;
  draw();
}