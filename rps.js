let randnum;
randumnumber = () => {
  randnum = Math.ceil(Math.random() * 3);
};
randumnumber();

img1 = 1;
img2 = 2;
img3 = 3;
urscore = 0;
compscore = 0;
let rock = document.querySelector(".img1");
let yourscore = document.querySelector(".urscorenum");
let comscore = document.querySelector(".compscorenum");
let draw = document.querySelector(".btnn");
rock.addEventListener("click", () => {
    if (randnum == 1) {
      draw.innerText = "It was a draw";
      randumnumber();
    } else if (randnum == 2) {
      compscore++;
      console.log("Comp=" + compscore);
      comscore.innerText = compscore;
      draw.innerText = "Paper beats Rock";
      randumnumber();

    }
   else if (randnum == 3) {
    urscore++;
    console.log("You=" + urscore);
    yourscore.innerText = urscore;
    draw.innerText = "Rock beats Scissor";
    randumnumber();

  }});

let paper = document.querySelector(".img2");
paper.addEventListener(
  "click",
  () => {
      if (randnum == 2) {
        draw.innerText = "It was a draw";
        randumnumber();

      } else if (randnum == 3) {
        compscore++;
        console.log("Comp=" + compscore);
        comscore.innerText = compscore;
        draw.innerText = "Scissor beats Paper";
        randumnumber();
 
      } else if (randnum == 1) {
        urscore++;
        console.log("You=" + urscore);
        yourscore.innerText = urscore;
        draw.innerText = "Paper beats Rock";
        randumnumber();

      }
  });

let scissor = document.querySelector(".img3");
scissor.addEventListener("click", () => {
    if (randnum == 3) {
      draw.innerText = "It was a draw";
      randumnumber();
 
    } else if (randnum == 1) {
      compscore++;
      console.log("Comp=" + compscore);
      comscore.innerText = compscore;
      draw.innerText = "Rock beats Scissor";
      randumnumber();
      
    } else if (randnum == 2) {
      urscore++;
      console.log("You=" + urscore);
      yourscore.innerText = urscore;
      draw.innerText = "Scissor beats Paper";      
      randumnumber();
    }
});

