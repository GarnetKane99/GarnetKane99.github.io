var backActive = false;
var activeGame = 0;
const game_name = ["thaum 2 (WIP)", "plants pillar protector I - 2023",
    "the game of life - 2022", "bug join - 2022", "pong - 2022",
    "thaum - 2021", "colosseum - 2021", "blockout - 2021",
    "procedural map generator - 2021", "data visualisation handbook - 2021",
    "perseverance - 2021", "band in a winter park - 2020", "coffee rush - 2020",
    "unreal engine 4 wave fighter - 2020", "tetris - 2019"];
const game_association = ["personal project", "youtube", "personal project", "personal project",
    "personal project", "university of technology, sydney - capstone 1", "university of technology, sydney - capstone 2",
    "university of technology, sydney - playmakers game jam", "personal project", "university of technology, sydney",
    "university of technology, sydney", "university of technology, sydney", "university of technology, sydney",
    "university of technology, sydney", "university of technology, sydney"];
const game_description = [
    "thaum 2 WIP", 
    "plants pillar protector WIP",
    "GOL WIP", 
    "A simple mobile/browser game similar to Bejewelled/Candy Crush/Jelly Splash. Featuring two game modes, bug-join is a hyper casual match-3 game", 
    "A recreation of PONG, featuring 1 player mode, 2 player mode and 3 levels of difficulty with a fully custom made AI",
    "Thaum is a classic roguelike made in Unity2D. Play as JOP the Wizard, stripped of your magic stones, slowly reclaim your power and escape the stronghold!",
    "Colosseum is a multiplayer, arena fighter made in Unity3D. Fight with up to 4 players featuring 3 game modes and 3 game types and be crowned the ultimate gladiator!",
    "Think Tetris meets Hole in the Wall meets Temple Run! Blockout is what you get when you combine an Endless Runner with puzzles!",
    "a 2D Map Generator created using a Random Walker Algorithm. This was created as a solution for 2D roguelike games to generate random and unique maps",
    "The Data Visualisation Handbook is a children's website inspired interactive book that features 6 different modes created in Java/Processing for the subject Interactive Media",
    "Perseverance is a visual story that follows the Perseverance and Opportunity Rover on Mars. This was an exploration of Unity's HDRP created for the subject 3D Animation",
    "Band in a Winter Park is an interactive musical experience set in a wintery park. This project was created for Introduction to Computer Graphics using ThreeJS",
    "Coffee Rush is a 2D Platformer that follows Player. He just wanted his morning coffee, but Ben the Bean Bandit has stolen all your coffee beans and has lead you onto an exciting chase! This project was created for Introduction to Computer Game Design",
    "Unreal Engine Wave Fighter is a wave based first person, local networked multiplayer shooter game! Face off against endless waves, upgrade your weapons and survive the hoard! This project was created for Advanced Games Programming",
    "Play a recreation of Tetris featuring a new game mode that spices up the original game, where every piece has a unique feature!"];
const game_contributions = [];

var flipped = false;

function InitializeTitles() {
    document.getElementById("gametitle").innerHTML = game_name[activeGame];
    document.getElementById("s1").style.backgroundColor = "#d9d9d9";
    document.getElementById("association").innerHTML = game_association[activeGame];
    document.getElementById("description").innerHTML = game_description[activeGame];
}

function updateTitlesLeft() {
    UpdateOldSelection();
    activeGame = activeGame == 0 ? game_name.length - 1 : activeGame - 1;
    UpdateCurrentTitle();
    UpdateNewSelection();
    flipCard();
}


function updateTitlesRight() {
    UpdateOldSelection();
    activeGame = activeGame == game_name.length - 1 ? 0 : activeGame + 1;
    UpdateCurrentTitle();
    UpdateNewSelection();
    flipCard();
}

function UpdateCurrentTitle(){
    document.getElementById("gametitle").innerHTML = game_name[activeGame];
    document.getElementById("association").innerHTML = game_association[activeGame];
    document.getElementById("description").innerHTML = game_description[activeGame];
}

function UpdateOldSelection() {
    var curSelection = "s" + (activeGame + 1).toString();
    document.getElementById(curSelection).style.backgroundColor = "#7e7e7e";
}

function UpdateNewSelection() {
    var newSelection = "s" + (activeGame + 1).toString();
    document.getElementById(newSelection).style.backgroundColor = "#d9d9d9";
}

function flipCard() {
    if (backActive) {
        document.getElementById("cardflip").style.transform = "rotateY(0deg)";
    }

    if (!flipped) {
        document.getElementById("cardflip").style.transform = "rotateX(360deg)"
        flipped = true;
    } else {
        document.getElementById("cardflip").style.transform = "rotateX(0deg)"
        flipped = false;
    }
    backActive = false;
}

function leftArrowBig() {
    document.getElementById("arrowleft").style.left = "39vw";
}

function leftArrowSmall() {
    document.getElementById("arrowleft").style.left = "40vw";
}

function rightArrowBig() {
    document.getElementById("arrowright").style.left = "57.5vw";
}

function rightArrowSmall() {
    document.getElementById("arrowright").style.left = "56.5vw";
}

function flipimg() {
    if (!backActive) {
        document.getElementById("cardflip").style.transform = "rotateY(180deg)";
        backActive = true;
        flipped = true;
    } else {
        document.getElementById("cardflip").style.transform = "rotateY(0deg)";

        backActive = false;
        flipped = false;
    }
}

function brightBorder(){
    document.getElementById("cardflip").style.borderColor = "#FFFFFF";
}

function dimBorder(){
    document.getElementById("cardflip").style.borderColor = "#545454";
}

function UpdateSelection(num){
    flipCard();
    UpdateOldSelection();
    activeGame = num;
    UpdateCurrentTitle();
    UpdateNewSelection();
}

function HoverSelection(num){
    if(num != activeGame){
        document.getElementById("s"+(num+1).toString()).style.backgroundColor = "#CBCBCB"
    }
}

function UnhoverSelection(num){
    if(num != activeGame){
        document.getElementById("s"+(num+1).toString()).style.backgroundColor = "#7e7e7e"
    }
}