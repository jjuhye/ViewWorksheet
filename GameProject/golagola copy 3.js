//문제 만들기
let itemList=new Array(5);
let itemCnt=10;
const stage=1;
let mission=20;
const hitItem=null;
let container=document.querySelector('#container');
let main=document.querySelector('#main');

let start=document.querySelector('#start');
start.addEventListener('click',()=>gameStart());
function gameStart(){
    container.style='visibility: visible';
    main.style='visibility: hidden';
    // makeShowcase();
    time.init();
    if(time.isGameOver){
        let bigBag=document.querySelector('#bigBag');
        let start=document.querySelector('#start');
        bigBag.innerHTML='Game Over';
        start.innerHTML='게임 재시작';
    }
}

function checkSame(){
    let y1=s1.getAttribute("data-y");
    let x1=s1.getAttribute("data-x");
    let y2=s2.getAttribute("data-y");
    let x2=s2.getAttribute("data-x");
    if(s1!==s2 && s1.innerHTML===s2.innerHTML && (x1===x2 || y1===y2)){
        delItem(y1,y2,x1,x2);
        time.reset();
    }else{
    itemList[y1][x1].className="item";
    itemList[y2][x2].className="item";
    s1=0;
    s2=0;
    }
}

function delItem(y1,y2,x1,x2){
    itemList[y1][x1].innerHTML='';
    itemList[y2][x2].innerHTML='';
    // itemList[y1][x1].className="item";
    // itemList[y2][x2].className="item";
    itemList[y1][x1].className="remove";
    itemList[y2][x2].className="remove";
    mission--;
    checkScore(); //미션 count감소
    arrUpdate();
    s1=0;
    s2=0;
    //장바구니 추가 이미지
    //히트면 장바구니 히트 이미지 + 히트 아이템 바꾸기
}

function arrUpdate(){
    for(let i=0; i<5; i++){
        for(let k=4; k>=0; k--){
            if(itemList[k][i].innerHTML=='') {
                if(k==0){
                    itemList[k][i].innerHTML=newItem(i);
                    itemList[k][i].className='item';
                }else{
                    for(let c=k; c>0; c--){
                        // console.log("inner체크")
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

function checkScore(){
    let score=document.querySelector('#mission');
    score.innerHTML=mission;
}

function checkStage(){
    let stg=document.querySelector('#stage');
    stg.innerHTML=stage;
}


let tdList=[...document.querySelectorAll('td')];

let idx=0;
function makeShowcase(){
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