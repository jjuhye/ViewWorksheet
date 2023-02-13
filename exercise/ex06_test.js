let ranArrList=[];

function checkNum(arr,num){
    for(let i=0; i<arr.length; i++){
        if(num==arr[i]){
            return true;
        }
    }
    return false;
}

function ranArr(arr){
    for(let i=0; i<10; i++){
        let num=parseInt(Math.random()*100)+1;
        if(checkNum(arr,num)){
            i--;
            continue;
        }
        arr[i]=num;
    }
}

ranArr(ranArrList);
console.log('\n문제1) 랜덤배열 생성');
console.log(ranArrList);

console.log('\n문제2) 배열값 출력');
ranArrList.forEach(value=>console.log(value));

console.log('\n문제3) 배열값중 홀수만 따로 배열 만들기');
result=ranArrList.filter(value=>value%2==1);
console.log(result);

console.log('\n문제4) 배열의 총합 출력');
result=ranArrList.reduce((sum,value)=>sum+=value);
console.log(result);

console.log('\n문제5) 배열중 짝수들의 총합');
result=ranArrList.filter(value=>value%2==0).reduce((sum,value)=>sum+=value);
console.log(result);

console.log('\n문제6) 오름차순 정렬');
result=ranArrList.sort((a,b)=>a-b);
console.log(result);

console.log('\n문제7) 짝수의 개수');
let count = ranArrList.reduce((cnt, val) => cnt + (val%2==0), 0); 
console.log(count);

console.log('\n문제8) 객체배열을 동물 나이순으로 내림차순 정렬');
let cat = {kind:'고양이', age:5};
let dog = {kind:'개', age:4};
let hamster = {kind:'햄스터', age:1};
let rabbit = {kind:'토끼', age:0.5};
let pets=[cat,dog,rabbit, cat, hamster];
console.log(pets);

pets.sort((a,b)=>b.age-a.age);
console.log(pets); 