class App{
    constructor(p1,p2){
        this.nodeList=[];
        this.p1=p1;
        this.p2=p2;
        this.container=document.querySelector('.container');
        this.sBtn=document.querySelector('.start');
        //...
        this.turn=true;
        this.cnt=0;
        this.win=false;

        this.sBtn.addEventListener('click', ()=>{
            this.showGame();
            this.makeNodeList();
            this.turn=true;
            this.cnt=0;
        })
    }

showGame() {
    this.container.innerHTML=`
    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>`
}

makeNodeList() {
    this.nodeList = [];
    const tds=document.querySelectorAll('td');
    let cnt=0;
    for(let i=0; i<3; i++){
        let arr=[tds[cnt],tds[cnt+1],tds[cnt+2]];
        cnt+=3;
        this.nodeList.push(arr);
    }
}


// let cnt=0;
// let winner=0;
// const tdList=[...document.querySelectorAll('td')];
// console.log(tdList);

// tdList.forEach(td=>{
//     td.addEventListener('click',()=>{
//         drawOX(cnt,td);
//         cnt++;
//         console.log(cnt);
//         if(checkWin()==='o'){
//             alert('blue승리')
//             //Blue승리 화면
//         }else if(checkWin()==='x'){
//             //Pink승리 화면
//             alert('Pink승리')
//         }
//         if(cnt>5){
//             //게임오버 무승부화면
//             alert('무승부')
//         }
//     })
// })

// function drawOX(cnt,td){
//     if(cnt%2==0){
//         td.innerHTML="O";
//         td.classList.add('o');
//     }else{
//         td.innerHTML="X";
//         td.classList.add('x');
//     }
// }

// function checkWin(){
//     let table=[...document.querySelectorAll('tr')];

//     // let row1=[...document.querySelector('.row1 td')];
//     // let row2=[...document.querySelector('.row2 td')];
//     // let row3=[...document.querySelector('.row3 td')];
//     // let table=[row1,row2,row3];
    
//     table.forEach(row=>{
//         let tds=[...document.querySelectorAll('td')];
//         tds.forEach(td=>{
//             if(td[0]==td[1] && td[1]==td[2]){
//                 let winner=td[0].getAttribute('class');
//                 return winner;
//             }
//         })
//     })
// }
}