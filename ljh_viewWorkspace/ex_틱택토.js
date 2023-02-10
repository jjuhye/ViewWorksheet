let cnt=0;
let winner=0;
const tdList=[...document.querySelectorAll('td')];
console.log(tdList);

tdList.forEach(td=>{
    td.addEventListener('click',()=>{
        drawOX(cnt,td);
        cnt++;
        console.log(cnt);
        if(checkWin()==='o'){
            alert('blue승리')
            //Blue승리 화면
        }else if(checkWin()==='x'){
            //Pink승리 화면
            alert('Pink승리')
        }
        if(cnt>5){
            //게임오버 무승부화면
            alert('무승부')
        }
    })
})

function drawOX(cnt,td){
    if(cnt%2==0){
        td.innerHTML="O";
        td.classList.add('o');
    }else{
        td.innerHTML="X";
        td.classList.add('x');
    }
}

function checkWin(){
    let table=[...document.querySelectorAll('tr')];

    // let row1=[...document.querySelector('.row1 td')];
    // let row2=[...document.querySelector('.row2 td')];
    // let row3=[...document.querySelector('.row3 td')];
    // let table=[row1,row2,row3];
    
    table.forEach(row=>{
        let tds=[...document.querySelectorAll('td')];
        tds.forEach(td=>{
            if(td[0]==td[1] && td[1]==td[2]){
                let winner=td[0].getAttribute('class');
                return winner;
            }
        })
    })
}