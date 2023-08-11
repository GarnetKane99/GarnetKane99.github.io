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
    "thaum started off as a university capstone project in 2021. the original game is a roguelike, dungeon crawler, inspired by hades, binding of isaac and dead cells. nearly 2 years from completing that game, 3 of the 5 original developers from that team came together and we collectively decided to remake this as a passion project, in hopes of releasing it on steam as an original game. we are in the process of designing the game, from original code, original assets and original ideas. in extension, development on this game is being regularly updated on my personal youtube channel, @GarnetKane",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""]
const game_contributions = [
    "project manager, lead developer, game design, pixel art, artificial intelligence, tools, procedural generation, weapons systems, media management/promotion <br><br> unity2d | c# (c sharp) | aseprite | github | youtube",
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
var back_game_title;
var back_game_contributions;

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
    back_game_title = document.getElementById("back-game-title");
    back_game_contributions = document.getElementById("back-description");
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

    UpdateCurrentTitle(promoimage);
    UpdateNewSelection();

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
    back_game_title.innerHTML = game_name[activeGame];
    back_game_contributions.innerHTML = game_contributions[activeGame];

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

// function flip() {
//     // if (backActive) {
//     //     document.getElementById("cardflip").style.transform = "rotateY(0deg)";
//     // }

//     if (!flipped) {
//         document.getElementById("cardflip").style.transform = "rotateX(360deg)"
//         flipped = true;
//     } else {
//         document.getElementById("cardflip").style.transform = "rotateX(0deg)"
//         flipped = false;
//     }
//     backActive = false;
// }

function flipCard() {
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