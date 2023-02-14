const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// playerImg.addEventListener('load',()={
//     ctx.drawImage(playerImg,0,0,player.size,player.size);
// })

let key = { "right": false, "left": false, "up": false, "down": false };
let player = { "x": 0, "y": 0, "size": 30, "speed": 5 };

function init() {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyupHandler);
}
// 키보드를 눌렀을때 움직이게 => 이벤트 함수의 콜백 
function keyDownHandler(e) {
    // console.log(e.key); 키값 console에서 확인하기
    
    if (e.key == "ArrowUp") {
        key.up = true;
    } else if (e.key == "ArrowRight") {
        key.right = true;
    } else if (e.key == "ArrowDown") {
        key.down = true;
    } else if (e.key == "ArrowLeft") {
        key.left = true;
    }
}

//키보드를 떼면 안움직이게 
function keyupHandler(e) {
    
    if (e.key == "ArrowUp") {
        key.up = false;
    } else if (e.key == "ArrowRight") {
        key.right = false;
    } else if (e.key == "ArrowDown") {
        key.down = false;
    } else if (e.key == "ArrowLeft") {
        key.left = false;
    }
    
    
}

// 플레이어 좌표 움직이기 
function movePlayer() {
    if(key.right && player.x<canvas.width-player.size){
        player.x+=player.speed;
    }else if(key.left && player.x>0){
        player.x-=player.speed;
    }else if(key.up && player.y>0){
        player.y-=player.speed;
    }else if(key.down && player.y<canvas.height-player.size){
        player.y+=player.speed;
    }
}

// 그림판 새로고침 
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    movePlayer();
}

let playerImg=new Image();
playerImg.src = "./airPlane.png";

// 플레이어 현재위치 그리기 
function drawPlayer() {
    ctx.beginPath(); // 그릴꺼야!
    // 우측상단모서리 x ,y, 가로, 세로 => 정사각형 플레이어 만들기 
    ctx.drawImage(playerImg,player.x,player.y,player.size,player.size)
    // ctx.rect(player.x, player.y, player.size, player.size);
    // ctx.fillStyle = "blue"; // 패인트 선택 : 블루 
    // ctx.fill(); // 위에 선택한 색으로 칠해주기 
    ctx.closePath();
}

init();
window.setInterval(draw,10);