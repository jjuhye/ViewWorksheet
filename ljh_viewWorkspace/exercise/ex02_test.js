let arr=[];
function randomNum(){
    num=parseInt(Math.random()*2);
    return num;
}

function checkLotto(cnt){
    if(cnt==3){
        console.log("당첨");
    }else{
        console.log("꽝");
    }
}

function checkArr(){
    let cnt=0;
    for(let i=0; i<7; i++){
        let num=randomNum();
        if(randomNum()==0 && cnt<3){
            arr[i]=7;
            cnt++;
        }else{
            arr[i]=1;
        }
    }
    console.log(arr);
    checkLotto(cnt);
}

checkArr();