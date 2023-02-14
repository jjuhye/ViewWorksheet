const canvas=document.querySelector('#myCanvas');
const ctx=canvas.getContext('2d');
const player={'x':0, 'y':0, 'size':70, 'color':'red'};
const bigBox={'x':canvas.width/2-70, 'y':canvas.height/2-70, 'size':140, 'color':'blue'};
const keyDown={};

window.setInterval(draw,10);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBigBox();
    drawPlayer();
    movePlayer();
}

function drawBigBox(){
    ctx.beginPath();
    ctx.rect(bigBox.x, bigBox.y, bigBox.size, bigBox.size);
    ctx.fillStyle=bigBox.color;
    ctx.fill();
    ctx.closePath();
}

function drawPlayer(){
    ctx.beginPath();
    ctx.rect(player.x,player.y,player.size,player.size);
    ctx.fillStyle=player.color;
    ctx.fill();
    ctx.closePath();
}

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
    }else if(keyDown['ArrowUp']){
        player.y--;
    }else if(keyDown['ArrowDown']){
        player.y++;
    }

    if (player.x <= 0) player.x = 0;
    if (player.y <= 0) player.y = 0;
    if (player.x >= canvas.width - player.size) player.x = canvas.width - player.size;
    if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;

    if(player.x+player.size>bigBox.x && player.x<bigBox.x+bigBox.size 
    && player.y+player.size>bigBox.y && player.y<bigBox.y+bigBox.size){
        bigBox.color='purple';
    }else{
        bigBox.color='blue';
    }
}