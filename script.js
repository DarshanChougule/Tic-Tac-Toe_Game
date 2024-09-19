console.log("Welcome to Tic Tac Toe")
let music = new Audio("song.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = 'X'
let win = false

const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, -45]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector(".span").innerText = boxtext[e[0]].innerText + " WON"
            gameover.play()
            document.getElementById("gif").style.width = "200px";
            win = true
            document.getElementById("line").style.transform = `translateX(${e[3]}vw) translateY(${e[4]}vw) rotate(${e[5]}deg)`;
            document.getElementById("line").style.width = "21vw";
            document.getElementById("span").style.fontSize = "40px";

        }
    })
}

let boxes = document.getElementsByClassName("block");
// console.log(boxes)
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!win) {
                document.getElementsByClassName("span")[0].innerText = "Turn for " + turn;
            }

        }
    })
})
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
        turn = "X"
        win = false
        document.getElementsByClassName("span")[0].innerText = "Turn of " + turn;
        document.getElementById("line").style.width = "0vw";
        document.getElementById("gif").style.width = "0px";
        document.getElementById("span").style.fontSize = "larger";
    })
})