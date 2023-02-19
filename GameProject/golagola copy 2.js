//문제 만들기
let itemList=new Array(5);
let itemCnt=5;
const stage=1;
let mission=0;
const hitItem=null;
let container=document.querySelector('#container');
let main=document.querySelector('#main');

let start=document.querySelector('#start');
start.addEventListener('click',()=>{
    container.style='visibility: visible';
    main.style='visibility: hidden';
    // newGame();
    time.init();
    time.reset();
    makeShowcase();
    gameStart();
})

// function newGame(){
//     time.reset();
//     gameStart();
// itemList=new Array(5);
// itemCnt=5;
// stage=1;
// mission=10;
// const hitItem=null;
// makeShowcase();
// }

function gameStart(){
    
    // time.init();
    // idx=0;
    // makeShowcase();
    // cnt=0;
    // playGame();
    if(time.isGameOver){
        let bigBag=document.querySelector('#bigBag');
        bigBag.innerHTML='Game Over';
//         itemList=new Array(5);
// itemCnt=5;
// stage=1;
// mission=10;
// const hitItem=null;
// makeShowcase();
    }
}

function checkSame(){
    // let y1=s1.getAttribute("data-y");
    // let x1=s1.getAttribute("data-x");
    // let y2=s2.getAttribute("data-y");
    // let x2=s2.getAttribute("data-x");
    if(s1==s2 && (x1==x2 || y1==y2) && !(y1==y2 && x1==x2)){
        delItem();
        time.reset();
    }else{
    itemList[y1][x1].className="item";
    itemList[y2][x2].className="item";
    // s1=0;
    // s2=0;
    }
}

function delItem(){
    itemList[y1][x1].innerHTML='';
    itemList[y2][x2].innerHTML='';
    // itemList[y1][x1].className="item";
    // itemList[y2][x2].className="item";
    // itemList[y1][x1].className="remove";
    // itemList[y2][x2].className="remove";
    mission-=2;
    putMission(); //미션 count감소
    // if(mission==0){
    //     levelUp();
    // }**********************************************
    arrUpdate();
    s1=0;
    s2=0;
    //장바구니 추가 이미지
    //히트면 장바구니 히트 이미지 + 히트 아이템 바꾸기
}

// function levelUp(){

    // stage++;
    // mission+=10;
    // for(let i=0; i<5; i++){
    //     for(let k=0; k<5; k++){
    //         itemList[i][k].innerHTML='';
    //     }
    // }
    // arrUpdate();
    // time.reset();
    // gameStart();
// }

function arrUpdate(){
    for(let i=0; i<5; i++){
        for(let k=4; k>=0; k--){
            if(itemList[k][i].innerHTML=='') {
                if(k==0){
                    itemList[k][i].innerHTML=newItem(i);
                    itemList[k][i].className='item';
                }else{
                    for(let c=k; c>0; c--){
                        itemList[c][i].innerHTML=itemList[c-1][i].innerHTML;
                        itemList[c-1][i].innerHTML='';
                        itemList[c][i].className='item';
                    }
                    itemList[0][i].innerHTML=newItem(i);
                    itemList[0][i].className='item';
                    k++;
                }
            }
        }
    }
}

function newItem(i){
    while(true){
        let num=Math.floor(Math.random()*itemCnt+1);
        if((itemList[1][i].innerHTML==num)||
           (i>0 && itemList[0][i-1].innerHTML==num)||
           (i<4 && itemList[0][i+1].innerHTML==num)){
            continue;
        }
        return num;
    }
}

function putMission(){
    let score=document.querySelector('#mission');
    score.innerHTML=mission;
}

function putStage(){
    let stg=document.querySelector('#stage');
    stg.innerHTML=stage;
}



function makeShowcase(){
    let idx=0;
    let tdList=[...document.querySelectorAll('td')];
    mission=10;
    for(let i=0; i<5; i++){
        itemList[i]=new Array(5);
        for(let k=0; k<5; k++){
            let num=Math.floor(Math.random()*itemCnt+1);
            if((k>0 && tdList[idx-1].innerHTML==num)
            ||(i>0 && tdList[idx-5].innerHTML==num)){
                k--;
                continue;
            }
            tdList[idx].innerHTML=num;
            itemList[i][k]=tdList[idx];
            idx++;
        }
    }
putMission();
putStage();
// s1=0;
// s2=0;
// cnt=0;
playGame();
}

// makeShowcase();
let y1=null;
let x1=null;
let y2=null;
let x2=null;
let s1=null;
let s2=null;
let cnt=0;
function playGame(){
    itemList.forEach(tr=>{
        tr.forEach(td=>{
            td.addEventListener('click',()=>{
                td.className="active";
                cnt++;
                if(cnt==1){
                    y1=td.getAttribute("data-y");
                    x1=td.getAttribute("data-x");
                    s1=td.innerHTML;
                }else {
                    y2=td.getAttribute("data-y");
                    x2=td.getAttribute("data-x");
                    s2=td.innerHTML;
                    console.log(s1, s2);
                    checkSame();
                    y1=null; x1=null; y2=null; x2=null; s1=null; s2=null; cnt=0;
                }
            })
        })
    })
}

let canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
let timer=document.querySelector('#timer');
const time=new Time(canvas, ctx, timer,container, main);
// time.init();