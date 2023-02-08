let numArr=[1001,3423,23,32123,123];

function mySort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let k=i+1; k<arr.length; k++){
            if(arr[i]>arr[k]){
                let temp=arr[i];
                arr[i]=arr[k];
                arr[k]=temp;
            }
        }
    }
}

function myReverse(arr){
    for(let i=0; i<arr.length/2; i++){
        let temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
}

mySort(numArr);
console.log(numArr);
myReverse(numArr);
console.log(numArr);
