class hurdle{
    constructor(){
        this.x = 700;
        this.y = 410;
        this.dx = 50;
        this.size = 50;
        this.cwidth = 700;
        this.cheight = 410;
        this.exist = true;
    }

    init(){
        this.x = this.cwidth;
        this.y = this.cheight;
    }

    update(){
        if(this.x < -10){
            this.y = 600;
            this.x = 600;
            this.exist = false
        }else if(this.exist == true){
            this.x -= 10;
        }
    }

    render(ctx2){
        if(this.exist == true){
            let img = new Image();
            img.src = "hurdle.png";
            ctx2.beginPath();
            ctx2.drawImage(img,this.x, this.y,this.size,this.size);
            ctx2.closePath();
        }
    }

    collision(px,py){
        let xValue = this.x - ( px + 50 );
        let yValue = this.y - ( py + 50 );
        if(this.exist == true && xValue < 0 && yValue < 0 ){
            this.exist = false
            jcrash();
        }
    }
}