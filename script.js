// add vote buttons for each pet on the page
//DOG
let dogButton = document.createElement("button"); //create a button
dogButton.innerText = "Vote for Doggo"; // add text to button
let dogColumn = document.querySelector("#doggo"); // grab the dog column
dogColumn.append(dogButton); // add button to dog column

//DOG - Stores votes in local storage
let dogVotes = localStorage.getItem("doggo-votes"); //grab "doggo-votes" from local storage
if (dogVotes){ // if there is something stored in local storage under "doggo-votes"
    document.querySelector("#doggo-votes").innerText = dogVotes; //set the vote count for doggo to the value stored in localStorage
}

//CAT
let catButton = document.createElement("button");
catButton.innerText = "Vote for Catto";
let catColumn = document.querySelector("#catto");
catColumn.append(catButton);

let catVotes = localStorage.getItem("catto-votes"); //grab "doggo-votes" from local storage
if (catVotes){ // if there is something stored in local storage under "doggo-votes"
    document.querySelector("#catto-votes").innerText = catVotes; //set the vote count for doggo to the value stored in localStorage
}

//FISH
let fishButton = document.createElement("button");
fishButton.innerText = "Vote for Fishy Muffins";
let fishColumn = document.querySelector("#fish");
fishColumn.append(fishButton);

let fishVotes = localStorage.getItem("fish-votes"); //grab "doggo-votes" from local storage
if (fishVotes){ // if there is something stored in local storage under "doggo-votes"
    document.querySelector("#fish-votes").innerText = fishVotes; //set the vote count for doggo to the value stored in localStorage
}

// when pet gets a vote, add vote to list
//create functions for each button

let dogButtonClick = () => {
    let currentVotes = parseInt(document.querySelector("#doggo-votes").innerText);
    currentVotes++;
    document.querySelector("#doggo-votes").innerText = currentVotes;
    localStorage.setItem('doggo-votes', currentVotes);
}

let catButtonClick = () => {
    let currentVotes = parseInt(document.querySelector("#catto-votes").innerText);
    currentVotes++;
    document.querySelector("#catto-votes").innerText = currentVotes;
    localStorage.setItem('catto-votes', currentVotes);
}

let fishButtonClick = () => {
    let currentVotes = parseInt(document.querySelector("#fish-votes").innerText);
    currentVotes++;
    document.querySelector("#fish-votes").innerText = currentVotes;
    localStorage.setItem('fish-votes', currentVotes);
}


dogButton.addEventListener("click", dogButtonClick);
catButton.addEventListener("click", catButtonClick);
fishButton.addEventListener("click", fishButtonClick);


