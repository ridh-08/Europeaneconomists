let economists = [
  {
    name: "Adam Smith (Scotland)",
    info: "Adam Smith (1723–1790) is regarded as the 'Father of Economics.' His seminal work, 'The Wealth of Nations', introduced the concept of the 'invisible hand' and emphasized the division of labor.",
    question: "Which idea is most associated with Adam Smith?",
    options: ["The invisible hand", "Comparative advantage", "Creative destruction"],
    answer: 0
  },
  {
    name: "David Ricardo (England)",
    info: "David Ricardo (1772–1823) developed the theory of comparative advantage, explaining why nations benefit from trade. He also studied economic rent and the distribution of wealth.",
    question: "What is the principle of comparative advantage about?",
    options: ["Specialization in goods with lower opportunity costs", "Eliminating trade barriers", "Maximizing profits in agriculture"],
    answer: 0
  },
  {
    name: "Thomas Malthus (England)",
    info: "Thomas Malthus (1766–1834) argued that population growth would outstrip food supply, leading to famine. His ideas influenced discussions on population and sustainability.",
    question: "What concept is Malthus most associated with?",
    options: ["Economic cycles", "Population growth outstripping resources", "The invisible hand"],
    answer: 1
  },
  {
    name: "Jean-Baptiste Say (France)",
    info: "Jean-Baptiste Say (1767–1832) is known for Say's Law: 'Supply creates its own demand.' He highlighted the role of production in economic growth.",
    question: "What does Say's Law suggest?",
    options: ["Demand drives production", "Supply creates its own demand", "Markets always reach equilibrium"],
    answer: 1
  },
  {
    name: "Vilfredo Pareto (Italy)",
    info: "Vilfredo Pareto (1848–1923) formulated the Pareto Principle, which states that 80% of effects come from 20% of causes. He also worked on income distribution.",
    question: "What is the Pareto Principle?",
    options: ["80% of wealth is held by 20% of people", "Markets are always efficient", "All resources are perfectly allocated"],
    answer: 0
  },
  {
    name: "Leon Walras (France)",
    info: "Leon Walras (1834–1910) developed general equilibrium theory, explaining how markets interact. His work was foundational for modern economic theory.",
    question: "What did Walras contribute to economics?",
    options: ["Labor theory of value", "General equilibrium theory", "Creative destruction"],
    answer: 1
  },
  {
    name: "Alfred Marshall (England)",
    info: "Alfred Marshall (1842–1924) contributed to microeconomics by developing concepts such as elasticity, consumer surplus, and marginal utility.",
    question: "What key concept is attributed to Alfred Marshall?",
    options: ["Economic rent", "Marginal utility", "Comparative advantage"],
    answer: 1
  },
  {
    name: "Joseph Schumpeter (Austria)",
    info: "Joseph Schumpeter (1883–1950) coined the term 'creative destruction,' describing how innovation disrupts industries and fosters growth.",
    question: "What does Schumpeter's 'creative destruction' describe?",
    options: ["Markets collapsing due to inefficiency", "Innovation replacing outdated industries", "Equilibrium in competitive markets"],
    answer: 1
  },
  {
    name: "Friedrich Hayek (Austria)",
    info: "Friedrich Hayek (1899–1992) argued for free-market economics and emphasized the dangers of central planning in *The Road to Serfdom*.",
    question: "What is Hayek best known for?",
    options: ["General equilibrium theory", "Free-market economics", "Comparative advantage"],
    answer: 1
  },
  {
    name: "Francois Quesnay (France)",
    info: "Francois Quesnay (1694–1774) was a Physiocrat who argued that agriculture was the source of all wealth. His *Tableau Économique* modeled the flow of goods and money.",
    question: "What was Quesnay's main contribution?",
    options: ["Labor theory of value", "Economic flow models", "Industrial production theories"],
    answer: 1
  },
  {
    name: "Karl Marx (Germany)",
    info: "Karl Marx (1818–1883) critiqued capitalism in *Das Kapital*, focusing on class struggles and labor exploitation. He argued for socialism as an alternative system.",
    question: "What was Marx's focus in his economic theories?",
    options: ["Free trade", "Class struggle and labor", "Monetary policy"],
    answer: 1
  },
  {
    name: "John Stuart Mill (England)",
    info: "John Stuart Mill (1806–1873) expanded on classical economics, addressing issues like liberty, utilitarianism, and the role of government in the economy.",
    question: "Which topic did John Stuart Mill emphasize?",
    options: ["Agricultural efficiency", "Economic liberty", "Population growth"],
    answer: 1
  },
  {
    name: "Friedrich Engels (Germany)",
    info: "Friedrich Engels (1820–1895) co-authored *The Communist Manifesto* with Marx, critiquing capitalism and its societal impacts, while advocating for socialism.",
    question: "What did Engels focus on in his writings?",
    options: ["Agrarian economics", "Capitalism and class struggle", "Trade imbalances"],
    answer: 1
  },
  {
    name: "Carl Menger (Austria)",
    info: "Carl Menger (1840–1921) founded the Austrian School of Economics, emphasizing subjective value and marginal utility in economic decisions.",
    question: "What school of thought is Carl Menger associated with?",
    options: ["Keynesian", "Austrian", "Physiocratic"],
    answer: 1
  }
  
];


let state = "start"; // start, info, quiz, feedback, end
let currentEconomist = 0;
let score = 0;
let feedback = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white')
}

function draw() {
  background(220);
  if (state === "start") {
    drawStartScreen();
  } else if (state === "info") {
    drawInfoScreen();
  } else if (state === "quiz") {
    drawQuizScreen();
  } else if (state === "feedback") {
    drawFeedbackScreen();
  } else if (state === "end") {
    drawEndScreen();
  }
}

function drawStartScreen() {
  textAlign(CENTER, CENTER);
  textFont('Verdana')
  textSize(24);
  text("Welcome to Journey Through Economics!", width / 2, height / 2 - 40);
  textSize(16);
  text("Click anywhere to start your journey.", width / 2, height / 2 + 20);
}

function drawInfoScreen() {
  let economist = economists[currentEconomist];
  textAlign(LEFT, TOP);
  textSize(18);
  text(`Meet ${economist.name}`, 50, 50);
  textSize(14);
  text(economist.info, 50, 100, width - 100);
  textAlign(CENTER, BOTTOM);
  textSize(16);
  text("Click anywhere to continue to the quiz.", width / 2, height - 30);
}

function drawQuizScreen() {
  let economist = economists[currentEconomist];
  textAlign(LEFT, TOP);
  textSize(18);
  text(economist.question, 50, 50);
  for (let i = 0; i < economist.options.length; i++) {
    let y = 120 + i * 40;
    textSize(14);
    text(`${i + 1}: ${economist.options[i]}`, 50, y);
  }
  textAlign(CENTER, BOTTOM);
  textSize(16);
  text("Press the number key corresponding to your answer.", width / 2, height - 30);
}

function drawFeedbackScreen() {
  textAlign(CENTER, CENTER);
  textSize(18);
  text(feedback, width / 2, height / 2 - 20);
  textSize(16);
  text("Click anywhere to continue.", width / 2, height / 2 + 20);
}

function drawEndScreen() {
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Congratulations! You've completed the journey!", width / 2, height / 2 - 40);
  textSize(16);
  text(`Your score: ${score}/${economists.length}`, width / 2, height / 2 + 20);
}

function mousePressed() {
  if (state === "start") {
    state = "info";
  } else if (state === "info") {
    state = "quiz";
  } else if (state === "feedback") {
    currentEconomist++;
    if (currentEconomist >= economists.length) {
      state = "end";
    } else {
      state = "info";
    }
  } else if (state === "end") {
    currentEconomist = 0;
    score = 0;
    state = "start";
  }
}

function keyPressed() {
  if (state === "quiz") {
    let economist = economists[currentEconomist];
    if (keyCode >= 49 && keyCode <= 51) { // Number keys 1, 2, 3
      let answer = keyCode - 49; // Convert keyCode to array index (0, 1, 2)
      if (answer === economist.answer) {
        score++;
        feedback = "Correct! Well done.";
      } else {
        feedback = `Incorrect. The correct answer was: "${economist.options[economist.answer]}".`;
      }
      state = "feedback";
    }
  }
}
