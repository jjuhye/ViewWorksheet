const canvas=document.querySelector('#myCanvas');
const ctx=canvas.getContext('2d');
const player={'x':canvas.width/2-35, 'y':500, 'size':70, 'color':'blue'};
// const bigBox={'x':canvas.width/2-70, 'y':canvas.height/2-70, 'size':140, 'color':'blue'};
const keyDown={};

window.setInterval(draw,10);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawSmallBox();
    drawPlayer();
    // drawBullet();
    movePlayer();
}

function drawSmallBox(){
    ctx.beginPath();
    ctx.fillStyle='navy';
    ctx.fillRect(30,55,5,5);
    for(let i=1; i<9; i++){
        ctx.fillRect(30+i*105,55,5,5);
    }
    ctx.closePath();
}

function drawPlayer(){
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.rect(player.x,player.y,player.size,player.size);
    ctx.fillStyle=player.color;
    ctx.fill();
    ctx.closePath();
}

// function drawBullet(){
    // ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.beginPath();
//     ctx.rect(bigBox.x, bigBox.y, bigBox.size, bigBox.size);
//     ctx.fillStyle=bigBox.color;
//     ctx.fill();
//     ctx.closePath();
// }

window.addEventListener('keydown',e=>{
    keyDown[e.key]=true;
})

window.addEventListener('keyup',e=>{
    keyDown[e.key]=false;
})

function movePlayer(){
    if(keyDown['ArrowLeft']){
        player.x--;
    }else if(keyDown['ArrowRight']){
        player.x++;
    }

    if (player.x <= 0) player.x = 0;
    if (player.x >= canvas.width - player.size) player.x = canvas.width - player.size;

    downBullet();
}