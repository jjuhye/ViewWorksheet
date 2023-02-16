class Time {
    constructor(canvas, ctx, timer) {
        this.canvas=canvas;
        this.ctx=ctx;
        this.y=0;
        this.timer1=null;
        this.timer2=null;
        this.timer=timer;
        this.sec=19;
        this.ms=60;
        this.cnt=0;
    }

    init() {
        this.timer1 = setInterval(this.timeBar, 24);
        this.timer2 = setInterval(this.timeBox, 10);
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
            clearInterval(this.timer2);
            // gameOver(){}
        }
        let showSec=this.sec;
        let showMs=this.ms;
        if(this.sec<10) {showSec = '0'+this.sec};
        if(this.ms<10) {showMs = '0'+this.ms};
        this.timer.innerHTML = `${showSec} : ${showMs}`;
    }

    //리셋
    // reset() {
    //     running = 0;
    //     time = 0;
    //     clearTimeout(timerid);
    //     document.getElementById('stopTime').innerHTML="";
    //     document.getElementById("start").innerHTML = "시작";
    //     document.getElementById("output").innerHTML = "<b>00:00:00</b>";
    //     document.getElementById("startPause").style.backgroundColor = "green";
    //     document.getElementById("startPause").style.borderColor = "green";
    // }
}