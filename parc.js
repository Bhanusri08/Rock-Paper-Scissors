let userscore = 0;
let compscore = 0;
let userwin;
const choices = document.querySelectorAll(".choice");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randindx=Math.floor(Math.random()*3);
    return options[randindx];
} 
const msg=document.querySelector("#msg");

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw,Play again!";
}
const showwinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win!");
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lost");
        msg.innerText=`You Lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const compchoice=gencompchoice();
    let userwin;
    console.log("computer choice  =",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }
    else{
        userwin=true;
        if(userchoice ==="rock"){
            userwin=(compchoice==="paper")?false:true;
        }else if(userchoice ==="paper"){
            userwin=(compchoice==="scissors")?false:true;
        }else{
            userwin=(compchoice ==="rock")?false:true;
        }
    }
    showwinner(userwin,compchoice,userchoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});







