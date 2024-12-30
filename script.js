// Task 1
// Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters.
// function task1(parameter1 ,parameter2){
//     if ((task1.arguments).length===2 ){
//         console.log('done')
//     }
//     else{
//         console.log('error')
//     }
// }
// task1(1)     // error message
// task1(1,2)   // done message
// task1(1,2,3) // error message



// Task2
// 2. Write your own function that can add n values ensure that all passing parameters are numerical values only.
// function add_numbers(...numbers){
    
//     let sum=0
//     for(let i =0;i<numbers.length;i++ ){
//         if (typeof(numbers[i])==='number'){
//             sum+=numbers[i]
//         }
//         else{
//             throw new Error("All parameters must be numbers.");
//         }
//     }
//     return sum
// }
// console.log(add_numbers(1,2,3,4))

// Task3 
// Write a function that takes any number of parameters and returns them reversed using array’s reverse function.
// function reverse(...numbers){
//     return numbers.reverse()
// }
// console.log(reverse(1,2,3,4))



// Task 4
// make function isPrime() to check if the number is prime or not.
// function task4(number){
//     number=Math.abs(number)
//     if (number <= 3){
//         return true
//     }
//     else if (number===5|| number===7){
//         return true
//     }
//     else if (number %2===0 || number %3===0 || number %5===0 ||number %7===0){
//         return false
//     }
//     else{
//         return true
//     }
// }
// for (let i=-10;i<10;i++){
//     if(task4(i)){
//         console.log( i +" => prime")
//     }
//     else{
//         console.log( i +" => Not prime")
//     }
// }


