const game = document.querySelector("#game");
const scoreDisplay = document.querySelector("#score");

const jeopardyCategories = [
  {
    genre: "A",
    questions: [
      {
        question:
          "Children, elderly, and people with a compromised immune system",
        correct: "What are the 3 most vulnerable populations?",
        level: "easy"
      },
      {
        question:
          "Substance that looks like wild rice in the corner of an establishment",
        correct: "What is a sign of rodents?",
        level: "medium"
      },
      {
        question: "First in First out",
        correct: "What does FIFO mean?",
        level: "hard"
      },
      {
        question: "Everything in its place",
        correct: "What does mise en place mean?",
        level: "expert"
      },
      {
        question: "Diarrhea, throwing up, and fever",
        correct: "What are the 3 symptoms you call in for?",
        level: "genius"
      },
      {
        question: "Checking temperature in multiple areas",
        correct:
          "How do you get a consistent temperature of large pot of rice/mashed potatoes?",
        level: "super genius"
      }
    ]
  },
  {
    genre: "B",
    questions: [
      {
        question: "41F to 135F",
        correct: "What is the temperature danger zone?",
        level: "easy"
      },
      {
        question: "41F or lower",
        correct: "What temperature should cold foods be held at?",
        level: "medium"
      },
      {
        question:
          "Refrigeration, microwave, cooking, or running water 70F or lower",
        correct: "What are acceptable methods of thawing foods?",
        level: "hard"
      },
      {
        question: "165F for 15 seconds",
        correct: "What temperature should you cook chicken to?",
        level: "expert"
      },
      {
        question: "135F or higher",
        correct: "What is the temperature hot foods are held at?",
        level: "genius"
      },
      {
        question: "165F within two hours",
        correct: "What is the temperature and time frame when reheating food?",
        level: "super genius"
      }
    ]
  },
  {
    genre: "C",
    questions: [
      {
        question: "135F for 15 seconds",
        correct:
          "What should you cook fruits, veggies, grains, and legumes to?",
        level: "easy"
      },
      {
        question: "BONUS",
        correct: "BONUS",
        level: "medium"
      },
      {
        question: "145F for 15 seconds",
        correct:
          "What temp should you cook seafood, beef, pork, veal, lamb, roast, & eggs that will be served instantly?",
        level: "hard"
      },
      {
        question: "155F for 15 seconds",
        correct: "What temperature should ground meat be cooked to?",
        level: "expert"
      },
      {
        question: "135F - 70F within two hours then 70F - 41F within 4 hours",
        correct:
          "What are the time frames and temperatures you follow when cooling foods for storage?",
        level: "genius"
      },
      {
        question: "You cut your hand while dicing onions",
        correct: "What is a biological contamination?",
        level: "super genius"
      }
    ]
  },
  {
    genre: "D",
    questions: [
      {
        question: "WAX / PARCHMENT PAPER",
        correct: "How to distribute pasteries to a customer?",
        level: "easy"
      },
      {
        question: "A finger nail in the food",
        correct: "What is an example of physical contamination?",
        level: "medium"
      },
      {
        question: "BONUS",
        correct: "BONUS",
        level: "hard"
      },
      {
        question: "Keeping rodents & pest away from outside dumpster",
        correct: "What is keeping lid closed and area clean?",
        level: "expert"
      },
      {
        question: "Lettuce and pork on the same cutting board",
        correct: "What is cross-contamination?",
        level: "genius"
      },
      {
        question: "Drinks with a closed lid and a straw",
        correct: "What are personal drinks allowed in the kitchen?",
        level: "super genius"
      }
    ]
  },
  {
    genre: "E",
    questions: [
      {
        question: "20 seconds",
        correct: "How long should you wash your hands for?",
        level: "easy"
      },
      {
        question: "Overspray of a cleaning solution into food",
        correct: "What is an example of chemical contamination?",
        level: "medium"
      },
      {
        question: "Wash, Rinse, and Sanitize",
        correct: "What are the 3 steps of a dishwashing sink?",
        level: "hard"
      },
      {
        question: "6 inches off the floor",
        correct: "What is the height foods must be stored off the floor?",
        level: "expert"
      },
      {
        question: "6 conditions that promote the growth of food borne path",
        correct:
          "What is FATTOM - Food, Acid, Time, Temperature, Oxygen, and Moisture?",
        level: "genius"
      },
      {
        question: "Only place chemicals should be stored",
        correct: "What is a utility closet",
        level: "super genius"
      }
    ]
  }
];

let score = 0;

function addCategory(category) {
  const column = document.createElement("div");
  column.classList.add("genre-column");

  const genreTitle = document.createElement("div");
  genreTitle.classList.add("bg-light");
  genreTitle.classList.add("text-center");
  genreTitle.classList.add("text-primary");
  genreTitle.classList.add("m-3");
  genreTitle.classList.add("jeopardy");
  genreTitle.classList.add("font-sz-35px");
  genreTitle.classList.add("rounded");
  genreTitle.classList.add("mt-4");
  genreTitle.innerHTML = category.genre;

  column.append(genreTitle);

  game.append(column);

  category.questions.forEach(question => {
    const card = document.createElement("div");
    card.classList.add("card");
    column.append(card);

    if (question.level === "easy") {
      card.innerHTML = 100;
    }
    if (question.level === "medium") {
      card.innerHTML = 200;
    }
    if (question.level === "hard") {
      card.innerHTML = 300;
    }
    if (question.level === "expert") {
      card.innerHTML = 400;
    }
    if (question.level === "genius") {
      card.innerHTML = 500;
    }
    if (question.level === "super genius") {
      card.innerHTML = 600;
    }

    card.setAttribute("data-question", question.question);
    card.setAttribute("data-correct", question.correct);
    card.setAttribute("data-value", card.getInnerHTML);

    card.addEventListener("click", flipCard);
  });
}

jeopardyCategories.forEach(category => addCategory(category));

function flipCard() {
  this.innerHTML = "";
  this.style.fontSize = "1rem";
  this.style.lineHeight = "1.5rem";
  this.classList.add("scale");
  const textDisplay = document.createElement("div");
  textDisplay.classList.add("card-text");
  textDisplay.innerHTML = this.getAttribute("data-question");
  const firstButton = document.createElement("button");

  firstButton.classList.add("btn");
  firstButton.classList.add("btn-lg");
  firstButton.classList.add("btn-outline-light");

  firstButton.innerHTML = "Answer";
  firstButton.addEventListener("click", getResult);
  this.append(textDisplay, firstButton);

  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach(card => card.removeEventListener("click", flipCard));
}

function getResult() {
  const allCards = Array.from(document.querySelectorAll(".card"));
  allCards.forEach(card => card.addEventListener("click", flipCard));
  const cardOfButton = this.parentElement;

  cardOfButton.classList.add("correct-answer");

  setTimeout(() => {
    while (cardOfButton.firstChild) {
      cardOfButton.removeChild(cardOfButton.lastChild);
    }
    cardOfButton.innerHTML = cardOfButton.getAttribute("data-correct");
  }, 100);

  setTimeout(() => {
    cardOfButton.classList.remove("scale");
  }, 5000);

  cardOfButton.removeEventListener("click", flipCard);
}
