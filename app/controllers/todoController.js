"use strict";
angular.module("todo")
.controller('TodoController', function(){
	var todoCtrl=this;


	todoCtrl.tasks = [
	{description: "un"},
	{description: "deux"},
	];

	todoCtrl.addTask = function (desc) {
	todoCtrl.tasks.push({
		description: desc
	})
	}
	/*Mieux d'utiliser une fonction.*/
	todoCtrl.changeRedClass = function(){
		todoCtrl.isred = !todoCtrl.isred;
	}
	todoCtrl.ordreTri=false;
	todoCtrl.changeOrdreTri = function(){
		todoCtrl.ordreTri  = !todoCtrl.ordreTri;
	}

	
})