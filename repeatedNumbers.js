let arr = new Array()
let index=0;
let counter=1;
while(counter<=100){
    if(counter%11 == 0){
        arr[index]= counter;
        index++;
    }
    counter++;
}
console.log(arr)