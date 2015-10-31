/* Author:Alex Mellor

*/

//if (derp.length)
//var derp = new Array();	
//var omega = JSON.parse(localStorage.getItem('epsilon'));
	
	
	
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
	
	

	
	//var epsilon = JSON.stringify(derp) 
	//localStorage.setItem('weeurgh', epsilon);
	//var omega = JSON.parse(localStorage.getItem('weeurgh'));

	
	
	
	$('p.save').click(function(){
    	
    	a1 = $('.exerciseVal').val();
    	a2 = $('.weightVal').val();
    	a3 = $('.repVal').val();
    	
    	/*
		localStorage.setItem('exercise', a1);
		localStorage.setItem('weight', a2);
		localStorage.setItem('reps', a3);
		
		b1 = localStorage.getItem('exercise');
		b2 = localStorage.getItem('weight');
		b3 = localStorage.getItem('reps');
		*/
		
		c1 = a1 + ': ' + a3 + ' reps @ ' + a2;
		//localStorage.setItem('string', c1);
		
		//d1 = localStorage.getItem('string');
		
		
		derp.push(c1);
		epsilon = JSON.stringify(derp); 
		localStorage.setItem('epsilon', epsilon);
		
				
		$('.tracker').append('<li>' + c1 + '</li>');
		
		
		count++;
		localStorage.setItem('count', count);
		
	});
	
	$('p.reset').click(function(){
		localStorage.clear('count');
		count = localStorage.getItem('count');
		$('.tracker').children().remove();
	});
	





