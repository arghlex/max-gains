/* Author:Alex Mellor

*/

	if ( localStorage.getItem('count') == null || parseInt(localStorage.getItem('count')) == 0 ){
		localStorage.setItem('count', '0');
		count = parseInt(localStorage.getItem('count'));
		var derp = new Array();
		var epsilon = "";
	} else {
		var derp = JSON.parse(localStorage.getItem('epsilon'));
		var epsilon = localStorage.getItem('epsilon');
		count = parseInt(localStorage.getItem('count'));
		e1 = JSON.parse(localStorage.getItem('epsilon'));
		for (var x = 0; x < count; x++) {
			$('.tracker').append('<li>' + e1[x] + '</li>');
		}
	}
	$('a.save').click(function(e){
		e.preventDefault();
    	a1 = $('.exerciseVal').val();
    	a2 = $('.weightVal').val();
    	a3 = $('.repVal').val();
		
		if ( a1 === "" || a2 === "" || a3 === "") {
			alert('Please enter a value in all fields');
		} else {
		
		c1 = '<span class="exName">' + a1 + '</span>' + ': ' + '<span class="reps">' + a3 + ' reps @ </span>' + '<span class="weight">' + a2 + '</span>';
		derp.push(c1);
		epsilon = JSON.stringify(derp); 
		localStorage.setItem('epsilon', epsilon);
		$('.tracker').append('<li>' + c1 + '</li>');
		count++;
		localStorage.setItem('count', count);
		}
	});
	
	$('a.reset').click(function(e){
		e.preventDefault();
		if ( count >= 1 ) {
			if (confirm('Are you sure? This will clear all historical data.') === true) {
				localStorage.clear('count');
				count = localStorage.getItem('count');
				$('.tracker').children().remove();
			}
		} else {
			alert('There is currently no saved data.');
		}
	});
	





