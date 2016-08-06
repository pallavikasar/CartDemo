var app = angular.module("myCart",[]);
app.controller("myCtrl",function($scope){
	
	$scope.itemlist = [
						{name:"Item 1",qty:0,price:200},
						{name:"Item 2",qty:0,price:300},
						{name:"Item 3",qty:0,price:400},
						{name:"Item 4",qty:0,price:100}
					];
		 

		
	$scope.cart_list = [];

	$scope.addtoCart = function(items)
	{
	
		if(items.qty == 0)
		{
			$scope.cart_list.push(items);
			items.qty++;
			console.log("item name  ===>>  "+items.name+"  price ==  "+items.price);
		}
		else
		{
			items.qty++;
			console.log("item name  ===>>  "+items.name+"  price ==  "+items.price);
		}
		
		
	}

	$scope.increaseQty = function(items)
	{
		
		if(items.qty == 0)
		{
			$scope.cart_list.push(items);
			items.qty++;
			console.log("increaseQty  ===>>  "+items.name+"  price ==  "+items.price);
		}
		else
		{
			items.qty++;
			console.log("increaseQty  ===>>  "+items.name+"  price ==  "+items.price);
		}
	}

	$scope.DecreaseQty = function(items)
	{
		items.qty--;
		if (items.qty <= 0) 
	    	{
	            items.qty = 0;
	     		var index = $scope.cart_list.indexOf(items);
	            if (index > -1) {
	 				$scope.cart_list.splice(index, 1);
	 				
	 	        }   
			}
		
	}

	$scope.totalCart = function(items)
	{
		var total = 0;
		$scope.cart_list.forEach(function(items){
			total+= items.price * items.qty;
		});
		$scope.total = total;
		console.log("total  ==  "+$scope.total);
	}
});