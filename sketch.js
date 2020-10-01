//Create variables here

var dogImg,happyDogImg,foodS,foodStock,dog

function preload()
{

 
  //load images here
  
  dogImg = loadImage("images/Dog.png");

  happyDogImg = loadImage("images/happydog.png");

}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();

  dog = createSprite(250,250,20,20);

  dog.scale = 0.2;

  dog.addImage("normal",dogImg)

  foodStock=database.ref('Food')
    foodStock.on("value",readStock);

}


function draw() {  

  background(46, 139, 87);


  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogImg);

  }


  drawSprites();
  //add styles here

  fill(255,255,255);

 

  text("Food Remaining:"+ foodS,150,350);


}


function readStock(data){

  foodS=data.val();

}

function writeStock(x){


    if(x<=0){

      x=0;

    }else{

      x=x-1;

    }


    database.ref('/').update({

      Food:x

    })


}
