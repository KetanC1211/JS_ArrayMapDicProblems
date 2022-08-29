function bblSort(arr){
    for(var i = 0; i < arr.length; i++){ 
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            if(arr[j] > arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
            }
        }
    }
    console.log(arr);
    return arr;
}
let arr = new Array(10)
for(let i=0;i<arr.length;i++){
    arr[i] = Math.floor(100 + Math.random()*900)
}
let randomNumbers = new Array(10)
randomNumbers = bblSort(arr);
console.log("Second Largest element "+randomNumbers[8])
console.log("Second Minimum element "+randomNumbers[1])
    