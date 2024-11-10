const GreetingResultEl = document.querySelector("#nameGreetingResult");
const inputEl = document.getElementById("inputTxt");

const submitBtnEl = document.getElementById("submitBtn");
const changeBgEl = document.querySelector("#changeBg");

const greetCyberdudeEl = document.querySelector("span#greetCyberdueTxt");

function capitalizeWords(words) {
    // split the word
    const wordWithSpaces = words.split(" ");
    const capitalizeWords = wordWithSpaces.map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    });
    return capitalizeWords.join(" ");
    }
    
submitBtnEl.addEventListener("click", () => {
    showWelcomeCard();
});

changeBgEl.addEventListener("click", () => {
    const bodyEl = document.body;
    bodyEl.style.backgroundColor = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0")}`;
    console.log(bodyEl);
});
function showWelcomeCard(){
    if (inputEl) {
        const inputName = inputEl.value.trim(); // Get value of the input and remove extra spaces
    
        // Form validation: (Min: 3, Max: 20 characters)
        if (inputName.length < 3 || inputName.length > 20) {
          alert("Please enter a name between 3 and 20 characters.");
          return;
        }
    
        // If validation passes
        // alert(`Hello, ${capitalizeWords(inputName)}!`); 
        // Greeting with the input name
        GreetingResultEl.style.display = "block";
    
        GreetingResultEl.innerText = `👋  Hello ${capitalizeWords(inputName)}, Welcome to our app!`
      } else {
        alert(`Can't get name!`);
      }
}
document.addEventListener("DOMContentLoaded", () => {
    GreetingResultEl.style.display = "none";
    document.addEventListener("keydown", (event) => {
        if(event.code === "Enter"){
            showWelcomeCard();
        }
    })
});



