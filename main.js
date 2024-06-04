song = '';
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function preload() {
    song = loadSound('music.mp3');
}

function setup() {
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is ready!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;

        console.log("left wrist x is ", lwx, "& left wrist y is ", lwy);
        console.log(" right wrist x is ", rwx, "& right wrist y is ", rwy);
    }
}

function draw() {
    image(video, 0, 0, 600, 600);
}

function play() {
    song.play();
    song.setVolume(0.25);
    song.rate(1);
}