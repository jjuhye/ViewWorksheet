//문제 만들기
const showcase=document.querySelector('#showcase')
let itemList=null;
const ranList=new Array(5);
let itemCnt=10;
// let s1={"name":null, "y":0, "x":0};
// let s2={"name":null, "y":0, "x":0};


function makeRanArr(){
    for(let i=0; i<5; i++){
        ranList[i]=[];
        for(let k=0; k<5; k++){
            let num=Math.floor(Math.random()*itemCnt+1);
            ranList[i][k]=num;
        }
    }
    console.log(ranList);
}

function makeShowcase(){
    let table=document.createElement('table');
    let text="";
    for(let i=0; i<5; i++){
        text+='<tr>';
        for(let k=0; k<5; k++){
            text+=`<td class="item" data-y="${i}" data-x="${k}">${ranList[i][k]}</td>`
        }
        text+='</tr>';
        table.innerHTML=text;
    }
    showcase.appendChild(table);
}

function checkSame(){
    let y1=s1.getAttribute("data-y");
    let x1=s1.getAttribute("data-x");
    let y2=s2.getAttribute("data-y");
    let x2=s2.getAttribute("data-x");
    if(s1!==s2 && s1.innerHTML===s2.innerHTML && (x1===x2 || y1===y2)){
        delItem(y1,y2,x1,x2);
    }else{
    itemList[y1*5+x1*1].className="item";
    itemList[y2*5+x2*1].className="item";
    s1=0;
    s2=0;
    }
}

function delItem(y1,y2,x1,x2){
    itemList[y1*5+x1*1].innerHTML=0;
    itemList[y2*5+x2*1].innerHTML=0;
    itemList[y1*5+x1*1].className="remove";
    itemList[y2*5+x2*1].className="remove";
    s1=0;
    s2=0;
    //미션 count감소
    //장바구니 추가 이미지
    //히트면 장바구니 히트 이미지 + 히트 아이템 바꾸기
    arrUpdate();
}

function arrUpdate(y1,y2,x1,x2){
    let y=y1;
    for(let i=0; i<=y; i++){
        let temp=itemList[y*5+x1*1]
        for(let k=0; k<5; k++){
                let num=Math.floor(Math.random()*itemCnt+1);
            ranList[i][k]=num;
        }
    }
}

makeRanArr();
makeShowcase();

itemList=[...document.querySelectorAll('td')]
console.log(itemList);
let s1=0;
let s2=0;
let cnt=0;
itemList.forEach(td=>{
    td.addEventListener('click',()=>{
        cnt++;
        td.className="active";
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

let canvas=document.querySelector('#canvas');
let ctx=canvas.getContext('2d');
let timer=document.querySelector('#timer');
const time=new Time(canvas, ctx, timer);
time.init();
// time.timeBar();
// time.timeBox();
// let timerBar = setInterval(time.timeBar, 25);
// let timerBox = setInterval(time.timeBox,10);




// function shuffleArr(){
//     let idx=1;
//     for(let i=0; i<25; i++){
//         arrA[i]=idx;
//         idx++;
//     }
    
//     for(let i=0; i<100; i++){
//         let ran=Math.floor(Math.random()*25);
//         let temp;
//             temp=arrA[0];
//            arrA[0]=arrA[ran];
//             arrA[ran]=temp;
//     }
// }