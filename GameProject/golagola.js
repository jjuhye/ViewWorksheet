//문제 만들기
let itemList=new Array(5);
let itemCnt=10;
const stage=1;
const mission=20;
const hitItem=null;

function checkSame(){
    let y1=s1.getAttribute("data-y");
    let x1=s1.getAttribute("data-x");
    let y2=s2.getAttribute("data-y");
    let x2=s2.getAttribute("data-x");
    if(s1!==s2 && s1.innerHTML===s2.innerHTML && (x1===x2 || y1===y2)){
        delItem(y1,y2,x1,x2);
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
    arrUpdate();
    itemList[y1][x1].className="remove";
    itemList[y2][x2].className="remove";
    s1=0;
    s2=0;
    //미션 count감소
    //장바구니 추가 이미지
    //히트면 장바구니 히트 이미지 + 히트 아이템 바꾸기
}

function arrUpdate(){
    for(let i=0; i<5; i++){
        for(let k=0; k<5; k++){
            if(itemList[i][k].innerHTML=='') {
                console.log("inner체크")
                for(let y=i; y<0; y--){
                    let num=itemList[y-1][k].innerHTML;
                    itemList[y][k].innerHTML=num;
                }
                itemList[0][k].innerHTML=newItem(k);
            }
        }
    }
}

function newItem(k){
    while(true){
        let num=Math.floor(Math.random()*itemCnt+1);
        if((itemList[1][k].innerHTML==num)||
           (k>0 && itemList[0][k-1].innerHTML==num)||
           (k<4 && itemList[0][k+1].innerHTML==num)){
            continue;
        }
        return num;
    }
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
const time=new Time(canvas, ctx, timer);
time.init();