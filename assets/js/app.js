var app = angular.module("myModule", []).controller("myController", function($scope){
	$scope.carts=[];
	$scope.products = [
		{
			productId : "parapluie1",
			productCategory: "parapluie",
			productImage: "assets/images/parapluie/1.jpg",
			productName: "Parapluie1",
			productPrice: 10.00,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "parapluie2",
			productCategory: "parapluie",
			productImage: "assets/images/parapluie/2.jpg",
			productName: "Parapluie2",
			productPrice: 19.99,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "parapluie3",
			productCategory: "parapluie",
			productImage: "assets/images/parapluie/3.jpg",
			productName: "Parapluie3",
			productPrice: 19.99,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "parapluie4",
			productCategory: "parapluie",
			productImage: "assets/images/parapluie/4.jpg",
			productName: "Parapluie4",
			productPrice: 19.99,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "parapluie5",
			productCategory: "parapluie",
			productImage: "assets/images/parapluie/5.jpg",
			productName: "Parapluie5",
			productPrice: 19.99,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "parapluie6",
			productCategory: "parapluie",
			productImage: "assets/images/parapluie/6.jpg",
			productName: "Parapluie6",
			productPrice: 19.99,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "parapluie7",
			productCategory: "parapluie",
			productImage: "assets/images/parapluie/7.jpg",
			productName: "Parapluie7",
			productPrice: 19.99,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "gant1",
			productCategory: "gants",
			productImage: "assets/images/gants/1.jpeg",
			productName: "Gant1",
			productPrice: 29.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "gant2",
			productCategory: "gants",
			productImage: "assets/images/gants/2.jpeg",
			productName: "Gant2",
			productPrice: 29.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "gant3",
			productCategory: "gants",
			productImage: "assets/images/gants/3.jpeg",
			productName: "Gant3",
			productPrice: 29.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "gant4",
			productCategory: "gants",
			productImage: "assets/images/gants/4.jpeg",
			productName: "Gant4",
			productPrice: 29.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "gant5",
			productCategory: "gants",
			productImage: "assets/images/gants/5.jpeg",
			productName: "Gant5",
			productPrice: 29.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "echarpe1",
			productCategory: "echarpes",
			productImage: "assets/images/echarpes/1.jpg",
			productName: "Echarpe1",
			productPrice: 9.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "echarpe2",
			productCategory: "echarpes",
			productImage: "assets/images/echarpes/2.jpg",
			productName: "Echarpe2",
			productPrice: 9.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "echarpe3",
			productCategory: "echarpes",
			productImage: "assets/images/echarpes/3.jpg",
			productName: "Echarpe3",
			productPrice: 9.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "echarpe4",
			productCategory: "echarpes",
			productImage: "assets/images/echarpes/4.jpg",
			productName: "Echarpe4",
			productPrice: 9.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "echarpe5",
			productCategory: "echarpes",
			productImage: "assets/images/echarpes/5.jpg",
			productName: "Echarpe5",
			productPrice: 9.95,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "blouson1",
			productCategory: "blousons",
			productImage: "assets/images/blousons/1.jpg",
			productName: "Blouson1",
			productPrice: 69.55,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "blouson2",
			productCategory: "blousons",
			productImage: "assets/images/blousons/2.jpg",
			productName: "Blouson2",
			productPrice: 69.55,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "blouson3",
			productCategory: "blousons",
			productImage: "assets/images/blousons/3.jpg",
			productName: "Blouson3",
			productPrice: 69.55,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "blouson4",
			productCategory: "blousons",
			productImage: "assets/images/blousons/4.jpg",
			productName: "Blouson4",
			productPrice: 69.55,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
		{
			productId : "blouson5",
			productCategory: "blousons",
			productImage: "assets/images/blousons/5.jpg",
			productName: "Blouson5",
			productPrice: 69.55,
			productDesc: "Lorem ipsum dolor sit amet consectetur\
			adipisicing elit deserunt voluptates at officia\
			ab dignissimos praesentium rerum voluptatem",
			productQt: 1
		},
	];

	// BOUTON AJOUTER DE LA VITRINE
	$scope.addCart = function(product){
		if(product){
			$scope.carts.push({
				productId: product.productId,
				productCategory: product.productCategory,
				productImage: product.productImage,
				productName: product.productName,
				productPrice: product.productPrice,
				productDesc: product.productDesc,
				productQt: product.productQt
			});
		}
	}
	// CALCUL DU TOTAL PANIER
	$scope.total = 0.00;
	$scope.setTotals = function(cart){
		if(cart){
			$scope.total += cart.productPrice;
		}
	}
	///////////////////// CALCUL DU PANIER //////////////////
	///////////////////// FONCTION DU PANIER //////////////////

	// BOUTON AJOUTER DU PANIER +
	$scope.addCartButton = function(product){
		product.productQt++;
		$scope.total += product.productPrice;
	}
	// BOUTON DIMINUER DU PANIER -
	// SI tant que la quantitée est supérieure à 1 je décrémente
	$scope.downCartButton = function(product){
		if(product.productQt > 1){
			product.productQt--;
			$scope.total -= product.productPrice;
			// Sinon si la quantitée est inférieure à 1 je la supprime du panier
		}else{
			$scope.remove_cart(product);
		}
	}
	// BOUTON POUR SUPPRIMER L'ARTICLE X
	$scope.removeCart = function(cart){
		if(cart){
			$scope.carts.splice($scope.carts.indexOf(cart), 1);
			($scope.total -= cart.productPrice * cart.productQt).toFixed(2);
		}
		if(!cart){
			$scope.total = 0;
		}
	}
	///////////////////// VERIFICATION FORMULAIRE //////////////////
	// Vérification du Nom et prenom minimum 3 caractères et maximum 30
	$scope.firstName_add = /^[\w\-]{3,30}$/;
	$scope.lastName_add = /^[\w\-]{3,30}$/;
	// Vérification de l'email
	$scope.mail_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
	// Vérification du sujet du message
	$scope.object_add = /^[\w\-\s]{3,60}$/;
	// Vérification du numéro de téléphone
	$scope.phone_add = /^0[1-9][0-9]{8}$/;
	// Initialisation de notre objet this pour la récupération des informations transmises
	let skull = this;
	// Initialisation d'un tableau vide par défaut
	skull.shows = [];
	// Fonctions d'ajout dans notre tableau
	skull.addShow = function() {
		skull.shows.push(skull.new);
		skull.new = {};
	};
});
