/*
	script file for the website 
*/

$(document).ready(function()
{
	let myDiv = $('.prices');
	let mySpan = $('#myTotal');

	let total = 0;

	for(i = 0; i < myDiv.length; i++)
	{
		total += parseInt(myDiv[i].innerHTML);
	}
	
	mySpan.text(total);
});