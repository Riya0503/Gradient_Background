var css = document.querySelector("h3")
var color_1 = document.querySelector(".color1");
var color_2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function getGradientColor(){
	body.style.background="linear-gradient(to right,"
	 + color_1.value 
	 + "," 
	 + color_2.value 
	 + ")";
	 css.textContent = body.style.background + ";" ;
}

function randomColor(){
	return Math.floor(Math.random()*256);
}

function genrateRGB(){
	var r = {
		r: randomColor(),
		g: randomColor(),
		b: randomColor()
      }
    return r;
}


function genrateRandomColor(){
	var c1 = genrateRGB();
	var c2 = genrateRGB();
	c1.rgb = "rgb("+c1.r+","+c1.g+","+c1.b+")";
	c2.rgb = "rgb("+c2.r+","+c2.g+","+c2.b+")";
	 
	body.style.background="linear-gradient(to right,"
	 + c1.rgb 
	 + "," 
	 + c2.rgb 
	 + ")";
	css.textContent = body.style.background + ";";	
	
	color_1.value = rgbToHex(c1.r,c1.g,c1.b);
	color_2.value = rgbToHex(c2.r,c2.g,c2.b); 	
}

function componentToHex(rgb){
	var hex = Number(rgb).toString(16);
	if(hex.length === 1){
		hex="0"+hex;
	}
	return hex;
}

function rgbToHex(r,g,b){
	return "#" + componentToHex(r) 
	+ componentToHex(g)
	+ componentToHex(b);
}

color_1.addEventListener("input" , getGradientColor);
color_2.addEventListener("input" , getGradientColor);
color_1.addEventListener("input" , genrateRandomColor);
color_2.addEventListener("input" , genrateRandomColor);
button.addEventListener("click" , genrateRandomColor);
