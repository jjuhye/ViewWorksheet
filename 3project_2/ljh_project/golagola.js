//문제 만들기
let itemList=new Array(5);
let itemCnt=5;
let stage=1;
let mission=8;
let hitItem=null;
let hit=document.querySelector('#hitItem');
let container=document.querySelector('#container');
let main=document.querySelector('#main');
let level=document.querySelector('#levelUp');

let start=document.querySelector('#start');
start.addEventListener('click',()=>gameStart());
function gameStart(){
    container.style='visibility: visible';
    main.style='visibility: hidden';
    time.init();
    if(time.isGameOver){
        let bigBag=document.querySelector('#bigBag');
        let start=document.querySelector('#start');
        bigBag.innerHTML='Game Over';
        start.innerHTML='게임 재시작';
        itemCnt=5;
        stage=1;
        mission=8;
        hitItem=null;
        time.reset();
        makeShowcase();
    }
}

function checkSame(){
    let imgList=document.querySelectorAll('.im');
    let y1=s1.getAttribute("data-y");
    let x1=s1.getAttribute("data-x");
    let y2=s2.getAttribute("data-y");
    let x2=s2.getAttribute("data-x");
    let s1Value=imgList[y1*5+x1*1].src;
    let s2Value=imgList[y2*5+x2*1].src;
    let hitItemName=`/${hitItem}.png`.slice(-6); // http://127.0.0.1:5500/GameProject/items/1.png
    if(s1!==s2 && s1Value===s2Value && (x1===x2 || y1===y2)){
        if(s1Value.slice(-6)===hitItemName){
            let sale=document.querySelector('#sale');
            sale.classList.add('cart');
            delItem(y1,y2,x1,x2,4);
            time.reset();
        }else{
        delItem(y1,y2,x1,x2,2);
        time.reset();
        }
    }else{
    itemList[y1][x1].className="item";
    itemList[y2][x2].className="item";
    }
    s1=0;
    s2=0;
}

function delItem(y1,y2,x1,x2,score){
    itemList[y1][x1].innerHTML='';
    itemList[y2][x2].innerHTML='';
    mission-=score; //미션 count감소
    checkScore(); 
    arrUpdate();
    if(mission<1){
        level.style.zIndex='10';
        setTimeout(levelUp, 2000);
    }
}

function levelUp(){
    stage++;
    mission=8*stage;
    itemCnt=5*stage;
   
    time.sec=15*stage;
    time.tt=10*stage;
    time.init();
    time.reset();
    makeShowcase();
    level.style.zIndex='0';
}

function arrUpdate(){
    let idx=0;
    for(let i=0; i<5; i++){
        for(let k=4; k>=0; k--){
            let num=Math.floor(Math.random()*itemCnt);
            if(itemList[k][i].innerHTML=='') {
                if(k==0){
                    itemList[k][i].innerHTML=`<img class="im" id="${idx}" src="./items/${num}.png">`;
                    itemList[k][i].className='item';
                }else{
                    for(let c=k; c>0; c--){
                        itemList[c][i].innerHTML=itemList[c-1][i].innerHTML;
                        itemList[c-1][i].innerHTML='';
                        itemList[c][i].className='item';
                    }
                    itemList[0][i].innerHTML=`<img class="im" id="${idx}" src="./items/${num}.png">`;
                    itemList[0][i].className='item';
                    k++;
                }
            }
            idx++;
        }
    }
}

function checkScore(){
    let score=document.querySelector('#mission');
    score.innerHTML=mission;
}

function checkStage(){
    let stg=document.querySelector('#stage');
    stg.innerHTML=stage;
}

function makeShowcase(){
    let ranNum=[];
    for(let i=0; i<25; i++){
        let num=Math.floor(Math.random()*itemCnt);
        if((i%5>0 && ranNum[i-1]==num)
        ||(i>4 && ranNum[i-5]==num)){
            i--;
            continue;
        }
        ranNum[i]=num;
    }
    hitItem=Math.floor(Math.random()*itemCnt);
    let hit=document.querySelector('#hitItem');
    // hit.style="background-image:`./items/${hitItem}.png`";
    hit.innerHTML=`<img id="hitImg" src="./items/${hitItem}.png">`
    let tdList=[...document.querySelectorAll('td')];
    let idx=0;
    for(let i=0; i<5; i++){
        itemList[i]=new Array(5);
        for(let k=0; k<5; k++){
            tdList[idx].innerHTML=`<img class="im" id="${idx}" src="./items/${ranNum[idx]}.png">`;
            itemList[i][k]=tdList[idx];
            idx++;
        }
    }
    checkScore();
    checkStage();
}

makeShowcase();

let s1=0;
let s2=0;
let cnt=0;
itemList.forEach(tr=>{
    tr.forEach(td=>{
        td.addEventListener('click',()=>{
            td.className="active";
            cnt++;
            if(cnt==1){
                s1=td;
            }else {
                s2=td;
                console.log(s1, s2);
                checkSame();
                cnt=0;
            }
        })
    })
})

let canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
let timer=document.querySelector('#timer');
const time=new Time(canvas, ctx, timer,container, main);
// time.init();