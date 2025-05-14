// console.log("5"+2+4);
// console.log(2+3+"4");
// console.log("5"-1);
// console.log(1-"2");
// console.log('5'==5);
// console.log('5'===5);

// let a=14
// let b=3
// c=a+b
// console.log("The value of "+c);
// console.log(`the value of ${a}+${b}=${c}`)

// function table(){
//     let val=document.getElementById("input").value
//     for(i=1;i<11;i++){
//         console.log(i*val);
        
//     }
// }

let arr = [60,4,1,11];
let max =arr[0]
let b = arr.length;
for(let i =1;i<=b;i++){
    if(arr[i]>max){
        max=arr[i]
}
}
console.log(max);


    let fact=1;
    for( let i =1; i<=5;i++){
        fact = fact*i;
    }
    console.log(fact);
    