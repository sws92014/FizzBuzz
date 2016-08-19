$(document).ready(function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var number = $('#query').val();
		number = parseInt(number);

		// make sure section is empty before clearing
		if (!$('section').is(':empty')) {
			$('section').html('');
		}

		// make sure span is empty before clearing message
		if (!$('#error').is(':empty')) {
			$('#error').html('');
		}

		// check if number is an integer
		if (number % 1 === 0) {
		} else {
			$('#error').append('<p>Input must be an integer only</p>');
		}

		// check if number is positive
		if (number <= 0) {
			$('#error').append('<p>Input cannot be a negative value</p>');
		}

		// check if number is less than 101
		if (number > 100) {
			$('#error').append('<p>Input cannot be a number greater than 100</p>');
		} else {
			appendFizzBuzz(number);
		}

	});
});

function appendFizzBuzz(n) {
	for (var i = 1; i <= n; i++) {
		var current = "";

		// Check if 'i' is divisible by 3
		if (i % 3 === 0) {
			current += "fizz";
			
		// Check if 'i' is divisible by 5
		} 
		if (i % 5 === 0) {
			current += "buzz";
		}

		// Add a line break after each iteration of the for loop
		$('section').append((current || i)+'<br />');
	}
};