var playStatus = 0;
var audio;
var prevPlayStatusID;
var prevMedia;

function clickButton(media, playStatusID) {
    if (playStatus == 0) {
        play(media, playStatusID);
    } else {   
        pause(media, playStatusID);
    }  
}

function play(media, playStatusID) {
    audio = new Audio(media);
    audio.play();
    document.getElementById(playStatusID).innerHTML = "CLICK TO STOP";
    prevPlayStatusID = playStatusID;
    playStatus = 1;
}

function pause(media, playStatusID) {
    audio.pause();
    document.getElementById(playStatusID).innerHTML = "CLICK TO PLAY PREVIEW";
    playStatus = 0;
    if (prevPlayStatusID != playStatusID) {
        document.getElementById(prevPlayStatusID).innerHTML = "CLICK TO PLAY PREVIEW";
        clickButton(media, playStatusID);
    }

}