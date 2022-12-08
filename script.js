const closeButton = document.querySelector("#close-pop-up-button");
const openButton = document.querySelector("#open-pop-up-button");
const muteButton = document.querySelector("#mute-button")
const popUp = document.querySelector("#pop-up");
const bgVideo = document.querySelector("#bg-video");


const angelaMuteButton = document.querySelector("#angela-mute-button");
const userMuteButton = document.querySelector("#user-mute-button");
const cheunMuteButton = document.querySelector("#cheun-mute-button");
const angelaSong = document.querySelector("#angela-song");
const userSong = document.querySelector("#user-song");
const cheunSong = document.querySelector("#cheun-song");


function hidePopup() {
    popUp.classList.add('pop-up--hidden')
}


function togglePopup() {
    popUp.classList.toggle('pop-up--hidden')
}
function toggleSound(song, button) {
    if (song.muted === false) {
        song.muted = true;
        button.textContent = "unmute";
    } else {
        song.muted = false;
        button.textContent = "mute";
    };

    console.log(song, button)
}
closeButton.addEventListener("click", hidePopup);
openButton.addEventListener("click", togglePopup);

if (muteButton) {
    muteButton.addEventListener("click", () => {
        toggleSound(bgVideo, muteButton)
    });
}

if (angelaMuteButton && angelaSong && userMuteButton && userSong && cheunMuteButton && cheunSong) {
    angelaMuteButton.addEventListener("click", () => {
        toggleSound(angelaSong, angelaMuteButton)
    });

    userMuteButton.addEventListener("click", () => {
        toggleSound(userSong, userMuteButton)
    });

    cheunMuteButton.addEventListener("click", () => {
        toggleSound(cheunSong, cheunMuteButton)
    });
}



