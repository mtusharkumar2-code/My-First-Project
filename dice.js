// const buttonEl = document.getElementById("roll-button");

// const diceEl = document.getElementById("dice");

// const rollHistoryEl = document.getElementById("roll-history");

// let historyList = [];

// function rollDice() {
//     const rollResult = Math.floor(Math.random() * 6) + 1;
//     const diceFace = getDiceFace(rollResult);
//     diceEl.innerHTML = diceFace;
//     historyList.push(rollResult);
//     updateRollHistory();
// }

// function updateRollHistory() {
//     rollHistoryEl.innerHTML = "";
//     for (let i = 0; i < historyList.length; i++) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
//             historyList[i]
//         )}</span>`;
//         rollHistoryEl.appendChild(listItem);
//     }
// }

// function getDiceFace(rollResult) {
//     switch (rollResult) {
//         case 1:
//             return "&#9856;";
//         case 2:
//             return "&#9857;";
//         case 3:
//             return "&#9858;";
//         case 4:
//             return "&#9859;";
//         case 5:
//             return "&#9860;";
//         case 6:
//             return "&#9861;";
//         default:
//             return "";
//     }
// }

// buttonEl.addEventListener("click", () => {
//     diceEl.classList.add("roll-animation");
//     setTimeout(() => {
//         diceEl.classList.remove("roll-animation");
//         rollDice();
//     }, 1000);
// });

const rollButton = document.getElementById('roll-btn');
console.log(rollButton)
const diceElement = document.getElementById('dice');
const rollHistoryList = document.getElementById('roll-history');

// Unicode characters for standard dice faces (1 to 6)
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

let historyList = [];

function rollDice() {
    // 1. Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber)

    // 2. Add animation class
    diceElement.classList.add('rolling');

    // Remove the animation class after 300ms so it can trigger again next time
    setTimeout(() => {
        diceElement.classList.remove('rolling');
        diceElement.textContent = diceFaces[randomNumber - 1];
    }, 500);

    // 3. Update the dice face on the screen (index is randomNumber - 1)
    // diceElement.textContent = diceFaces[randomNumber - 1];

    // 4. Update and display history
    updateHistory(randomNumber);
}

function updateHistory(roll) {
    historyList.unshift(roll); // Add the new roll to the beginning of the array

    // Keep only the last 5 rolls to avoid cluttering
    if (historyList.length > 5) {
        historyList.pop();
    }

    // Clear and rebuild the HTML list
    rollHistoryList.innerHTML = "";
    historyList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Roll ${index + 1}: Rolled a ${item} ${diceFaces[item - 1]}`;
        rollHistoryList.appendChild(listItem);
    });
}

// Hook up the button click event
// rollButton.addEventListener('click', rollDice);