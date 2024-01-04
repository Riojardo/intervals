function create_doc() {}

/*
function write() {
    let times = 0;
    let counter = times
    let word = "wilson-2"
    if (times <word.length ){
        times ++
    }
  for (i=0;i<=counter;i++)
  console.log(word.charAt(i))
  
}

setInterval(write, 1000);


const welcome = document.getElementById('welcome');
const welcText = 'Welcome!';

for (let i = 0; i < welcText.length; i++) {
    setTimeout(() => {
        welcome.innerText += welcText[i];
    }, i * 100);
}

let times = 0;
let word = prompt("write your shit please");

function write() {
  if (times < word.length) {
    console.log(word.charAt(times));
    times++;
  } 
}
 setInterval(write, 1000);

 clearInterval(intervalID);


let times = 1;
 function count_seconde () {
    console.log(times)
    if (times%60 == 0)
    console.log ( times/60 + " minute had passed")
    times++
 }
 setInterval(count_seconde, 1000);
 /(points/times)
*/
function attribute_class() {
  let cells = document.querySelectorAll("td");
  let counter = 1;

  cells.forEach((cell) => {
    cell.classList.add(counter);
    cell.style.width = "200px";
    cell.style.height = "200px";
    counter++;
  });
}

attribute_class();

let points = 0;
let mole = document.createElement("button");
mole.type = "button";
mole.style.width = "100%";
mole.style.height = "100%";

function create_score() {
    let score = document.createElement("h1");
    score.innerText = "votre score est de : " + points;
    document.body.appendChild(score);
  }
mole.addEventListener("click", function () {
    let score = document.querySelector("h1")
    points += 1;
  console.log(points);
  document
  .getElementsByClassName(Math.floor(Math.random() * 16))[0]
  .appendChild(mole);
  mole.style.backgroundColor = "#" +  Math.floor(Math.random()*16777215).toString(16);
  score.innerText = "votre score est de : " + points;
});

create_score ()

console.log(points)
function mole_play() {
  document
    .getElementsByClassName(Math.floor(Math.random() * 16))[0]
    .appendChild(mole);
}

setInterval(mole_play, 16666);

