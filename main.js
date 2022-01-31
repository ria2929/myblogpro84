// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
        console.log("other key");

        numberkey();
		document.getElementById("d1").innerHTML="You pressed the number key";
        console.log("number key");

        aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed the alphabet key";
        console.log("alphabet key");

        arrowkey();
		document.getElementById("d1").innerHTML="You pressed the arrow key";
        console.log("arrow key");

        specialkey();
		document.getElementById("d1").innerHTML="You pressed the special key";
        console.log("special key");
	}

}

function aplhabetkey()
{
	//upload respective image with the message. 
    img_image="Alphabet key";
	add();

}
function numberkey()
{
	img_image="Untitled design";
	add();
}
function arrowkey()
{
    img_image="Sparkle";
	add();
}
function specialkey()
{
	img_image="Number key";
	add();
}
function otherkey()
{
	img_image="Other key";
	add();
}
	
