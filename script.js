$(document).ready(function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var number = +$('#query').val();

		// make sure section is empty before clearing
		if (!$('section').is(':empty')) $('section').html('');

		// make sure span is empty before clearing message
		if (!$('span').is(':empty')) $('span').html('');
 
		// check if number is integer
		if (number % 1 === 0) {

		// check if number is positive
		if (number > 0) {

		// check if number less than 101
		if (number < 101) {
			appendFizzBuzz(number);

		} else {
			$('span').append('</p>Input cannot be a number greater than 100</p>');
		}

		    
		} else {
			$('span').append('</p>Input cannot be a negative value</p>');
		}


		} else {
			$('span').append('</p>Input must be an integer only</p>');
		}

	});
});


 
 	var appendFizzBuzz = function (n) {
		for (var i = 1; i <= n; i++) {

		// Check if 'i' is divisible by both 3 and 5
		if (i % 15 === 0) {
			$('section').append('fizz buzz');

		// Check if 'i' is divisible by 3
		} else if (i % 3 === 0) {
			$('section').append('fizz');

		// Check if 'i' is divisible by 5
		} else if (i % 5 === 0) {
			$('section').append('buzz');

		// If none of the above, print 'i'
		} else {
			$('section').append(i);
		}

		// Add a line break after each iteration of the for loop
		$('section').append('<br />');
	}
};