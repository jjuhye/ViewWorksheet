// function sayHi(){
//     var myName="이주혜";
//     console.log('안녕, 난 ',myName,'이야');
// }

// console.log('안녕, 난 ',myName,'이야');
// sayHi();

// function addNum(num1,num2){
//     console.log(num1+num2)
// }

// addNum(1,2);

// function addNum(x,y){
//     return x/y;
// }

// let x=10;
// let y=2;

// // console.log(addNum(10,2));
// console.log(`${x} 더하기 ${y} = ${addNum(x,y)}`)

// let minus = (a,b) => a-b;

// console.log(minus(8,4))


// let randomNum=parseInt(Math.random()*100)+1;
// console.log(randomNum)

// function checkOdd(num) {
//     if (num%2==1){
//     console.log(num+" : 홀수")
//     }else{
//         console.log(num+" : 짝수")
//     }
// }
// let checkNum = checkOdd(randomNum);


// let checkNum = num=> num%2==0 ? console.log(num+" : 짝수") : console.log(num+" : 홀수");
// checkNum(10);


let arr=[];
function setArr(arr){
    for(let i=0; i<4; i++){
        arr[i]=parseInt(Math.random()*201)-100;
    }
    return arr;
}
setArr(arr);
console.log(arr);

let checkOdd = num => num%2==1 ? true : false;

function checkAllOdd() {
    let cnt=0;
    for(let i=0; i<arr.length; i++){
        if(checkOdd(arr[i])){
            console.log(checkOdd(arr[i]));
            cnt++;
        } 
    }
    console.log(cnt)
    if(cnt==4){
        console.log("모두 홀수입니다")
    }else{
        console.log("짝수가 있습니다")
    }
}

checkAllOdd(); 


