

//changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var myOtherBox = document.getElementById('myOtherBox');

//probeersel met easing of whatever//
//var defaultTweenSettings = {
//  duration: 1000,
//  delay: 0,
//  endDelay: 0,
//  easing: 'easeOutElastic(1, .5)',
 // round: 0
//};
//https://github.com/juliangarnier/anime/blob/master/lib/anime.js

function spin(){
	myOtherBox.object3D.rotation.x +=(rotationSpeed);
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps
 
 