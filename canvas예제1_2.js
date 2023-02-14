const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');

// let timer=setInterval(draw,10);
let timer=null;

let x=10; // 반지름만큼 떨어져서 시작
let y=10;
let radius=10;

// window.onload=draw();

//첫번째 그리기(멈춤조건1 clearInterval)
// function draw(){
//     //캔버스 초기화, 없으면 줄그려지듯 이동
//     ctx.clearRect(0,0,canvas.width,canvas.height);

//     ctx.beginPath();
//     ctx.arc(x,150,radius,0, Math.PI*2);
//     ctx.fillStyle='pink';
//     ctx.fill();
//     x++;
//     //오른쪽 끝에 닿으면 멈춤
//     if(x>=canvas.width-radius){
//         clearInterval(timer);
//     }
// }

//두번째 그리기(멈춤조건2 requestAnimationFrame)
function draw2(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.beginPath();
    ctx.arc(x,y,radius,0, Math.PI*2);
    ctx.fillStyle='pink';
    ctx.fill();
    
    if(x<=canvas.width-radius && x>=radius){
        x+=5;
    }
    if(x>=canvas.width-radius){
        x=canvas.width-radius;
        y+=5;
    }
    if(y>=canvas.height-radius && x==canvas.width-radius){
        y=canvas.height-radius;
        x-=10;
    }
    
    timer=requestAnimationFrame(draw2); //고화질
    //오른쪽 끝에 닿으면 멈춤
    if(y>=canvas.height-radius && x<=canvas.width-radius){
        cancelAnimationFrame(timer);
    }
}

//클릭시 타이머 멈춤
// canvas.addEventListener('click',()=>{
//     clearInterval(timer);
// })

//클릭시 처음부터 다시 시작
canvas.addEventListener('click',()=>{
    x=radius;
    draw2();
})

draw2();