/*
	script file for the website 
*/

//update cart costs 
function UpdateTotalCost()
{
	
	let myDiv = $('.prices');
	let mySpan = $('#myTotal');
	let myTotal = $("#TaxedTotal");
	let quantities = $(".quantity");	
	let total = 0;
	let tax = 0.13;
	
	//add up subtotal values when the quantities are updated
	for(i = 0; i < myDiv.length; i++)
	{
		//error checking
		if (quantities[i].value < 0) { quantities[i].value = 0; }
		total += parseInt(myDiv[i].innerHTML) * parseInt(quantities[i].value);
	}
	
	//resettup prices here
	let taxedTotal = Math.floor((total * (1 + tax)) * 100) / 100;
	myTotal.text(taxedTotal);
	mySpan.text(total);
}

//make a purchase
function MakePurchase()
{
	alert("You have successfully made a purchase. Have a good day!!");
}

//load relevant details	on load		
$(document).ready(function()
{
	UpdateTotalCost();
});