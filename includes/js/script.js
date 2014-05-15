/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$ (function() {

	$('#clickMe').click(function(e){
		e.preventDefault;
		$('#successAlert').slideDown();
	});

	$('a.pop').click(function(e){
		e.preventDefault();	
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();
});

/*$(function(){

	$('a.pop').popover();
});*/