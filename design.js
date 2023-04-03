var backActive = false;
var activeGame = 0;
const game_name = [
    "thaum 2 (WIP)", "plants pillar protector I - 2023",
    "the game of life - 2022", "bug join - 2022", "pong - 2022",
    "thaum - 2021", "colosseum - 2021", "blockout - 2021",
    "procedural map generator - 2021", "data visualisation handbook - 2021",
    "perseverance - 2021", "band in a winter park - 2020", "coffee rush - 2020",
    "unreal engine 4 wave fighter - 2020", "tetris - 2019"];
const game_association = [
    "personal project", "youtube", "personal project", "personal project",
    "personal project", "university of technology, sydney - capstone 1", "university of technology, sydney - capstone 2",
    "university of technology, sydney - playmakers game jam", "personal project", "university of technology, sydney",
    "university of technology, sydney", "university of technology, sydney", "university of technology, sydney",
    "university of technology, sydney", "university of technology, sydney"];
const game_description = [
    "thaum 2 is a working title. this project is a culmination of what i learnt at university in my degree and is a passion project for myself and the two other guys working on this. we originally made 'thaum' as part of our capstone project while at university, and we always planned on making the game something bigger. as of dec 2022, we started development on this game - which includes all original code, design, gameplay and stories. i am also personally posting regular development videos of this game on my youtube channel, @GarnetKane",
    "plants pillar protector I is a game i made over the course of 12 hours as part of a challenge for my youtube channel. it is a simple tower defence game, taking inspiration from similar games, but with my own twist. im currently redeveloping this game for an upcoming tutorial/follow along series for my youtube channel",
    "the game of life takes a spin on john conway's the game of life which explores cell automation. this project was done for fun - i wanted to see if i could do it. once completed, i expanded on it and added my own twist to it to make it more interactive and immersive",
    "bug join is a hyper-casual match-3 game, similar to candy crush and bejewelled. i created this to explore mobile game development and expand some art and design skills",
    "a recreation of pong, this game features 1 player mode, 2 player mode and 3 levels of difficulty with a fully custom made AI",
    "thaum is a classic roguelike made in Unity2D. this was my first of 2 capstone projects at university. play as jop the wizard, stripped of your magic stones, you awaken in a stronghold where the wardens have stolen your powers. now, you must venture through multiple levels and bosses, ultimately to reclaim your powers to escape the stronghold",
    "colosseum is a multiplayer, arena fighter made in Unity3D. this was the seconds of my 2 capstone projects at university. fight with up to 4 players featuring 3 game modes and 3 game types and be crowned the ultimate gladiator in this multiplayer networked party game",
    "think 'Tetris' meets 'Hole in the Wall' meets 'Temple Run' - Blockout is what you get when you combine an Endless Runner with puzzles. this game was made over 36 hours as part of the playmakers august game jam",
    "a 2D Map Generator created using a Random Walker Algorithm. This was created as a solution for 2D roguelike games to generate random and unique maps",
    "The Data Visualisation Handbook is a children's website inspired interactive book that features 6 different modes created in Java/Processing for the subject Interactive Media",
    "Perseverance is a visual story that follows the Perseverance and Opportunity Rover on Mars. This was an exploration of Unity's HDRP created for the subject 3D Animation",
    "Band in a Winter Park is an interactive musical experience set in a wintery park. This project was created for Introduction to Computer Graphics using ThreeJS",
    "Coffee Rush is a 2D Platformer that follows Player. He just wanted his morning coffee, but Ben the Bean Bandit has stolen all your coffee beans and has lead you onto an exciting chase! This project was created for Introduction to Computer Game Design",
    "Unreal Engine Wave Fighter is a wave based first person, local networked multiplayer shooter game! Face off against endless waves, upgrade your weapons and survive the hoard! This project was created for Advanced Games Programming",
    "Play a recreation of Tetris featuring a new game mode that spices up the original game, where every piece has a unique feature!"];
const game_contributions = [
    "project manager, lead developer, game design, pixel art, artificial intelligence, tools, procedural generation, weapons systems",
    "game design, pixel art, lead developer, procedural map generation, economy system, ui",
    "game design, ui, pixel art, lead developer",
    "game design, level generation, pixel art, ui, tool system, leveling system",
    "game design, lead developer, artificial intelligence, ai difficulties, ui",
    "game design, project manager, abilities system, pixel art, ai programming, dynamic difficulty, enemy generation",
    "project manager, lead developer, ui, game design, level design, world design, 3d modelling, procedural generation, networked multiplayer integration, game mode logic, game type logic, ux",
    "game design, lead developer, procedural block generation, endless runner logic, user interaction/input",
    "lead developer/designer, random walker algorithm integration and creation, ui",
    "lead developer, lead designer, programmer, ui, ux",
    "project manager, scene setup, terrain setup, 3d modelling and character rigging, logic flow, lead programmer and designer, storyboarding",
    "3d modelling, terrain generation/texturing, user interaction, camera setup",
    "game design, game documentation, level 1 creation, player mechanics, cutscene setup",
    "ai functionality, local multiplayer setup, procedural content generation, ui/ux/polish",
    "game design, game logic, animation and pixel art, ui/ux, tetris variation"];

var banner;
var jake_title;
var gamer_title;
var circleselection;
var arrowsandlogo;
var leftarrow;
var rightarrow;
var tempimage;
var promoimage;
var front_game_title;
var front_game_association;
var front_game_information;
var cardcontainer

var flipped = false;

function InitializeTitles() {
    banner = document.getElementById("banner");
    jake_title = document.getElementById("jaketitle");
    gamer_title = document.getElementById("gamertitle");
    circleselection = document.getElementById("selection");
    arrowsandlogo = document.getElementById("arrowsandlogo");
    tempimage = document.getElementById("tempimage");
    promoimage = document.getElementById("promo");
    leftarrow = document.getElementById("arrowleft");
    rightarrow = document.getElementById("arrowright");
    front_game_title = document.getElementById("front-game-title");
    front_game_association = document.getElementById("front-game-association");
    front_game_information = document.getElementById("front-game-information");
    cardcontainer = document.getElementById("card-container");
    const temp_image = document.getElementById("tempimage");
    const promo_image = document.getElementById("promo");


    rightarrow.addEventListener("click", function () {
        UpdateCurrentTitle(tempimage);
        updateTitlesRight();
        temp_image.classList.add("animate-temp-right");
        promo_image.classList.add("animate-origin-right")
        rightarrow.disabled = true;

        setTimeout(() => {
            temp_image.classList.remove("animate-temp-right");
            promo_image.classList.remove("animate-origin-right");
            rightarrow.disabled = false;
        }, 800);
    })

    leftarrow.addEventListener("click", function () {
        UpdateCurrentTitle(tempimage);
        updateTitlesLeft();
        temp_image.classList.add("animate-temp-left");
        promo_image.classList.add("animate-origin-left");
        leftarrow.disabled = true;

        setTimeout(() => {
            temp_image.classList.remove("animate-temp-left");
            promo_image.classList.remove("animate-origin-left");
            leftarrow.disabled = false;
        }, 800);
    })

    front_game_title.innerHTML = game_name[activeGame];
    front_game_association.innerHTML = game_association[activeGame];
    front_game_information.innerHTML = game_description[activeGame];

    fadeElements();
}

function fadeElements() {
    banner.style.opacity = 1;

    setTimeout(() => {
        jake_title.style.opacity = 1;
    }, 800);

    setTimeout(() => {
        gamer_title.style.opacity = 1;
    }, 1600);

    setTimeout(() => {
        circleselection.style.opacity = 1;
        arrowsandlogo.style.opacity = 1;
        cardcontainer.style.opacity = 1
    }, 2400);
}

function updateTitlesLeft() {
    UpdateOldSelection();
    activeGame = activeGame == 0 ? game_name.length - 1 : activeGame - 1;
    UpdateCurrentTitle(promoimage);
    UpdateNewSelection();
    // flipCard();
}


function updateTitlesRight() {
    UpdateOldSelection();
    activeGame = activeGame == game_name.length - 1 ? 0 : activeGame + 1;
    UpdateCurrentTitle(promoimage);
    UpdateNewSelection();


    // flipCard();
}

function UpdateCurrentTitle(imgToUpdate) {
    front_game_title.innerHTML = game_name[activeGame];
    front_game_association.innerHTML = game_association[activeGame];
    front_game_information.innerHTML = game_description[activeGame];

    switch (activeGame) {
        case 0:
            imgToUpdate.src = "Promo/ThaumTwoPromo.png";
            break;
        case 1:
            imgToUpdate.src = "Promo/PPPPromo.png";
            break;
        case 2:
            imgToUpdate.src = "Promo/GOLPromo.png";
            break;
        case 3:
            imgToUpdate.src = "Promo/BugJoinPromo.png";
            break;
        case 4:
            imgToUpdate.src = "Promo/PongPromo.png"
            break;
        case 5:
            imgToUpdate.src = "Promo/ThaumPromo.png"
            break;
        case 6:
            imgToUpdate.src = "Promo/ColosseumPromo.png"
            break;
        case 7:
            imgToUpdate.src = "Promo/BlockoutPromo.png"
            break;
        case 8:
            imgToUpdate.src = "Promo/MapGenPromo.png"
            break;
        case 9:
            imgToUpdate.src = "Promo/DHVPromo.png"
            break;
        case 10:
            imgToUpdate.src = "Promo/PerseverancePromo.png"
            break;
        case 11:
            imgToUpdate.src = "Promo/BIWPPromo.png"
            break;
        case 12:
            imgToUpdate.src = "Promo/CoffeeRushPromo.png"
            break;
        case 13:
            imgToUpdate.src = "Promo/WFPromo.png"
            break;
        case 14:
            imgToUpdate.src = "Promo/TetrisPromo.png"
            break;
    }
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

function brightBorder() {
    document.getElementById("cardflip").style.borderColor = "#FFFFFF";
}

function dimBorder() {
    document.getElementById("cardflip").style.borderColor = "#545454";
}

function UpdateSelection(num) {
    // flipCard();
    UpdateOldSelection();
    activeGame = num;
    UpdateCurrentTitle(promoimage);
    UpdateNewSelection();
}

function HoverSelection(num) {
    if (num != activeGame) {
        document.getElementById("s" + (num + 1).toString()).style.backgroundColor = "#CBCBCB"
    }
}

function UnhoverSelection(num) {
    if (num != activeGame) {
        document.getElementById("s" + (num + 1).toString()).style.backgroundColor = "#7e7e7e"
    }
}