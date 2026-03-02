// objects data type
// this is a javascript is a data type that starts in form of key value pairs.
let person ={
    name: "Isaac",
    age :18,
    isregistered: true
};
console.log("the details of the person is ",person);
// we can access the values of the object using the dot notation
// we can also access the values of the object using the key
console.log("the name of the person is ",person.name);
// // we can also change the value of the key
person.age = 19;
// // second way to access the value of the object is using the bracket notation
// // bracket notation
console.log("the age of the person is ",person["age"]);

// // the third way to access the value of the object is using the variable
let key = "name";
console.log("the name of the person is ",person[key]);
// what is the difference between a dictionary in python and an object in js and a json data when dealing with apis

// A dictionary in Python is a collection of key-value pairs, similar to an object in JavaScript. However, a JSON (JavaScript Object Notation) data is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. When dealing with APIs, JSON is often used as the format for sending and receiving data, while dictionaries in Python and objects in JavaScript are used to manipulate that data within the respective programming languages.
// array data type :This refers to a collection  of items that are indexes
let fruits=["apple","banana","orange","mango","lemon","grapes"];
console.log("the fruits are ",fruits);
// how to access the values of the array
// method 1: using the index
console.log("the first fruit is ",fruits[0]);


// method 2: using the length of the array
console.log("the last fruit is ",fruits[fruits.length-2]);


// what does the length of the array mean? The length of the array refers to the number of elements present in the array. It is a property that returns the total count of items in the array. In JavaScript, arrays are zero-indexed, meaning that the first element is at index 0, and the last element is at index length-1. Therefore, to access the last element of the array, we use fruits[fruits.length-1].


// method 3: using the for loop
for(let i=0;i<fruits.length;i++){
    console.log("the fruit at index ",i," is ",fruits[i]);
}

z