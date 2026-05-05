// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const select = document.getElementById("horn-select");
    const horn = document.querySelector("#expose > img");
    const volImg = document.querySelector("#volume-controls img");
    const volCntrl = document.querySelector("#volume-controls input");

    select.addEventListener("change", (event) => {
        handleSelect(event, horn);
    });

    volCntrl.addEventListener("change", (event) => {
        handleVolume(event, volImg);
    });
}

function handleSelect(event, horn) {
    const newImg = event.target.value;
    const newSrc = "assets/images/" + newImg + ".svg";
    horn.src = newSrc;
}

function handleVolume(event, image) {
    const val = event.target.value;
    let newSrc = "assets/icons/volume-level-";
    if (val == 0) {
        newSrc += "0.svg";
    } else if (val >= 1 && val < 33) {
        newSrc += "1.svg";
    } else if (val >= 33 && val < 67) {
        newSrc += "2.svg";
    } else {
        newSrc += "3.svg";
    }
    console.log(val);
    image.src = newSrc;
}