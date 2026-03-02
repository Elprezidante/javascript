// string: A string is a sequence of characters that are enclosed in double quotes or single quotes. It is used to represent text in a program. 
let name = "Isaac"
console.log("My name is ", name)
// Floating point:this is a number with a decimal point
let number =35.5
console.log("The number of sugar is", number)
console.log(typeof(number))

// bollean: A boolean is a data type that can only have two values: true or false. It is used to represent logical values in a program.
let isadult=true
let isregistered=false
console.log("Is the person an adult?", isadult)
console.log("Is the person registered as a voter?", isregistered)
console.log(typeof(isadult))

// undefined: This is a data type that represents a variable that has not been assigned a value. It is used to indicate that a variable has no value or is not defined.
let county;
console.log("the county is",county)

// null: This is a data type that represents the absence of a value. It is used to indicate that a variable has no value or is empty.
let username=null
console.log("the username is",username)

// object: An object is a data type that represents a collection of properties and values. It is used to represent complex data structures in a program.
let person={
    name:"Isaac",
    age: 25,
    isstudent: true
}
// how to access the properties of an object
console.log("the person's name is", person.name)
console.log("the person's age is", person.age)
console.log("the person's isstudent is", person.isstudent)
// array: An array is a data type that represents a collection of values that are ordered and indexed. It is used to store multiple values in a single variable.
let cars=["Toyota","Honda","Ford"]
console.log("the first car is", cars[0])

// how to add a new car to the array
cars.push("BMW")
console.log("the cars are", cars)


// dot notation: This is a way to access the properties of an object using a dot (.) followed by the property name. It is used to access the properties of an object in a program.
console.log("the person's name is", person.name)

// bracket notation: This is a way to access the properties of an object using square brackets ([]) followed by the property name in quotes. It is used to access the properties of an object in a program when the property name is stored in a variable or when the property name contains special characters.

let propertyName="name"
console.log("the person's name is", person[propertyName])
// how to access the property of an object using bracket notation when the property name contains special characters
let person2={
    "first name":"Isaac",
    "age": 25,
    "is student": true
}
console.log("the person's first name is", person2["first name"])

// how to access the property of an object using bracket notation when the property name is stored in a variable
let propertyName2="first name"
console.log("the person's first name is", person2[propertyName2])
