//문제 만들기
const showcase=document.querySelector('#showcase')
let itemList=null;
const ranList=new Array(5);
let itemCnt=10;
let s1={"name":null, "y":0, "x":0};
let s2={"name":null, "y":0, "x":0};


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
    if(s1.name==s2.name && (s1.x==s2.x || s1.y==s2.y)){
        delItem();
    }
    if(s1.name!=null && s2.name!=null){
    itemList[s1.y*5+s1.x*1].className="item";
    itemList[s2.y*5+s2.x*1].className="item";
    }
}

function delItem(){
    itemList[s1.y*5+s1.x*1].innerHTML=0;
    itemList[s2.y*5+s2.x*1].innerHTML=0;
    s1={"name":null, "y":0, "x":0};
    s2={"name":null, "y":0, "x":0};
    console(s1);
    console(s2);
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
        if(s1.name===null){
            s1.name=td.innerHTML;
            s1.y=td.getAttribute("data-y");
            s1.x=td.getAttribute("data-x");
        }else{
            s2.name=td.innerHTML;
            s2.y=td.getAttribute("data-y");
            s2.x=td.getAttribute("data-x");
            console.log(s1, s2);
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