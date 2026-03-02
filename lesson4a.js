// functions with parameters in js
// parameters are values that get passed as arguments 


function greeting(name){
    console.log("Hello ", name ,"How have you been?")

}
// greeting(name:any):void
greeting("ISAK")
greeting("Mohamed Salah")
greeting("Cristiano Ronaldo")
greeting("Florian wirtz")
 console.log("===========================================================")

//  Below is a function with parameters to calculate the sum of the two numbers 
function addition(number1,number2){
    sum = number1 + number2
    console.log("The sum of", number1, "and", number2, "is", sum)
}
addition(45,60)
console.log("=======================================================================")
// by use of a function with parameters,calculate the area of triangle where the base is 20 and the height is 12 and the formular is 0.5 * base * height
function areaOfTriangle(base,height){
    area = 1/2 * base * height
    console.log("By use of the formula 1/2 * base * height, the area of the triangle whose base", base, "and height", height, "is", area)
}
areaOfTriangle(20,12)
areaOfTriangle(50,30)
console.log("====================================================================")
// Find the simple interest where the pricipal is 50,0000,rate is 5% and time as 8 years and the formula is (Principal * Rate * Time) / 100
function simpleInterest(principal,rate,time){
    interest = (principal * rate * time) / 100
    console.log("The simple interest is", interest)
}
simpleInterest(50000,5,8)
simpleInterest(10000,5,2)
console.log("===================================================================")