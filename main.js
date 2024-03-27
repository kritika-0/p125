difference=0;
noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialized");

}



function gotPoses(results)
{
  if(results.length>0)
  {
    console.log(results);
    console.log("HI");
  }
  noseX=results[0].pose.nose.x;
  noseY=results[0].pose.nose.y;
  rightwristX=results[0].pose.rightWrist.x;
  leftwristX=results[0].pose.leftWrist.x;
  difference=rightwristX-leftwristX;
}

function draw()
{   textSize(difference);
    background("lightblue");
    fill("red");
    text("Hello",50,400);

    
}