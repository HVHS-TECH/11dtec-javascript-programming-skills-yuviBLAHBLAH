console.log("i hate ts");

//Variables 
let getMeColor;
let userName;
let bands;
let age;
/****************************
Main code
****************************/

/****************************
Functions
****************************/
function start() {
    getMeColor = getFavColor()
    userName = getUserName()
    age = askUserAge()
    bands = askUserMoney()
}

function getFavColor() {
    userFavColor = prompt("What is your favourite color?");
    alert("Your favourite color is: " + userFavColor);
};


function getUserName() {
    userName = prompt("What's your name?")
    alert("Welcome " + userName);
    while (!isNaN(userName) || userName == null || userName == "" || userName == " ") {
        userName = prompt("bruh enter a valid age");                              
    }
};


function askUserAge() {
    userAge = prompt("How old are you?");
    alert("Welcome " + userAge + " year old👋🙋‍♂️🙋‍♂️🙋‍♂️");
};


function askUserMoney() {
    var userMoney = prompt("How much money do you have?")
    if (userMoney < 4) {
        alert("Your too broke to buy chocolate😒🤣🤣🤣🤣🤣😒😒😒😒");
    };
    if (userMoney >= 4) {
        alert("You can buy chocolatea😘😘😘💕💕👍👍😁😁😁");
    };
};