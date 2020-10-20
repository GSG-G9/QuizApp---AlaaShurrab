let questionArray = [
    {
        questionNo : "1",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "2",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "3",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "4",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "5",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "6",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "7",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "8",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "9",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "10",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "11",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "12",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "13",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "14",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "15",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "16",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "17",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "18",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "19",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    },
    {
        questionNo : "20",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "aaaaaaaaaa"
    }
];

const questionPage = document.querySelector("#questionPage");

const questionGenerator = (questionNumber,counter) => {
    questionBox.innerHTML=``;
    let questionBox = document.createElement("div");
    questionPage.appendChild(questionBox);
    let questionBody = document.createElement("p");
    questionBody.innerHTML=`Q${counter}:${questionArray[questionNumber].questionNo}?`;
    questionBox.appendChild(questionBody);
    answerGenerator(questionNumber,questionBox);
    let nextQuestionBtn = document.createElement("div");
    nextQuestionBtn.innerHTML=`<img src="https://cdn0.iconfinder.com/data/icons/ie_Financial_set/256/47.png" width="100%" height=100%>`;
    
}

const answerGenerator = (questionNumber,questionBox) => {
    for (let i = 0; i < 4; i++) {
        let answerBox = document.createElement("div");
        questionBox.appendChild(answerBox);
        let answer = document.createElement("p");
        answer.innerHTML=`${i}:${questionArray[questionNumber][`answer${++i}`]}`;

    }
}