// while loop 
// Below is a simple syntax of a while loop 
// 1 initialization of a variable
// 2. while keyword 
// 3. condition to be checked
// 4 Body of the while loop 
let i = 0; 
while(i<10){
    console.log("The value of i is;",i)
    i++;
}

//come up with a js example of a map loop
// Map loop is used to iterate through an array and perform a specific operation on each element of the array.

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function(num){
    return num * num;
});
console.log(squaredNumbers)
