const canvas3 = document.querySelector(".shotGame #canvas");
const ctxs = canvas3.getContext("2d");
const shotTime = document.querySelector(".shotTime");
let tclass = new Ctarget;
let tarr = [];
let hitGap = 10;
let killCount;
let getTag;
let timeOut;
let timecnt =0;
let shotGameTime;
let num = 1;

let ammoImg = new Image();
let ammointerval = 15;
let ammoCnt = 10;
ammoImg.src = "ammo556.png";

object.game4.addEventListener('click',(e)=>{
    if(reloadCheck == false && ammoCnt != 0){
        tarr.forEach((t)=>{t.gunshot(e.offsetX,e.offsetY)});
        ammoCnt --;
    }
})

function shotGameInit() {
    killCount = 0;
    getTag = 0;
    timeOut = 20;
    tarr = [];
    makeTarget();
    ammoCnt = 10;
    shotGameTime = setInterval(()=>{
        reload();
        timecnt ++; 
        shotTime.innerHTML = `남은시간 : ${timeOut}`;
        if(timecnt >= 30){
            timecnt = 0;
            timeOut -- ; 
            console.log(timeOut);};
        if(timeOut <= 0 && object.runningGame3 == true){
            object.runningGame3 = false;
            clearInterval(shotGameTime);
            object.fail.style = 'z-index :5';
            let lifeCnt = object.life.innerHTML.length-1
            object.life.innerHTML='';
            for(let i = 0 ; i < lifeCnt ; i++){
                object.life.innerHTML+='♥';
            }
                let time = setTimeout(()=>{
                    object.fail.style = 'z-index :-1';
                    object.game4.style = 'z-index :-2';
                    object.mainObj.style = 'z-index :3';
                    cat.life = 50;
                },2000);
        }else if(killCount == 5){
            clearCounter++;
            clearInterval(shotGameTime);
            object.runningGame3 = false;
            mList[3].clear = true;
            object.clearObj.style = 'z-index :5';
        let time = setTimeout(()=>{
            object.clearObj.style = 'z-index :-1';
            object.game4.style = 'z-index :-2';
            object.mainObj.style = 'z-index :1';
        },2000);
        }
        ctxs.clearRect(0, 0, canvas3.width, canvas3.height);
        tarr.forEach((t)=>{t.renderTarget(ctxs)});
        shotdraw();
        tarr.forEach((t)=>{t.updateTaget()});
        ammo556();
    },50);
}

function makeTarget() {
    let ranNum = parseInt(Math.random()*3)+1;
    let ta = new Ctarget;
    ta.initTarget(ranNum,++getTag);
    tarr.push(ta);
}

function deleteobj(num){
    let idx = tarr.findIndex((t)=>t.tag == num);
    tarr.splice(idx, 1 );
}

function calcpos() {
    object.game4.addEventListener('mousemove',(e)=>{
            xpos = e.offsetX-30;
            ypos = e.offsetY-30;
    })
}

function drawCrosshair(){
    ctxs.beginPath();
    ctxs.drawImage(crossHair, xpos, ypos, 80, 80);
    ctxs.closePath();
}

function shotdraw() {
    calcpos();
    drawCrosshair();
}

function setKillTarget(num) {
    tarr.findIndex((t)=>{if(t.tag == num){
        t.deadTarget(550 + (killCount * hitGap),600);
    }});
}

function drawAmmo(cnt) {
    ctxs.beginPath();
    ctxs.drawImage(ammoImg,650 -(ammointerval * cnt) , 10, 20, 70);
    ctxs.closePath();
}

function ammo556() {
    for(let i = 0 ; i < ammoCnt ; i ++){
        drawAmmo(i);
    }
}

let reloadCheck = false;

function reload() {
    if (keyDown["r"]) {
        reloadCheck = true;
        let rtime = setInterval(()=>{
            if(ammoCnt == 10){
                clearInterval(rtime);
                reloadCheck = false;
            }else{
                ammoCnt +=0.5;
            }
        },500)
    }
}
