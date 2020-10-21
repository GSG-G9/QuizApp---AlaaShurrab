let questionArray = [
    {
        questionNo : "1",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "2",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "3",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "4",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "5",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "6",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "7",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "8",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "9",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "10",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "11",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "12",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "13",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "14",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "15",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "16",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "17",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "18",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "19",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    },
    {
        questionNo : "20",
        answer1 : "aaaaaaaaaa",
        answer2 : "bbbbbbbbbb",
        answer3 : "cccccccccc",
        answer4 : "dddddddddd",
        rghitAnswer : "1"
    }
];

let name ;
let score = 0;
let counter = 1;
let clickCount = 0;
let body = document.querySelector("body");
let homePage = document.getElementById("homePage");
let startPage = document.getElementById("startPage");
let questionPage = document.getElementById("questionPage");
let scorepage = document.getElementById("scorepage");
let leaderBord = document.getElementById("leaderBord");
let startBtn = document.getElementById("startBtn");


const goToStart = () => {
    startPage.classList.remove("hidden");
    homePage.classList.add("hidden");
    body.removeEventListener("click",goToStart);
}
body.addEventListener("click",goToStart);


const openQuestionPage = () => {
    questionPage.classList.remove("hidden");
    homePage.classList.add("hidden");
    startPage.classList.add("hidden");
    leaderBord.classList.add("hidden");
    scorepage.classList.add("hidden");
    name = regesterName();
    questionPageGenerator();

}

const questionPageReset = () => {
    // name = "";
    score = 0;
    counter = 1;
    questionPage.innerHTML="";
}

const questionPageGenerator = () => {
    clickCount = 0;
    questionPage.innerHTML="";
    if (counter<11) {
        let questionCounterBox = document.createElement("div");
        questionPage.appendChild(questionCounterBox);
        let questionCounterNumber = document.createElement("p");
        questionCounterNumber.innerHTML=`${counter}/10`;
        questionCounterBox.appendChild(questionCounterNumber);

        // dont forget to add timer here*****************************

        let questionIndex = Math.floor(Math.random()*20);
        questionGenerator(questionIndex);
    } else if (counter >= 11) {
        
        scorepage.classList.remove("hidden");
        questionPage.classList.add("hidden");
        showScore();
        // return;
        // go to the score *******************************************
    
    }
       
}

const showScore = () => {
    let userName = document.createElement("h1");
    userName.innerHTML=name;
    scorepage.appendChild(userName);
    let scoreDiv = document.createElement("div");
    scorepage.appendChild(scoreDiv);
    let scoreP = document.createElement("p");
    scoreP.innerHTML=`${score*10}%`;
    scoreDiv.appendChild(scoreP);
    let leaderBordBtn = document.createElement("p");
    leaderBordBtn.innerHTML="Check Leader Bord";
    scoreDiv.appendChild(leaderBordBtn);
    let tryAgainBtn = document.createElement("p");
    tryAgainBtn.innerHTML="Try Again ?";
    scorepage.appendChild(tryAgainBtn);
    tryAgainBtn.addEventListener("click",tryAgain);

    questionPageReset();
   
}
const tryAgain = () => {
    scorepage.innerHTML="";
    openQuestionPage();
}


const questionGenerator = (questionIndex) => {
    let questionBox = document.createElement("div");
    questionPage.appendChild(questionBox);
    let questionBody = document.createElement("p");
    questionBody.innerHTML=`Q${counter}:${questionArray[questionIndex].questionNo}?`;
    questionBox.appendChild(questionBody);
    answerGenerator(questionIndex,questionBox);
    let nextQuestionBtn = document.createElement("div");
    nextQuestionBtn.innerHTML=`<img src="https://cdn0.iconfinder.com/data/icons/ie_Financial_set/256/47.png" width="100px" height=100px>`;
    nextQuestionBtn.addEventListener("click",questionPageGenerator);
    questionPage.appendChild(nextQuestionBtn);
    counter++;
}

const answerGenerator = (questionIndex,questionBox) => {
    let answerCluster = document.createElement("div")
    questionBox.appendChild(answerCluster)
    // answerCluster.addEventListener("click",answerShow)
    for (let i = 0; i < 4; i++) {
        let answerNumber = 1+i ;
        let answerBox = document.createElement("div");
        answerCluster.appendChild(answerBox);
        let answer = document.createElement("p");
        answer.innerHTML=`${answerNumber}:${questionArray[questionIndex][`answer${answerNumber}`]}`;
        answer.id=answerNumber;
        answerBox.addEventListener("click",(e) => {
            let path = e.currentTarget;
            rightAnswer(questionIndex,answerNumber,path)
        })
        answerBox.appendChild(answer);
    }
}

const rightAnswer = (questionIndex,answerNumber,path) => {
    if (clickCount<1) {
        if (answerNumber==questionArray[questionIndex].rghitAnswer) {
            score++; 
        } 
        for (let i = 0; i < 4; i++) {
            if (questionArray[questionIndex].rghitAnswer==i+1) {
                document.getElementById(questionArray[questionIndex].rghitAnswer).classList.add("correct");
                continue;
            }
            document.getElementById(i+1).classList.add("wrong");
        }   
        clickCount++;
    }
}


// const isRightAnswer = (questionIndex,answerNumber) => questionArray[questionIndex][`answer${answerNumber}`] == questionArray[questionNumber].rghitAnswer;

const regesterName = () => document.getElementById("nameInput").value || "[     ]";





startBtn.addEventListener("click",openQuestionPage);




// questionPageGenerator();
// questionPageGenerator();
// questionGenerator(0);
// console.log(isRightAnswer(1,3))