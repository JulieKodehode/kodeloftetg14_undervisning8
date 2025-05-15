// console referer til inspiser vinduet .log gir en beskjed til console
console.log("Hello World!");

// Datatyper:
// string = streng/tekst
// number = tall
// boolean = true/false sant/usant verdi

// Variabler:
// let = kan bytte verdi
// const = ikke bytte verdi

// Erklærer en variabel:
// let ? = ?;
let userName = "Julie";
console.log(userName);
userName = "Julius";
console.log(userName);

let userAge = 28;
console.log(userAge);

let userPresent = true;
console.log(userPresent);

const firstName = "Julie";
const lastName = "Hauge";
const fullName = firstName + " " + lastName + "!"; // Variable chaining
const wholeName = `${firstName} ${lastName}!`; // Template litteral
console.log(fullName);
console.log(wholeName);

function businessCard() {
    const firstName = "Julie";
    console.log(firstName);
    // Sett opp en variabel for lastName
    const lastName = "Hauge";
    // Sett opp en variabel for fullName
    const fullName = firstName + " " + lastName;
    // Logg fullName til console
    console.log(fullName);


    // Mer om dette tirsdag 19.05
    const body = document.querySelector("h1");
    body.textContent = fullName;
}
businessCard();