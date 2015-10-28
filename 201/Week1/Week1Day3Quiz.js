/* 
 all JS code in the JS file.
A. In JS, write 3 functions A(x,y), B(m), C(n), where x, y, m, n are
parameters, but pick more descriptive function and param names.
B. Write JS that automatically runs when HTML loads; the “auto-run” code must call A
with two params, and A must call B and C with one param each.
C. In each JS function, use console.log() to print the function’s name and its parameter
name(s) and value(s).
*/


function rectangleWidth(width) {
	return width * 2;
	console.log("My function name is rectangleWidth,"+ 
			" my parameter is width.  The values of the parameter is " + 
			width);
}
function rectangleHeigth(heigth) {
	return heigth * 2;
	console.log("My function name is rectangleHeigth,"+ 
			" my parameter is heigth.  The values of the parameters is " + 
			heigth);
}
function rectangleArea(width, heigth) {
	var doubleWidth = rectangleWidth(width);
	var doubleHeigth =rectangleHeigth(heigth);
	var myArea= doubleWidth *  doubleHeigth;
	console.log("My function name is rectangleArea,"+ 
			" my parameters are width and heigth.  The values of those parameters are" + 
			width + " and " + heigth);
	return myArea;
}


var myNewrectangle = rectangleArea(2, 10);
console.log("The area of the rectangle is: " + myNewrectangle);

