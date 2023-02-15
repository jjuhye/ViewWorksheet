//문제 만들기
const showcase=document.querySelector('#showcase')
// document.querySelector('#canvas');
let itemList=null;
const ranList=new Array(5);
let itemCnt=10;
let sel1={"name":null, "y":0, "x":0};
let sel2={"name":null, "y":0, "x":0};


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

function checkSame(){
    if(sel1.name===sel2.name){
        itemList[sel1.y*5+sel1.x*1].innerHTML=0;
        itemList[sel2.y*5+sel2.x*1].innerHTML=0;
    }
}

function update(){
    for(let i=0; i<5; i++){
        ranList[i]=[];
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

itemList.forEach(td=>{
    td.addEventListener('click',()=>{
        td.className="active";
        if(sel1.name===null){
            sel1.name=td.innerHTML;
            sel1.y=td.getAttribute("data-y");
            sel1.x=td.getAttribute("data-x");
        }else{
            sel2.name=td.innerHTML;
            sel2.y=td.getAttribute("data-y");
            sel2.x=td.getAttribute("data-x");
            console.log(sel1, sel2);
        }
        checkSame();
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