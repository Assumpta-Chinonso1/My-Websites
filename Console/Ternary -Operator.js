let weatherChange = true
let weatherMessage = weatherChange? 'Bring an Umbrella': 'No need for an umbrella'
console.log(weatherMessage);

let temperatureCheck = 95
let temperatureFeedBack = temperatureCheck < 60? 'warm Day': temperatureCheck < 90? 'Hot Day': "cool"
console.log(temperatureFeedBack);

//Using If statement

const ofAge = 29

if (ofAge < 12) {
    console.log("You can Drive a Car");
}else{
    console.log("You can't drive a car");
}

 ofAge > 2? console.log("You can drive a car"): console.log("You can't drive a car");

 //assigning a conditional value to a variable

 const canDrive = ofAge >= 20?  true : false
 const canDrive2 = ofAge >= 21? "You can drive" : "You can't drive"

 console.log(canDrive);
 console.log(canDrive2);

 //multiple statement
    const form = true
    let loginForm;

    if (form) {
        alert("Good Morning! and welcome to my website")
        loginForm = "Please full in your details"
    }else{
       alert("Access Denial")
        loginForm = "Please there's an error in the message, login again"
    }
    console.log(form);
 
       //another way to write it for the multiple statement
    const info = form? (alert("Good Morning"), '/dashboard') : (alert("Access denial"), '/login')
    console.log(info);

    form ? console.log("Welcome to my site") : null; 

    form && console.log("welcome to my site");