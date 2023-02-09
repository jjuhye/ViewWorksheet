// const animals = ["뱀","고양이","강아지","토끼"];

// animals.forEach(value=>console.log(value));

let cat = {kind:'고양이', age:5};
let dog = {kind:'개', age:2};
let rabbit = {kind:'토끼', age:0.5};
let hamster = {kind:'햄스터', age:1};
let pets=[cat,dog,rabbit,hamster,cat];

//find 찾아라
let res=pets.find((obj)=>obj.kind==='개');
console.log(res);

res=pets.findIndex(obj=>obj.kind==='고양이');
console.log(res);

//모든 배열 요소 조건이 모두 맞으면 true
res=pets.every(obj=>obj.kind==='고양이');
console.log(res);

//배열 요소 조건이 한개라도 맞으면 true
res=pets.some(obj=>obj.kind==='고양이');
console.log(res);

//배열 요쇼가 조건이 맞으면 따로 새로운 배열빼서 만든다
res=pets.filter(obj=>obj.kind==='고양이')
console.log(res);

let arr=[1,2,3,4,5];
res=arr.map(num=>num*10);
console.log(arr);
console.log(res);

let number=[0,5,4,1,100];
number.sort();
console.log(number);

number.sort((a,b)=>a-b);
console.log(number);
//내림차순
number.sort((a,b)=>b-a);
console.log(number);

res=number.reduce((sum,value)=>{
    console.log(`sum ${sum}, value ${value}`);
    return sum+=value;
},0);
console.log(res);
