const questionBank = [
    { question: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], correctAnswer: "New Delhi" },
    { question: "Which is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"], correctAnswer: "Jupiter" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
    { question: "Which programming language is known as the language of the web?", options: ["C++", "Python", "JavaScript", "Java"], correctAnswer: "JavaScript" },
    { question: "Who is known as the Father of the Nation in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "Subhas Chandra Bose"], correctAnswer: "Mahatma Gandhi" },
    { question: "Which is the smallest prime number?", options: ["1", "2", "3", "5"], correctAnswer: "2" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"], correctAnswer: "Alexander Graham Bell" },
    { question: "What is the chemical symbol for water?", options: ["O2", "H2", "H2O", "HO2"], correctAnswer: "H2O" },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Saturn", "Mercury"], correctAnswer: "Mars" },
    { question: "What is the capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], correctAnswer: "Paris" },
  ];

  function Randomques() {
    const newdata = new Set();
    while (newdata.size < 5) {
      const index = Math.floor(Math.random() * questionBank.length);
      newdata.add(questionBank[index]);
    }
    return [...newdata];
  }

  const form = document.querySelector('form');
  const problem = Randomques();
  const result = {}; // To store correct answers

  // Generate Questions
  problem.forEach((obj, index) => {
    const divi = document.createElement("div");
    divi.className = "question";

    // Store the correct answer
    result[`q${index + 1}`] = obj["correctAnswer"];

    // Add question
    form.appendChild(divi);
    const para = document.createElement("p");
    para.textContent = `${index + 1}. ${obj["question"]}`;
    divi.appendChild(para);

    // Add options
    obj["options"].forEach((value) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index + 1}`;
      input.value = value;

      label.appendChild(input);
      label.appendChild(document.createTextNode(value));
      divi.appendChild(label);

      // Add line break
      divi.appendChild(document.createElement("br"));
    });

    
  });

  // Add Submit Button
  const butt = document.createElement("button");
  butt.type = "submit";
  butt.className = "submit-Button";
  butt.textContent = "Submit";
  form.appendChild(butt);

  // Add result display
  const ele = document.createElement("div");
  ele.id = "result";
  ele.style.backgroundColor = "#f0f0f0";
  ele.style.padding = "10px";
  ele.style.border = "1px solid #ccc";
  ele.style.margin = "10px 0";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    let res = 0;

    // Calculate score
    for (let [key, val] of data.entries()) {
      if (val === result[key]) res++;
    }

    // Show result
    ele.innerHTML =
      res > 3
        ? `Congrats! Your score is ${res}.`
        : `Sorry! Your score is ${res}. Try again.`;
    form.appendChild(ele);
  });
  