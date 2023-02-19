//문제 만들기
let itemList=new Array(5);
let itemCnt=5;
let stage=1;
let mission=10;
let hitItem=null;
let container=document.querySelector('#container');
let main=document.querySelector('#main');
let im={"y":"", "x":"", "no":""};

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
        mission=10;
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
    let s1Value=imgList[y1][x1].no;
    let s2Value=imgList[y2][x2].no;
    if(s1!==s2 && s1Value===s2Value && (x1===x2 || y1===y2)){
        delItem(y1,y2,x1,x2);
        time.reset();
    }else{
    itemList[y1][x1].className="item";
    itemList[y2][x2].className="item";
    // s1=0;
    // s2=0;
    }
}

function delItem(y1,y2,x1,x2){
    itemList[y1][x1].innerHTML='';
    itemList[y2][x2].innerHTML='';
    mission-=2; //미션 count감소
    if(mission<1){
        //레벨업
    }
    checkScore(); 
    arrUpdate();
    s1=0;
    s2=0;
    //장바구니 추가 이미지
    //히트면 장바구니 히트 이미지 + 히트 아이템 바꾸기
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
                    imgList[k][i].no=num;
                }else{
                    for(let c=k; c>0; c--){
                        itemList[c][i].innerHTML=itemList[c-1][i].innerHTML;
                        itemList[c-1][i].innerHTML='';
                        itemList[c][i].className='item';
                        imgList[c][i].no=imgList[c-1][i].no;
                    }
                    itemList[0][i].innerHTML=`<img class="im" id="${idx}" src="./items/${num}.png">`;
                    itemList[0][i].className='item';
                    imgList[0][i].no=num;
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

let imgList=new Array(5);

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
    
    let tdList=[...document.querySelectorAll('td')];
    let idx=0;
    for(let i=0; i<5; i++){
        itemList[i]=new Array(5);
        imgList[i]=new Array(5);
        for(let k=0; k<5; k++){
            im.y=i; im.x=k; im.no=ranNum[idx];
            imgList[i][k]=im;
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
                // console.log(s1, s2);
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