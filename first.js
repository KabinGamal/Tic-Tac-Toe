let button = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msg_cont = document.querySelector(".msg_cont");
let turnO =true;


const winConditions=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

button.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winConditions){
        let pos1=button[pattern[0]].innerText;
        let pos2=button[pattern[1]].innerText;
        let pos3=button[pattern[2]].innerText;

        if(pos1!="" && pos1==pos2 && pos2==pos3){
            disableBox();
            showWinner(pos1);

    
    }
}
}
const showWinner=(winner)=>{
    msg_cont.classList.remove("hide");
    msg.innerText=`Congrulations! \n ${winner} wins the game.`
}
const disableBox=()=>{
    for (let box of button){
        box.disabled=true;
    }
}