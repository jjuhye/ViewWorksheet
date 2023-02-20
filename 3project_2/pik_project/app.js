let clearCounter = 0;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const game1 = document.querySelector(".game2048");
const main = document.querySelector(".main");
const mainScreen = document.querySelector(".mainScreen");
const gameOver = document.querySelector(".gameOver");
const escapes = document.querySelector(".escape");
const failbutton = [...document.querySelectorAll(".gameOver button")];

class obj{
    constructor(){
        this.mainObj = document.querySelector(".main");
        this.clearObj = document.querySelector(".clear");
        this.game1 = document.querySelector(".game2048");
        this.game2 = document.querySelector(".tic");
        this.game3 = document.querySelector(".jumpGame");
        this.game4 = document.querySelector(".shotGame");
        this.life = document.querySelector("#life");
        this.fail = document.querySelector(".fail");
        this.runningGame = false;
        this.runningGame2 = false;
        this.runningGame3 = false;
    }
}
let object = new obj;

let xpos;
let ypos;

let player = { "x": canvas.width/2, "y": canvas.height/2, "size": 50, "speed": 5 };
let strArr = ['-2048-','-틱택토-','-장애물넘기-','   -총게임-'];
let keyDown = {};
let gameArr = {};
let mList = [];
let time = window.setInterval(draw, 20);

let machineImg = new Image();
machineImg.src = "./gamemachine.png";
let exitImg = new Image();
exitImg.src = "./exit.jpg";
let playerImg = new Image();  // <img>
playerImg.src = "./ddangddang.png";
let crossHair = new Image();
crossHair.src = "./crosshair.png";

window.addEventListener("keydown", (e) => {
    keyDown[e.key] = true;
})
window.addEventListener("keyup", (e) => {
    keyDown[e.key] = false;
})

window.onload = function () {
    let index  = 50; 
    let cnt = 0;
    for (let i = 0; i < 4; i++) {
        let m = new game();
        mList.push(m);
    }
    
    mList.forEach((e) => {e.init(index+=120 ,90,50,strArr[cnt++])})
    mList.forEach((e) => {console.log(e);})
    setGame();
}

escapes.addEventListener('click',()=>{
    escapes.style = 'z-index : -1';
    mainScreen.style = 'z-index:3';
    player.x = canvas.width/2;
    player.y = canvas.height/2;
    for(let i = 0 ; i < mList.length ; i++){
        mList[i].clear = false;
    }
    clearCounter = 0;
    object.life.innerHTML = '♥♥♥';
    failcheck = false;
    esCheck = false;
});

mainScreen.addEventListener('click',()=>{
    mainScreen.style = 'z-index:-1';
});

function failScreenAction() {
    gameOver.style = 'z-index : 5'
    failbutton.forEach((b)=>{
        b.addEventListener('mouseover',()=>{
            b.style = 'font-size:150%';
        });
        b.addEventListener('mouseout',()=>{
            b.style = 'font-size:100%';
        });
        b.addEventListener('click',()=>{
            player.x = canvas.width/2;
            player.y = canvas.height/2;
            if(b.innerHTML == 'retry'){
                main.style = 'z-index :2';
                gameOver.style = 'z-index : 0' ;
            }else{  
                mainScreen.style = 'z-index : 2' ;
                gameOver.style = 'z-index : -1' ;
                main.style = 'z-index : 1';
            }   
            for(let i = 0 ; i < mList.length ; i++){
                mList[i].clear = false;
            }
            clearCounter = 0;
            object.life.innerHTML = '♥♥♥';
            failcheck = false;
        });
    })
}

let failcheck = false;

function draw() {
    if(failcheck == false && object.life.innerHTML.length == 0){
        failcheck = true;
        let ti = setTimeout(()=>{failScreenAction();},2000)
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePlayer();
    mList.forEach((m)=>{
        m.render(ctx);
    })
    drawPlayer();
    crash();
    if(clearCounter == 4){
        esCheck = true;
        drawExit();
    }
    if(object.runningGame3 == true){
        document.body.style.cursor = 'none';
    }else{
        document.body.style.cursor = 'auto';
    }
}

let esCheck = false;

function drawExit() {
    ctx.beginPath();
    ctx.drawImage(exitImg,0,0,50,50);
    ctx.closePath();
}

function crash() {
    if(player.y <= 145 && (player.x >= 150 && player.x <=220)){
        player.y += 50;
        if(mList[0].clear == true){
            return;
        }
        game1.style = 'z-index :1';
        main.style = 'z-index :0';
        setGame();
    }else if(player.y <= 145 && (player.x >= 270 && player.x <=340)){
        player.y += 50;
        if(mList[1].clear == true){
            return;
        }else{
            initTic();
            object.game2.style = 'z-index :3';
            main.style = 'z-index :0';
            object.runningGame = true;
        }
    }else if(player.y <= 145 && (player.x >= 390 && player.x <=460)){
        player.y += 50;
        if(mList[2].clear == true){
            return;
        }else{
            object.game3.style = 'z-index :3';
            jinit();
            main.style = 'z-index :0';
            object.runningGame2 = true;
        }
    }else if(player.y <= 145 && (player.x >= 510 && player.x <=580)){
        player.y += 50;
        if(mList[3].clear == true){
            return;
        }else{
            object.game4.style = 'z-index :3';
            shotGameInit();
            main.style = 'z-index :0';
            object.runningGame3 = true;
        }
    }else if(esCheck == true && player.y <= 50 && (player.x >= 0 && player.x <=60) ){
        main.style = 'z-index :0';
        escapes.style = 'z-index : 3';
    }
}

function drawMachine(x,y) {
    ctx.beginPath();
    ctx.drawImage(machineImg,x,y,70,70);
    ctx.closePath();
}

function drawPlayer() {
    ctx.beginPath();
    ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
    ctx.closePath();
}

function movePlayer() {
    if (keyDown["ArrowUp"]) {
        player.y -= player.speed;
        player.size = 80;
    } else if (keyDown["ArrowRight"]) {
        player.x += player.speed;
        player.size = 80;
    } else if (keyDown["ArrowDown"]) {
        player.y += player.speed;
        player.size = 80;
    } else if (keyDown["ArrowLeft"]) {
        player.x -= player.speed;
        player.size = 80;
    }else{
        player.size = 50;
    }

    if (player.x <= 0) player.x = 0;
    if (player.y <= 0) player.y = 0;
    if (player.x >= canvas.width - player.size) player.x = canvas.width - player.size;
    if (player.y >= canvas.height - player.size) player.y = canvas.height - player.size;

}


