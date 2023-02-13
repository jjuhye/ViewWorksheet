let cnt=0;
let winner="";
let turn=true;
const sBtn=document.querySelector('#start');
const table=document.querySelector('table');
let draw=document.querySelector('.draw');
let win=document.querySelector('.win');
let gameList=new Array(3);

const tdList=[...document.querySelectorAll('td')];

sBtn.addEventListener('click',()=>{
    newGame();
    setGameList();
});

function setGameList(){
    let idx=0;
    for(let i=0; i<3;i++){
        gameList[i]=new Array(3);
        for(let k=0; k<3;k++){
            gameList[i][k]=tdList[idx];
            idx++;
        }
    }
}

function newGame(){
    table.style="display:block"
    sBtn.style="display:none"
    draw.style="display:none";
    win.style="display:none";
    setClear();
    playGame();
}

function setClear(){
    cnt=0;
    winner="";
    tdList.forEach(td=>{
        td.innerHTML="";
        td.className="";
    })
}

function playGame(){
    tdList.forEach(td=>{
        td.addEventListener('click',(event)=>{
        if(event.target.innerHTML!==''){
            // console.log('이미 선택된 칸입니다!');
            return;
        }
            drawOX(td);
            checkWin();
            gameOver();
            
        })
    })
}

function drawOX(td){
    if(turn===true){
        td.innerHTML="O";
        td.className="BLUE";
        turn=false;
    }else{
        td.innerHTML="X";
        td.className="PINK";
        turn=true;
    }
    cnt++;
}

function checkWin(){
    let arr=gameList;
    console.log(arr);
    let k=0;
    for(let i=0; i<3; i++){
        if(arr[i][k].innerHTML===arr[i][k+1].innerHTML &&
            arr[i][k].innerHTML===arr[i][k+2].innerHTML){
            winner=arr[i][k].className;
            return;
        }
    }
    
    let i=0;
    for(let k=0; k<3; k++){
        if(arr[i][k].innerHTML===arr[i+1][k].innerHTML &&
           arr[i][k].innerHTML===arr[i+2][k].innerHTML){
            winner=arr[i][k].className;
            return;
        }
    }
    
    if((arr[0][0].innerHTML===arr[1][1].innerHTML && arr[1][1].innerHTML===arr[2][2].innerHTML)||
       (arr[0][2].innerHTML===arr[1][1].innerHTML && arr[1][1].innerHTML===arr[2][0].innerHTML)){
           winner=arr[1][1].className;
           return;
        }
    }
    
    function gameOver(){
        setTimeout(() => {
            if(winner==="" && cnt===9){
                table.style="display:none";
                draw.style="display:block";
                sBtn.style="display:block";
            }
            if(winner!==""){
                table.style="display:none";
                win.style="display:block";
                win.innerHTML=`${winner} 승리!!`;
                sBtn.style="display:block";
            }
        }, 800);
}