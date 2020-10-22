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
let timer = 30;
let saveData = [];
let body = document.querySelector("body");
let homePage = document.getElementById("homePage");
let startPage = document.getElementById("startPage");
let questionPage = document.getElementById("questionPage");
let scorepage = document.getElementById("scorepage");
let leaderBord = document.getElementById("leaderBord");
let startBtn = document.getElementById("startBtn");

let isClick = false;

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

const regesterName = () => document.getElementById("nameInput").value || "[     ]";

startBtn.addEventListener("click",openQuestionPage);

const questionPageReset = () => {
    score = 0;
    counter = 1;
    questionPage.innerHTML="";
}

const questionPageGenerator = () => {
    clickCount = 0;
    questionPage.innerHTML="";
    if (counter<11) {
        let questionCounterBox = document.createElement("div");
        questionCounterBox.id = "questionCounterBox";
        questionPage.appendChild(questionCounterBox);
        let questionCounterNumber = document.createElement("p");
        questionCounterNumber.innerHTML=`${counter}/10`;
        questionCounterBox.appendChild(questionCounterNumber);

        // add timer here
        
        let questionTimerBox = document.createElement("div");
        questionTimerBox.id = "questionTimerBox";
        questionPage.appendChild(questionTimerBox);
        let questionTimer = document.createElement("p");
        questionTimer.id = "questionTimer";
        questionTimerBox.appendChild(questionTimer);
        timer = 10;
        let timeId = setInterval(() => {
            if (timer == -1 || isClick) {
                isClick = false;
                clearInterval(timeId);
                questionPageGenerator();
            } else {
                questionTimer.innerHTML = timer;
                timer--;
            }
        },1000)

        questionTimer.innerHTML=timer;

        let questionIndex = Math.floor(Math.random()*20);
        questionGenerator(questionIndex);
    } else if (counter >= 11) {
        scorepage.classList.remove("hidden");
        questionPage.classList.add("hidden");
        
        // go to the score 

        showScore();
    
    }
       
}

const questionGenerator = (questionIndex) => {
    let questionBox = document.createElement("div");
    questionBox.id = "questionBox"
    questionPage.appendChild(questionBox);
    let questionBody = document.createElement("p");
    questionBody.innerHTML=`Q${counter}:${questionArray[questionIndex].questionNo}?`;
    questionBox.appendChild(questionBody);
    answerGenerator(questionIndex,questionBox);
    
    counter++;
}

const answerGenerator = (questionIndex,questionBox) => {
    let answerCluster = document.createElement("div")
    questionBox.appendChild(answerCluster);
    for (let i = 0; i < 4; i++) {
        let answerNumber = 1+i ;
        let answerBox = document.createElement("div");
        answerBox.id = "answerBox"+answerNumber;
        answerCluster.appendChild(answerBox);
        let answer = document.createElement("p");
        answer.innerHTML=`${answerNumber}:${questionArray[questionIndex][`answer${answerNumber}`]}`;
        answer.id=answerNumber;
        answerBox.addEventListener("click",() => {
            isClick = true;
            rightAnswer(questionIndex,answerNumber)
        })
        answerBox.appendChild(answer);
    }
}

const rightAnswer = (questionIndex,answerNumber) => {
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


const showScore = () => {
    let userName = document.createElement("h1");
    userName.id = "userNameTitle";
    userName.innerHTML=name;
    scorepage.appendChild(userName);
    let scoreDiv = document.createElement("div");
    scorepage.appendChild(scoreDiv);
    let scoreP = document.createElement("p");
    scoreP.id = "scoreTitle"
    scoreP.innerHTML=`${score*10}%`;
    scoreDiv.appendChild(scoreP);
    let leaderBordBtn = document.createElement("p");
    leaderBordBtn.id = "leaderBordBtn"
    leaderBordBtn.innerHTML="Leader Bord";
    scoreDiv.appendChild(leaderBordBtn);
    leaderBordBtn.addEventListener("click",openLeaderBord);

    let tryAgainBtn = document.createElement("p");
    tryAgainBtn.id = "tryAgainBtn"
    tryAgainBtn.innerHTML="Try Again";
    scorepage.appendChild(tryAgainBtn);
    tryAgainBtn.addEventListener("click",tryAgain);
    if (!window.localStorage.getItem('saveData')) {
        saveData = [];
    } else {
        saveData = JSON.parse(window.localStorage.getItem('saveData'));
        window.localStorage.clear();
    }
    saveData.push({
        name: name,
        score:`${score*10}%`
    })
    window.localStorage.setItem('saveData', JSON.stringify(saveData));
    console.log(saveData);
    questionPageReset();
}

const openLeaderBord = () => {
    leaderBord.innerHTML="";
    let lastAdd = saveData.length-1

    leaderBord.classList.remove("hidden");
    scorepage.classList.add("hidden");
    let title = document.createElement("h1");
    title.innerHTML="last 10 Games";
    leaderBord.appendChild(title);
    let scoresBox = document.createElement("div");
    leaderBord.appendChild(scoresBox);
    for (let i = 0; i < 10 && i < saveData.length ; i++) {
        let tagName = document.createElement("p");
        tagName.innerHTML = saveData[lastAdd]["name"];
        scoresBox.appendChild(tagName);

        let tagScore = document.createElement("p");
        tagScore.innerHTML = saveData[lastAdd]["score"];
        scoresBox.appendChild(tagScore);

        lastAdd--;
    }

    let tryAgainBtn = document.createElement("p");
    tryAgainBtn.innerHTML="Try Again ?";
    scorepage.appendChild(tryAgainBtn);
    tryAgainBtn.addEventListener("click",tryAgain);

}

const tryAgain = () => {
    scorepage.innerHTML="";
    openQuestionPage();
}


``