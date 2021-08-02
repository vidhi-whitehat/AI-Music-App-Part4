song1 = "";
song2 = ""

function preload() {
    song1 = loadSound("music2.mp3");
    song2 = loadSound("music.mp3");
}

function draw()  {
    image(video, 0, 0, 600, 420);
}

function play_song1() {
    song1.play();
    song2.stop();
}

function play_song2() {
    song2.play();
    song1.stop();
}

function setup() {
    canvas = createCanvas(600, 420);    
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}