const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var response;
var jsonn;
var data;

var bgimg;

function preload() {
    // create getBackgroundImg( ) here
    time();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg != null)
    {
     background(backgroundImg)
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}

async function time()
{
  response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  jsonn=await response.json()
  data=jsonn.datetime
  time=data.slice(11,13)

  if(time>=04 && time<=06)
  {
      bgimg="sunrise1.png"
  }
  else if(time>=06 && time<=08)
  {
   bgimg="sunrise2.png"
  }
  else if(time>=08 && time<=11)
  {
    bgimg="sunrise3.png"
  }
  else if(time>=11 && time<=13)
  {
    bgimg="sunrise4.png"
  }
  else if(time>=13 && time<=15)
  {
    bgimg="sunrise5.png"
  }
  else if(time>=15 && time<=17)
  {
    bgimg="sunrise6.png"
  }
  else if(time>=17 && time<=18)
  {
    bgimg="sunset7.png"
  }
  else if(time>=18 && time<=20)
  {
    bgimg="sunset8.png"
  }
  else if(time>=20 && time<=23)
  {
    bgimg="sunset9.png"
  }
  else if(time>=23 && time<=0)
  {
    bgimg="sunset10.png"
  }
  else if(time>=00 && time<=03)
  {
    bgimg="sunset11.png"
  }
  else
  {
    bgimg="sunset12.png"
  }
  backgroundImg=loadImage(bgimg)
}
