if ( localStorage.getItem('count') === null || parseInt(localStorage.getItem('count')) === 0 ){
	localStorage.setItem('count', '0');
	count = parseInt(localStorage.getItem('count'));
	var arr = [];
	var foo = "";
} else {
	var arr = JSON.parse(localStorage.getItem('foo'));
	var foo = localStorage.getItem('foo');
	count = parseInt(localStorage.getItem('count'));
	e1 = JSON.parse(localStorage.getItem('foo'));
	for (var x = 0; x < count; x++) {
		$('.tracker').append('<li>' + e1[x] + '</li>');
	}
}
$('#save').click(function(e){
	e.preventDefault();
  	a1 = $('#exerciseVal').val();
  	a2 = $('#weightVal').val();
  	a3 = $('#repVal').val();

	if ( a1 === "" || a2 === "" || a3 === "") {
		alert('Please enter a value in all fields');
	} else {

	c1 = '<span class="exName">' + a1 + '</span>' + ': ' + '<span class="reps">' + a3 + ' reps @ </span>' + '<span class="weight">' + a2 + '</span>';
	arr.push(c1);
	foo = JSON.stringify(arr);
	localStorage.setItem('foo', foo);
	$('#tracker').append('<li class="list-group-item">' + c1 + '</li>');
	count++;
	localStorage.setItem('count', count);
	}
});

$('#reset').click(function(e){
	e.preventDefault();
	if ( count >= 1 ) {
		if (confirm('Are you sure? This will clear all historical data.') === true) {
			localStorage.clear('count');
			count = localStorage.getItem('count');
			$('#tracker').children().remove();
		}
	} else {
		alert('There is currently no saved data.');
	}
});
