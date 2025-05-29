console.log("hello zlunc 7 （￣︶￣）↗　");

//Variables 
let getMeColor;
let getuserName;
let abcdef;
let ageidk;
/****************************
Main code
****************************/

/****************************
Functions
****************************/
function start() {
    getMeColor = getFavColor()
    getuserName = getUserName()
    ageidk = askUserAge()
    abcdef = askUserMoney()
}

function getFavColor() {
    userFavColor = prompt("What is your favourite color?");
    alert("Your favourite color is: " + userFavColor);
};


function getUserName() {
    userName = prompt("What's your name?")
    alert("Welcome " + userName);
    if (!isNaN(userName) userName == null  userName == ""  userName == " ") {
        userName = prompt("bruh enter a name...");
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