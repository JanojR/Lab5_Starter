// explore.js

window.addEventListener("DOMContentLoaded", init);
const synth = window.speechSynthesis;

function init() {
    const select = document.getElementById("voice-select");
    const input = document.getElementById("text-to-speak");
    const button = document.querySelector("button");
    const head = document.querySelector("img");

    let voices = [];

    voices = populateVoiceList(select);

    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
            voices = populateVoiceList(select);
        };
    }

    button.addEventListener("click", (event) => {
        handleSpeech(event, input, select, voices, head);
    });
}

function populateVoiceList(select) {
    select.innerHTML = "";
    let voices = synth.getVoices();
    for (const voice of voices) {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;

        if (voice.default) {
            option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
        select.appendChild(option);
    }
    return voices;
}

function handleSpeech(event, input, select, voices, head) {
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = select.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
        if (voice.name === selectedOption) {
            utterThis.voice = voice;
        }
    }
    //utterThis.pitch = pitch.value;
    //utterThis.rate = rate.value;

    utterThis.onstart = () => {
        head.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = () => {
        head.src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);
    input.blur();
}
