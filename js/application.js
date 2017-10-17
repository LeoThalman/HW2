$(document).ready(function(){
	var itemArr = new Array();
	$('button').on('click',function() {
	$('#errCode').remove();	
	var name = $('#iName').val();
	var amount = parseInt($('#iAmount').val());
	var price = parseFloat($('#iPrice').val());
	var errCode="";
	
	if (name.length < 1 || name.length >12){
	  errCode= $('<p id="errCode">Invalid name. Enter a name with less than 13 characters</p>');
	  errCode.insertAfter(this);
	}
	else if (isNaN(amount)){
	  errCode= $('<p id="errCode">Invalid amount. please enter an amount</p>');
	  errCode.insertAfter(this);
	}
	else if (amount <1 || amount>100){
	  errCode= $('<p id="errCode">Invalid amount. please enter a whole number between 1-100</p>');
	  errCode.insertAfter(this);
	}
	else if (isNaN(price)){
	  errCode= $('<p id="errCode">Invalid price. please enter a price</p>');
	  errCode.insertAfter(this);
	}
	else if ( price <.01 || price > 10000.00){
	  errCode= $('<p id="errCode">Invalid price. please enter a price between .01-1000.00</p>');
	  errCode.insertAfter(this);
	}
	else{
		var total = amount * price;
		var itemArr.push({iName : name, iAmount : amount, iPrice: price, iTotal : total});
		itemArr.push(item);
		var iRow = $('	<tr><td>'+item.name+'</td><td>'+item.+'</td><td>'++'</td><td>'++'</td></tr>');
		
		
		);
	}
	});
});