paypal.minicart.render({
	strings: {
		button:'Pagar'
		,buttonAlt: 'Total'
		,subtotal: 'Total:'
		,empty: 'No hay productos en el carrito'
	}
	});

$('.producto').click(function(e){
	e.stopPropagation();
	paypal.minicart.cart.add({
		business:'bussinespersonal@gmail.com',
		item_name: $(this).attr("titulo"),
		amount: $(this).attr("precio"),
		currency_code: 'CLP',
	});
});
