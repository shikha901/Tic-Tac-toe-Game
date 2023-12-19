let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true;

const winpattern = [
    [0,4,8],
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    trunO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    console.log("box was clicked");
    
    if(trunO===true){
        box.innerText = "O";
        trunO =false;
    }else{
        box.innerText = "X";
        trunO = true;
    }
    box.disabled =true;

    checkWinner();
  });
});
    const checkWinner = () =>{
for( let Patterns of winpattern){
   
       let post1val= boxes[Patterns[0]].innerText;
       let post2val= boxes[Patterns[1]].innerText;
       let post3val= boxes[Patterns[2]].innerText;
   
       if(post1val!="" && post2val!="" && post3val!=""){
        if(post1val===post2val && post2val===post3val ){
            console.log("winner",post1val);
            shoWinner(post1val);
        }
       }
    }
};
     const shoWinner = (winner)=>{
      msg.innerHTML = `Congratulations! winner is ${winner}`;
      msgcontainer.classList.remove("hide");
      disableboxes();
     }

     const disableboxes =() => {
        for (let box of boxes){
            box.disabled = true;
        }
     }

     const enableboxes =() => {
        for (let box of boxes){
            box.disabled= false;
            box.innerHTML ="";
        }
     }

     newbtn.addEventListener("click",resetgame);
     reset.addEventListener("click",resetgame);
