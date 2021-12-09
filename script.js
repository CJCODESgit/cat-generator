// AGE IN DAYS

function ageInDays() {
  var birthYear = prompt("Hi👋, what year were you born?");
  var ageCalc = (2021 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageCalc + " days old mate!"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// CAT GENERATOR🐾

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "data:image/jpeg;base64,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";
  div.appendChild(image);
}

// ROCK, PAPER, SCISSORS

function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log("computerChoice", botChoice);

  results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
  console.log(results);

  message = finalMessage(results);
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { paper: 1, rock: 0.5, scissors: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { rock: 1, scissors: 0.5, paper: 0 },
  };
  // creating the database to decide the message in the server
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You tied", color: "yellow" };
  } else {
    return { message: "You won", color: "green" };
  }
}

function rpsFrontEnd(humanimageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // remove all the images on click
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  // create div for each element
  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanimageChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgb(111, 196, 116)'>";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    "'height=150 width=150 style='box-shadow: 0px 10px 50px rgb(243, 38, 24, 1)'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
