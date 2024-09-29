let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rst-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let turnO=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
  
    };
boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        if(turnO) {
        box.innerText="O";
        box.style.backgroundColor="red";
        turnO=false;
        } else{
            box.innerText="X";
            box.style.backgroundColor="green";
            turnO=true;
        }
        count++;
        box.disabled=true;
       let iswinner= checkWinner();
        if(count===9&&!iswinner) {
            drawGame();
        }
    });
});
const disableBoxes=()=> {
    for(let box of boxes) {
        box.disabled=true;
    }
};
const enableBoxes=()=> {
    for(let box of boxes) {
        box.disabled=false;
         box.style.backgroundColor="#ffb703";
        box.innerText="";
    }
};
const showWinner = (winner)=> {
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const drawGame=()=> {
    msg.innerText=`The Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner =()=> {
    for(let pattern of winPattern) {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!="") {
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
            return true;
            }
         }
        }

    }
newGameBtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);