const closeButton = document.querySelector("#close-pop-up-button");
const openButton = document.querySelector("#open-pop-up-button");
const muteButton = document.querySelector("#mute-button")


const popUp = document.querySelector("#pop-up");

const bgVideo = document.querySelector("#bg-video");

function hidePopup() {
    popUp.classList.add('pop-up--hidden')
}


function showPopup() {
    popUp.classList.remove('pop-up--hidden')
}


function toggleSound() {
    if (bgVideo.muted === false) {
        bgVideo.muted = true;
        muteButton.textContent = "unmute";
    } else {
        bgVideo.muted = false;
        muteButton.textContent = "mute";
    };
}

closeButton.addEventListener("click", hidePopup);
openButton.addEventListener("click", showPopup);
muteButton.addEventListener("click", toggleSound)