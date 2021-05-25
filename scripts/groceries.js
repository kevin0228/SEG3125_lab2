// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 10.00
	},
	{
		name: "apple",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 1.50
	},
	{
		name: "milk",
		lactose_intolerant: true,
		nut_allergy: false,
		organic: false,
		price: 3.00
	},
	{
		name: "cake",
		lactose_intolerant: true,
		nut_allergy: true,
		organic: false,
		price: 5.00
	},
	{
		name: "beef",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 8.50
	},
	{
		name: "peanut",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: true,
		price: 1.28
	},
	{
		name: "potato",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 2.50
	},
	{
		name: "lamb",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 10.50
	},
	{
		name: "Cashew nuts",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: false,
		price: 5.23
	},
	{
		name: "onions",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 1.23
	},
	{
		name: "tomato",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 0.23
	},
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerant") && (prods[i].lactose_intolerant == false)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerant(organic)") && (prods[i].lactose_intolerant == false)&&(prods[i].organic==true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy") && (prods[i].nut_allergy == false)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy(organic)") && (prods[i].nut_allergy == false)&&(prods[i].organic==true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false))){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false)&&(prods[i].organic==true))){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].price+" "+products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}