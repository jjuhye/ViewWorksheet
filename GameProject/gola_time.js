class Time {
    constructor(canvas, ctx, timer , container, main) {
        this.canvas=canvas;
        this.ctx=ctx;
        this.y=0;
        this.timer1=null;
        this.timer2=null;
        this.timer=timer;
        this.sec=19;
        this.ms=60;
        this.cnt=0;
        this.gameOver=false;
        this.container=container;
        this.main=main;
        this.start=start;
    }

    init() {
        this.timer1 = setInterval(()=>{
            this.timeBar();
            if(this.gameOver){
            clearInterval(this.timer2);
                this.isGameOver();
            }
        }, 24);
        this.timer2 = setInterval(this.timeBox, 10);
    }

    isGameOver(){
        this.container.style='visibility: hidden';
        this.main.style='visibility: visible';
        return true;
    }
    
    //막대 타이머
    timeBar=()=>{
        this.ctx.beginPath();
        this.ctx.rect(0,this.y,25,25);
        this.ctx.fillStyle='white';
        this.ctx.fill();
        this.ctx.closePath();
        this.y++;
        
        if(this.y>490){
            clearInterval(this.timer1);
        }
    }
    
    //숫자타이머
    timeBox=()=>{
        this.cnt++;
        this.ms--;
        if(this.cnt == 60){
            this.cnt = 0;
            this.ms=60;
            this.sec--;
        }
        if(this.sec==0){
            this.ms=0;
            this.gameOver=true;
        }
        let showSec=this.sec;
        let showMs=this.ms;
        if(this.sec<10) {showSec = '0'+this.sec};
        if(this.ms<10) {showMs = '0'+this.ms};
        this.timer.innerHTML = `${showSec} : ${showMs}`;
    }

    //리셋
    reset() {
        this.y=0;
        this.sec=19;
        this.ms=60;
        this.cnt=0;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}