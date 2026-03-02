// comparison operators
// examples of comparison operators: >, <, >=, <=, ==, !=
// what type of data type do we get when we use comparison operators? We get a boolean data type when we use comparison operators. A boolean data type can only have two values: true or false. It is used to represent the truth value of an expression. For example, if we compare two numbers using the greater than operator (>), we will get true if the first number is greater than the second number, and false otherwise. Similarly, if we compare two strings using the equality operator (==), we will get true if the strings are equal, and false otherwise. In summary, comparison operators are used to compare values and return a boolean result indicating whether the comparison is true or false.
let number1 =5
let number2=20
let number3=20
console.log (number1==number2)
console.log (number1>=number2)
console.log (number1<=number2)
console.log(number2!=number1)
console.log(number1 !=number1)
console.log(number1>number2)
console.log(number1<number2)
// logical operators
// They are used to evaluate two or more conditions and they also give a boolean answer.
// It evaluates to true if and only if both of the statements are true
console.log((number1<number2) && (number2>number1)&&(number3>number2))
// logical OR 
console.log((number1>number2)||(number2>number1))
// logical NOT
console.log(!(number1<number2))