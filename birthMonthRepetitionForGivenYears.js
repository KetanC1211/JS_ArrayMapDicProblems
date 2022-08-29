let birthMonthArray = new Array();
let count=0;
while(count<50){
    let month = Math.floor(Math.random()*10 % 12 + 1);//jan = 1,feb=2,...,dec=12
    let year = Math.floor(Math.random()*10 % 2 + 92)
    let birthDetails = month+""+year;
    birthMonthArray[count] = birthDetails;
    count++;
}
console.log(birthMonthArray);
counter=0;
for(let i=0;i<50;i++){
    if(692==birthMonthArray[i]){// counting individual born in dec92
        counter++;
    }
}
console.log("There are "+counter+" individuals born in June 92")