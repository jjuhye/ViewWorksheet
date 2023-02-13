const sBtn=document.querySelector('#start');
const rBtn=document.querySelector('#restart');
const arrA=new Array(25);
const arrB=new Array(25);

function makeRanArr(){
    for(let i=1; i<51; i++){
        let idx=Math.random(24);
        if(i==1){
            arrA[idx]=i;
        }else if(i>1 && i<25){
            if(arrA[idx]!==null){
                i--;
                continue;
            }else{
                arrA[idx]=i;
            }
        }else if(i==25){
                arrB[idx]=i;
        }else{
            if(arrB[idx]!==null){
                i--;
                continue;
            }else{
                arrA[idx]=i;
            }
        }
    }
}

sBtn.addEventListener('click',()=>{
    makeRanArr();
    sBtn.style="display: none";
    rBtn.style="display: block";
})

