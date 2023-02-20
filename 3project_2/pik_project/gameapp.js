 class game{
    constructor(){
        this.name = 'gamename';
        this.x;
        this.y;
        this.size;
        this.clear = false;
    }

    init(x,y,size,name){
        this.x = x;
        this.y = y;
        this.size = size;
        this.name = name;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.drawImage(machineImg,this.x,this.y,this.size,this.size);
        ctx.font = "20px NotoKR";
        ctx.strokeStyle  = this.clear == false ? "red" :"blue";
        ctx.strokeText(this.name, this.x-10, 60);
        ctx.closePath();
    }


}
