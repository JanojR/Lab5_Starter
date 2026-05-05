// expose.js

const jsConfetti = new JSConfetti();


window.addEventListener('DOMContentLoaded', init);

function init() {
    const select = document.getElementById("horn-select");
    const horn = document.querySelector("#expose > img");
    const volImg = document.querySelector("#volume-controls img");
    const volCntrl = document.querySelector("#volume-controls input");
    const audio = document.querySelector(".hidden");
    const playButton = document.querySelector("button");

    select.addEventListener("change", (event) => {
        handleSelect(event, horn, audio);
    });

    volCntrl.addEventListener("input", (event) => {
        handleVolume(event, volImg, audio);
    });

    playButton.addEventListener("click", () => {
        if (select.value == "select") {
            return;
        }
        audio.currentTime = 0;
        audio.play();
        if (select.value == "party-horn") {
            jsConfetti.addConfetti();
        }
    });
}

function handleSelect(event, horn, audio) {
    const val = event.target.value;
    const newImg = "assets/images/" + val + ".svg";
    const newAudio = "assets/audio/" + val + ".mp3";
    horn.src = newImg;
    audio.src = newAudio;
}

function handleVolume(event, image, audio) {
    const val = event.target.value;
    let newSrc = "assets/icons/volume-level-";
    let newAud = val / 100;
    //console.log(newAud);
    if (val == 0) {
        newSrc += "0.svg";
    } else if (val >= 1 && val < 33) {
        newSrc += "1.svg";
    } else if (val >= 33 && val < 67) {
        newSrc += "2.svg";
    } else {
        newSrc += "3.svg";
    }
    //console.log(val);
    image.src = newSrc;
    audio.volume = newAud;
}