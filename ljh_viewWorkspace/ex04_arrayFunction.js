const animals = ["고양이","강아지","토끼"];
animals[3]="햄스터";
console.log(animals);

function printAll(arr){
    if(Array.isArray(arr)){
        for(let i=0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }else{
        console.log("배열이 아닙니다")
    }
}

printAll(animals);
//해당요소가 몇번째에 있니? 없으면 -1
console.log(animals.indexOf('토끼'));

//해당 요소가 있니? true/false
console.log(animals.includes("뱀"));

//배열 자체의 내용 수정 > 가장 마지막 인덱스에 요소 추가
animals.push("호랑이");
console.log(animals);

//젤 처음 인덱스에 요소 추가
let count = animals.unshift("사자")
console.log(animals);
console.log(count);

//삭제 (가장 마지막 요소 삭제)
let value=animals.pop();
console.log(animals);
console.log(value);

//첫번째 요소 삭제
value=animals.shift();
console.log(animals);
console.log(value);

//배열 자르기
let cutArr=animals.splice(2,1)
console.log(animals);
console.log(cutArr);

let cutAddArr=animals.splice(2,1,"곰","말","양")
console.log(animals);
console.log(cutAddArr);

//기본배열 건들지않고 작업 함수(마지막 인덱스값은 포함안됨)
let newArr=animals.slice(0,2);
console.log(animals);
console.log(newArr);

//여러개 배열 붙여주기
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
console.log(arr3)

//순서역순
let arr4=arr3.reverse();
console.log(arr4)

//값 바꿔넣기
let arr6=arr4.fill(100,2,3);
console.log(arr6)

//여러개 중첩된 arr한개로 풀기
// let arr5 [ [ 1,2,3],[4,[5,6,[7,8]]]];
// consol

function say_welcome(name){
    console.log(`안녕하세요 ${name}님`)
}

function intro(lastName, firstName, callback){
    let fullName=lastName+firstName;
    callback(fullName)
}

intro("이","주혜",say_welcome);
intro("이","주혜",name=>console.log(name));