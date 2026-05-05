// explore.js

window.addEventListener("DOMContentLoaded", init);
const synth = window.speechSynthesis;

function init() {
    const select = document.getElementById("voice-select");
    populateVoiceList(select);

    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
            populateVoiceList(select);
        };
    }
}

function populateVoiceList(select) {
    select.innerHTML = "";
    const voices = synth.getVoices();
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
}
