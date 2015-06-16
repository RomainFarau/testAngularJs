"use strict";
angular.module("todo")
.filter("username", function(){
	return function (input){
		if(!input) return "John Doe";
		return input.name || input.email || "John Doe"
	}
})