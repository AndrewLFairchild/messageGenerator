const randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const clueAnswers = {
  person: [
    "Professor Plum",
    "Miss Scarlett",
    "Dwayne The Rock Johnson",
    "Colonel Mustard",
    "Mrs. White",
    "Mrs. Peacock",
    "R. Kelly",
  ],
  place: [
    "Ballroom",
    "Conservatory",
    "Study",
    "The Octogon",
    "The Room With a Tarp on the Floor",
    "The Kitchen",
    "Dining Room"
  ],
  thing: [
    "Revolver",
    "Lead Pipe",
    "Knife",
    "Super Soaker Filled with Pee",
    "Peoples Elbow",
    "Rope"
]
};

let answer = [];

for (prop in clueAnswers) {
    let clueIndex = randomNumber(clueAnswers[prop].length)

    switch(prop) {
        case 'person':
            answer.push(`It was ${clueAnswers[prop][clueIndex]}`);
            break;
        case 'place': 
            answer.push(`In the ${clueAnswers[prop][clueIndex]}`);
            break;
        case 'thing':
            answer.push(`With the ${clueAnswers[prop][clueIndex]}.`)
    }
}

const formatAnswer = answerSet => {
    const formatted = answer.join('\n')
    console.log(formatted)
}

formatAnswer(answer);