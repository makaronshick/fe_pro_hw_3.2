/* 
Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const userName = prompt('Enter your name');

if (userName === null) {
    alert("You clicked 'Cancel'");
    throw '';
}
else if (!userName.trim()) {
    alert('You entered nothing (or spaces only)');
    throw '';
}
else if (!isNaN(userName)) {
    alert('You entered numbers');
    throw '';
}

const userCity = prompt('Enter your city');

if (userCity === null) {
    alert("You clicked 'Cancel'");
    throw '';
}
else if (!userCity.trim()) {
    alert('You entered nothing (or spaces only)');
    throw '';
}
else if (!isNaN(userCity)) {
    alert('You entered numbers');
    throw '';
}

const userEyeColor = prompt('Enter your eyes color');

if (userEyeColor === null) {
    alert("You clicked 'Cancel'");
    throw '';
}
else if (!userEyeColor.trim()) {
    alert('You entered nothing (or spaces only)');
    throw '';
}
else if (!isNaN(userEyeColor)) {
    alert('You entered numbers');
    throw '';
}

alert(`Hi, ${userName} from ${userCity}! You have beautiful ${userEyeColor} eyes!`);

// string with concat
// alert('Hi, ' + userName + ' from ' + userCity + '! You have beautiful ' + userEyeColor + ' eyes!');
