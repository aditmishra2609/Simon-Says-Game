//Any key-> game start
//ButtonFlash
//track

let gameSeq = [];
let userSeq = [];
let highestSc = 0;

let btns = ["yellow", "red", "purple", "green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(!started){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash")//adding new class in button classlist,, as flash class introduced be me in CSS
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash")//adding new class in button classlist,, as flash class introduced be me in CSS
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 100)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`; 
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    console.log(`Game seq ${gameSeq}`)
    gameFlash(randbtn);
    
}

function checkAns(idx){
     //console.log(`curr level ${level}`)
     if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
          setTimeout(levelUp(), 1000);
        //levelUp();
        }

        //console.log("same value");
     }
     else{
        h2.innerHTML = `GAME OVER! Your score was <b>${level}</b> <br> Press any key to start .`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 250)
        reset();
     }
}

function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
   //console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
 let  h3 = document.querySelector("h3")
    if(level > highestSc)
        highestSc = level;
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    h3.innerText = `Highest Score: ${highestSc}`;
}



