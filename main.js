leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(0,150);
    
    
    canvas = createCanvas(750,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#f0b556");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#d12e2e");
    text('Dakshesh',0,300);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}