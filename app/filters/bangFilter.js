"use strict";
angular.module("todo")
.filter("bang", function(){
				return function (input, nb){
					var nbExc="!";
					return input + nbExc.repeat(nb);
				}
})