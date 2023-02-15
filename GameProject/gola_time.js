class Time {
    constructor() {
        this.timer1 = setInterval(this.timeBar, 25);
        this.timer2 = setInterval(this.timeBox,10);
        this.y=0;
    }
    
    //막대 타이머
    timeBar(ctx){
        console.log(ctx);
        if(ctx === undefined){
            clearInterval(this.timer1);
        }

        ctx.beginPath();
        ctx.rect(0,this.y,25,25);
        ctx.fillStyle='white';
        ctx.fill();
        ctx.closePath();
        this.y++;
        
        if(this.y>475){
            clearInterval(this.timer1);
        }
    }
    
    //숫자타이머
    // const time=document.querySelector('.time');
    // let sec=20;
    // let ms=60;
    // let cnt=0;
    
    // let timer2 = setInterval(timeBox,10);
    timeBox(){
        let time=document.querySelector('.time');
        let sec=20;
        let ms=60;
        let cnt=0;

        cnt++;
        ms--;
        if(cnt == 60){
            cnt = 0;
            ms=60;
            sec--;
        }
        if(sec==0){
            ms=0;
            clearInterval(this.timer2);
            // gameOver(){}
        }
        time.innerHTML = `${sec}: ${ms}`;
    }
}