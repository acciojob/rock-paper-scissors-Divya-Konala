//your code here
let userPoints=0;
let computerPoints=0;
let playGameBtn=document.getElementById("playGameBtn");
let noOfGames;
let computerChoose=["ROCK", "PAPER", "SCISSORS"];

// let userChoiceIoOfGamesdex = computerChoose.indexOf(userChoice);
/* generate computer's choice */
playGameBtn.addEventListener("click",()=>{
    noOfGames=document.getElementById("game-number").value;
    playGameBtn.disabled=true;
    playGame(noOfGames);
})

function playGame(n){
    let userChoiceBtns=document.getElementsByClassName("userSelect");
    for(let i=0;i<userChoiceBtns.length;i++){
        userChoiceBtns[i].addEventListener("click",()=>{
            n--;
            let computerChoice=computer_choice();
            let userChoice=userChoiceBtns[i].innerText;
            let userChoiceIoOfGamesdex = computerChoose.indexOf(userChoice);
            let compChoiceIoOfGamesdex = computerChoose.indexOf(computerChoice);
            document.getElementById("computer-choose").textContent="Computer Choice: "+computerChoice;
            let roundResult=ResultOfGame(compChoiceIoOfGamesdex,userChoiceIoOfGamesdex);
            if(roundResult=="WIN") userPoints++;
            else if(roundResult=="LOOSE") computerPoints++;
            let roundResults=document.querySelectorAll("span");
            roundResults[0].innerText= userPoints;
            roundResults[1].innerText=computerPoints;
            roundResults[2].innerText=n;
            roundResults[3].innerText=roundResult;
            if(n==0){
                for(let j=0;j<userChoiceBtns.length;j++){
                    userChoiceBtns[j].disabled=true;
                }
            }
        })
    }
}

ResultOfGame = (compChoice,usrChoice) =>{
    if(compChoice==usrChoice){
        return "TIE";
    }else if((compChoice==0 && usrChoice==1) || (compChoice==2 && usrChoice==0) || (compChoice==1 && usrChoice==2)){
        return "WIN";
    }else{
        return "LOOSE";
    }
}

function computer_choice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = computerChoose[randomNum];
    return computerChoice;
}
