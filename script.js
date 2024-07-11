/* 
Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

let userName = prompt('Enter your name');

if (userName === null) {
    alert("You clicked 'Cancel'. Default value 'User' saved");
    userName = 'User';
}
else if (!userName.trim()) {
    alert("You entered nothing (or spaces only). Default value 'User' saved");
    userName = 'User';
}
else if (!isNaN(userName)) {
    alert("You entered numbers. Default value 'User' saved");
    userName = 'User';
}

let userCity = prompt('Enter your city');

if (userCity === null) {
    alert("You clicked 'Cancel'. Default value 'City' saved");
    userCity = 'City';
}
else if (!serCity.trim()) {
    alert("You entered nothing (or spaces only). Default value 'City' saved");
    userCity = 'City';
}
else if (!isNaN(userCity)) {
    alert("You entered numbers. Default value 'City' saved");
    userCity = 'City';
}

let userEyeColor = prompt('Enter your eyes color');

if (userEyeColor === null) {
    alert("You clicked 'Cancel'. Default value 'Color' saved");
    userEyeColor = 'Color';
}
else if (!userEyeColor.trim()) {
    alert("You entered nothing (or spaces only). Default value 'Color' saved");
    userEyeColor = 'Color';
}
else if (!isNaN(userEyeColor)) {
    alert("You entered numbers. Default value 'Color' saved");
    userEyeColor = 'Color';
}

alert(`Hi, ${userName} from ${userCity}! You have beautiful ${userEyeColor} eyes!`);

// string with concat
// alert('Hi, ' + userName + ' from ' + userCity + '! You have beautiful ' + userEyeColor + ' eyes!');
