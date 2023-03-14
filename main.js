/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

// declare the variable 
let myVariable;

// assigned values
myVariable = "Bob";

// declare the variable and assigned values at the same time 

let myVariable1 ="Bob1";

myVariable;
myVariable1;

// After assigning a value to a variable, you can change it later in the code:
let myVar = "Bob";
myVar = "Steve";

/*
Variable	Explanation	
String	    This is a sequence of text known as a string. To signify that the value is a string, enclose it in single or double quote marks.	
            let myVariable = 'Bob'; or
            let myVariable = "Bob";
Number	    This is a number. Numbers don't have quotes around them.	
            let myVariable = 10;
Boolean	    This is a True/False value. 
            The words true and false are special keywords that don't need quote marks.	
            let myVariable = true;
Array	    This is a structure that allows you to store multiple values in a single reference.	
            let myVariable = [1,'Bob','Steve',10];
            Refer to each member of the array like this:
            myVariable[0], myVariable[1], etc.
Object	    This can be anything. 
            Everything in JavaScript is an object and can be stored in a variable. 
            Keep this in mind as you learn.	
            let myVariable = document.querySelector('h1');
            All of the above examples too.

*/

// Conditionals
/*
Conditionals are code structures used to test if an expression returns true or not. 
A very common form of conditionals is the if...else statement. 
--*/
/*
let iceCream = "chocolate";
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
    alert("Awwww, but chocolate is my favorite…");
}

let myVar2 = document.querySelector("h1");
    alert("hello!");

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
    }


document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
    });
*/
  
// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
