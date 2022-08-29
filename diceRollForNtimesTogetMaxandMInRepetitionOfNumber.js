let diceNumCount = new Array();
//empty dictionary//
var dict = {};
let count=1;
let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
let t=true;
while(t){
    let dice = Math.floor(Math.random()*10 % 6 + 1);
    switch(dice){
        case 1:
            count1++;
            break;
        case 2:
            count2++;
            break;
        case 3:
            count3++;
            break;
        case 4:
            count4++;
            break;
        case 5:
            count5++;
            break;
        case 6:
            count6++;
            break;
    }
    dict[count] = dice;
    count++;
    if(count1==10||count2==10||count3==10||count4==10||count5==10||count6==10){
        diceNumCount[0]=count1;
        diceNumCount[1]=count2;
        diceNumCount[2]=count3;
        diceNumCount[3]=count4;
        diceNumCount[4]=count5;
        diceNumCount[5]=count6;
        break;
    }
}
console.log(diceNumCount)
let max = diceNumCount[0];
let min = diceNumCount[0];
let maxNum=0,minNum=0;
for(let i=0;i<diceNumCount.length;i++){
    if(max<=diceNumCount[i]){
        max = diceNumCount[i]
        maxNum = i+1;
    }
    if(min>=diceNumCount[i]){
        min = diceNumCount[i]
        minNum = i+1;
    }   
}
console.log("Maximum repitition in dice roll.\nThe number "+maxNum+" is repeated "+diceNumCount[maxNum-1]+" times.")
console.log("Maximum repitition in dice roll.\nThe number "+minNum+" is repeated "+diceNumCount[minNum-1]+" times.")
for(let key in dict) {
    console.log(key + " : " + dict[key]);
 }