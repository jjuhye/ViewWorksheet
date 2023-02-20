const canvas2 = document.querySelector(".jumpGame .containerJump #canvas");
const ctx2 = canvas2.getContext("2d");
const catLife = document.querySelector(".jlife");
const coinleve = document.querySelector(".clevel");
let Action = window.setInterval(draw2, 30);
let hurdleArr = [];
let coinArr = [];
let jumpStat = false;
let checkPoint = false;

let cat = {"y":400 , "score":0 , "life":50 , "getCoin":2};

function jinit() {
    cat.score = 0;
    cat.life = 50;
    hurdleArr = [];
    coinArr = [];
    catLife.style =`width:${--cat.life}%` ;
}

function jcrash() {
    let counter = 10;

    let catInt = setInterval(()=>{
        counter --;
        if(counter <= 0){
            clearInterval(catInt);
        }
        if(object.runningGame2 == true){
            catLife.style =`width:${--cat.life}%`;
        }
    },70)
}
function coinCrash() {
    let counter = 10;

    let catInt = setInterval(()=>{
        counter --;
        if(counter <= 0){
            clearInterval(catInt);
        }
        if(object.runningGame2 == true){
            coinleve.style =`width:${++cat.getCoin}%`;
        }
    },70)
}

let gapTime = setInterval(()=>{
    if(object.runningGame2 == true){
        let ranNum = parseInt(Math.random()*6);
        if(ranNum <= 2){
            let h = new hurdle();
            hurdleArr.push(h);
        }else if(ranNum <= 5){
        let c = new gold();
        c.init();
        coinArr.push(c);
        }
    }
},700);

function draw2() {
    if(object.runningGame2 == true){
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        drawP();
        jump();
    
        hurdleArr.forEach(e => {e.render(ctx2)});
        hurdleArr.forEach(e => {e.update()});
        hurdleArr.forEach(e => {e.collision(0,cat.y)});

        coinArr.forEach(e => {e.render(ctx2)});
        coinArr.forEach(e => {e.update()});
        coinArr.forEach(e => {e.collisioncoin(0,cat.y)});

        if(cat.life <= 1){
            object.runningGame2 = false;
            hurdleArr = [];
            coinArr = [];
            object.fail.style = 'z-index :5';
            let lifeCnt = object.life.innerHTML.length-1
            object.life.innerHTML='';
            for(let i = 0 ; i < lifeCnt ; i++){
                object.life.innerHTML+='♥';
            }
                let time = setTimeout(()=>{
                    object.fail.style = 'z-index :-1';
                    object.game3.style = 'z-index :-2';
                    object.mainObj.style = 'z-index :3';
                    cat.life = 50;
                    cat.getCoin = 2;
                    coinleve.style =`width:${++cat.getCoin}%`;
                },2000)
            }else if(cat.getCoin >= 50){
                clearCounter++;
                object.runningGame2 = false;
                hurdleArr = [];
                coinArr = [];
                mList[2].clear = true;
                object.clearObj.style = 'z-index :5';
            let time = setTimeout(()=>{
                object.clearObj.style = 'z-index :-1';
                object.game3.style = 'z-index :-2';
                object.mainObj.style = 'z-index :1';
            },2000)
            }
        }
    }

function jump() {
    if(cat.y == 300){
        checkPoint = true;
    }
    if(cat.y >= 300 && checkPoint == false && jumpStat == true){
        cat.y -=10;
    }else if(cat.y <= 400 && checkPoint == true){
        cat.y +=10;
    }
    if(keyDown[" "] && jumpStat == false){
        jumpStat = true;
    }else if(cat.y >= 400){
        jumpStat = false;
        checkPoint = false;
    }
}

function drawP(){
    ctx2.beginPath();
    ctx2.drawImage(playerImg, 0, cat.y, 50, 50);
    ctx2.closePath();
}

