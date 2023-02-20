class Ctarget{
    constructor(){
        this.tag = 0;
        this.id = 1;
        this.x = 250;
        this.y = 250;
        this.hp = 2;
        this.dx;
        this.size = 80;
        this.cwidth;
        this.cheight;
        this.exist = true;
        this.opacity = 1;
    }

    initTarget(num,tag){
        this.id=num;
        this.tag = tag;
        if(num == 1){
            this.y = 250 ;
        }else if(num == 2){
            this.y = 370 ;
        }else if(num == 3){
            this.x = 600 ;
            this.y = 470 ;
        }
    }

    renderTarget(ctx3){

        let img = new Image();
        img.src = "target1.png";
        ctx3.beginPath();
        ctx3.drawImage(img,this.x, this.y,this.size,this.size);
        ctx3.closePath();
    }

    gunshot(x,y){
        console.log(x,y);
        let pdwb = (this.x-10 + this.size/2) - x;
        let pdhb = (this.y + this.size/2) - y;
        let pdcb = pdwb * pdwb + pdhb * pdhb;

        let pdwh = (this.x-9 + this.size/2) - x;
        let pdhh = (this.y-32 + this.size/2) - y;
        let pdch = pdwh * pdwh + pdhh * pdhh;

        if(pdcb<=450){
            this.hp --;
            if(this.hp <= 0){
                killCount ++;
                this.exist = false;
                num = this.tag;
                makeTarget();
                setKillTarget(num);
            }
        }else if(pdch <= 40){
            this.hp -=2;
            if(this.hp <= 0){
                killCount ++;
                this.exist = false;
                num = this.tag;
                makeTarget();
                setKillTarget(num);
            }
        }
    }

    updateTaget(){
        if(this.exist == true){
            if(this.id == 1){
                if(this.y >= 500){
                    this.exist = false;
                    deleteobj(this.tag);
                    makeTarget();
                }
                this.x ++;
                if(this.x >= 350){
                    this.y ++;
                }
            }else if(this.id == 2){
                if(this.y >= 610){
                    this.exist = false;
                    deleteobj(this.tag);
                    makeTarget();
                }
                this.x++;
                this.y+=2;
            }else if(this.id == 3){
                if(this.y <= 370){
                    this.exist = false;
                    deleteobj(this.tag);
                    makeTarget();
                }
                this.x-=2;
                if(this.x <= 312){
                    this.y -=2;
                }
            }
        }
    }
    deadTarget(px,py){
        this.x = px;
        this.y = py;
    }
}
