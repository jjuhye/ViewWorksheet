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
        this.timer1 = setInterval(this.timeBar, 25);
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
        
        if(this.y>475){
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
        this.timer.innerHTML = `${this.sec}: ${this.ms}`;
    }
}