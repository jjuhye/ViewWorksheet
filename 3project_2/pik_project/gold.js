class gold{
    constructor(){
        this.x = 700;
        this.y = 410;
        this.dx = 20;
        this.size = 20;
        this.cwidth = 700;
        this.cheight = 410;
        this.exist = true;
    }

    update(){
        if(this.x < 0){
            console.log('작동');
            this.y = 600;
            this.x = 600;
            this.exist = false
        }else if(this.exist == true){
            this.x -= 10;
        }
    }

    init(){
        let rd = parseInt(Math.random()*3)+1;
        console.log(rd);
        if(rd == 1){
            this.x = this.cwidth;
            this.y = this.cheight; 
        }else{
            this.x = this.cwidth;
            this.y = this.cheight - 50;
        }
    }

    render(ctx3){
        if(this.exist == true){
            let img = new Image();
            img.src = "coin.png";
            ctx3.beginPath();
            ctx3.drawImage(img,this.x, this.y,this.size,this.size);
            ctx3.closePath();
        }
    }

    collisioncoin(px,py){
        let pdw = this.x - px;
        let pdh = this.y-10 - py;
        let pdc = pdw * pdw + pdh * pdh;
        if(this.exist == true && pdc <= 250){
            this.exist = false;
            coinCrash();
        }
    }
}