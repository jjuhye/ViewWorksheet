let turn = true;

const table = [...document.querySelectorAll('.tic td')];
let arr = new Array(3);
let count = 1 ;

    let timeset = setInterval(()=>{
        if(object.runningGame == true && turn == false){
            let xind = parseInt(Math.random()*9);
            if(table[xind].innerHTML == ''){
                table[xind].innerHTML='x';
                table[xind].style = 'background : orange';
                turn = true;
                count++;
            }
            if(checkEnd(getarr())){
                failAction();
            }else if(count == table.length){
                alert('무승부');
                failAction();
            }
        }
    },500);

table.forEach((e)=>{
    
    e.addEventListener('click',()=>{
        if(e.innerHTML != ''){
            alert('그곳에는 클릭할수 없습니다.');
            return;
        }
        count++;
        
        e.style ='background : skyblue';
        e.innerHTML = 'o' ;
        if(checkEnd(getarr())){
            clearCounter++;
            mList[1].clear = true;
            object.clearObj.style = 'z-index :5';
        let time = setTimeout(()=>{
            object.clearObj.style = 'z-index :-1';
            object.game2.style = 'z-index :-2';
            object.mainObj.style = 'z-index :1';
        },2000)
        }
        turn = false;
    })
})

function getarr(){
    let cnt = 0;
    for(i=0;i<3;i++){
        arr[i] = new Array(3);
        for(k=0;k<3;k++){
            arr[i][k] = table[cnt].innerHTML;
        cnt ++;
        }
    }
    console.log(arr);
    return arr;
}

function checkEnd(arr){
    let flag = false;
    console.log(arr);
    console.log('fsdafsas');
    // 가로 승리조건
    for(i=0 ; i<3 ; i++){
        if(arr[i][0] != "" && arr[i][0] == arr[i][1] && arr[i][2] == arr[i][1]){
            flag = true;
        }
    } 
    // 세로 승리조건
    for(i=0 ; i<3 ; i++){
        if(arr[0][i] != "" && arr[0][i] == arr[1][i] && arr[2][i] == arr[1][i]){
            flag = true;
        }
    } 
    if(arr[1][1] != "" && (arr[1][1] == arr[0][0] && arr[1][1] == arr[2][2]
        || arr[1][1] == arr[0][2] && arr[1][1] == arr[2][0]) ){
            flag = true;
        }
    if(flag == true){object.runningGame = false;}    
    return flag;
}

function failAction() {
    object.fail.style = 'z-index :5';
    let lifeCnt = object.life.innerHTML.length-1
    object.life.innerHTML='';
    for(let i = 0 ; i < lifeCnt ; i++){
        object.life.innerHTML+='♥';
    }
        let time = setTimeout(()=>{
            object.fail.style = 'z-index :-1';
            object.game2.style = 'z-index :-2';
            object.mainObj.style = 'z-index :1';
        },2000)
}

function initTic() {
    table.forEach((e)=>{
        e.innerHTML = '';
        e.style.background = 'rgb(206, 205, 205)';
    })
    table[4].innerHTML = 'x';
    table[4].style = 'background : orange';
    turn = true;
    count = 1;
}