const sBtn=document.querySelector('#start');
const rBtn=document.querySelector('#restart');
const over=document.querySelector('#gameOver');
const game=document.querySelector('.game');
const arrA=[];
const arrB=[];

sBtn.addEventListener('click',()=>{
    shuffleArr();
    showArr();
    sBtn.style="display: none";
    playGame();
})

rBtn.addEventListener('click',()=>{
    rBtn.style="display: none";
    over.style="display: none";
    shuffleArr();
    showArr();
    playGame();
})

function shuffleArr(){
    let idx=1;
    for(let i=0; i<25; i++){
        arrA[i]=idx;
        arrB[i]=idx+25;
        idx++;
    }
    
    for(let i=0; i<100; i++){
        let ran=Math.floor(Math.random()*25);
        let temp;
        if(i%2==0){
            temp=arrA[0];
            arrA[0]=arrA[ran];
            arrA[ran]=temp;
        }else{
            temp=arrB[0];
            arrB[0]=arrB[ran];
            arrB[ran]=temp;
        }
    }
}

function showArr(){
    let table=document.createElement('table');
    let text="";
    for(let i=0; i<25; i++){
        if(i%5==0){
        text+=`<tr><td>${arrA[i]}</td>`
    }else if(i%5==4){
        text+=`<td>${arrA[i]}</td></tr>`
    }else{
        text+=`<td>${arrA[i]}</td>`
    }
}
    table.innerHTML=text;
    game.appendChild(table);
}

function playGame(){
    const tdList=document.querySelectorAll('td');
    let idx=0;
    let cnt=26;
    tdList.forEach(td=>{
        td.addEventListener('click',()=>{
            if(idx<25){
                if(td.innerHTML==idx+1){
                    td.classList.add('arrB');
                    td.innerHTML=arrB[idx];
                    idx++;
                }
            }else{
                if(td.innerHTML==cnt){
                    td.className='done';
                    td.innerHTML="";
                    cnt++;
                    if(cnt==51){
                        over.style="display: block";
                        rBtn.style="display: block";
                        game.removeChild(game.firstChild);
                        return;
                    }
                }
            }
        })
    })
}