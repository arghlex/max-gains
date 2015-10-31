function getWord() {
  var a = new Array('abate','aberrant','abscond','accolade','acerbic','acumen','adulation','adulterate','aesthetic','aggrandize','alacrity','alchemy','amalgamate','ameliorate','amenable','anachronism','anomaly','approbation','archaic','arduous','ascetic','assuage','astringent','audacious','austere','avarice','aver','axiom','bolster','bombast','bombastic','bucolic','burgeon','cacophony','canon','canonical','capricious','castigation','catalyst','caustic','censure','chary','chicanery','cogent','complaisance','connoisseur','contentious','contrite','convention','convoluted','credulous','culpable','cynicism','dearth','decorum','demur','derision','desiccate','diatribe','didactic','dilettante','disabuse','discordant','discretion','disinterested','disparage','disparate','dissemble','divulge','dogmatic','ebullience','eccentric','eclectic','effrontery','elegy','eloquent','emollient','empirical','endemic','enervate','enigmatic','ennui','ephemeral','equivocate','erudite','esoteric','eulogy','evanescent','exacerbate','exculpate','exigent','exonerate','extemporaneous','facetious','fallacy','fawn','fervent','filibuster','flout','fortuitous','fulminate','furtive','garrulous','germane','glib','grandiloquence','gregarious','hackneyed','halcyon','harangue','hedonism','hegemony','heretical','hubris','hyperbole','iconoclast','idolatrous','imminent','immutable','impassive','impecunious','imperturbable','impetuous','implacable','impunity','inchoate','incipient','indifferent','inert','infelicitous','ingenuous','inimical','innocuous','insipid','intractable','intransigent','intrepid','inured','inveigle','irascible','laconic','laud','loquacious','lucid','luminous','magnanimity','malevolent','malleable','martial','maverick','mendacity','mercurial','meticulous','misanthrope','mitigate','mollify','morose','mundane','nebulous','neologism','neophyte','noxious','obdurate','obfuscate','obsequious','obstinate','obtuse','obviate','occlude','odious','onerous','opaque','opprobrium','oscillation','ostentatious','paean','parody','pedagogy','pedantic','penurious','penury','perennial','perfidy','perfunctory','pernicious','perspicacious','peruse','pervade','pervasive','phlegmatic','pine','pious','pirate','pith','pithy','placate','platitude','plethora','plummet','polemical','pragmatic','prattle','precipitate','precursor','predilection','preen','prescience','presumptuous','prevaricate','pristine','probity','proclivity','prodigal','prodigious','profligate','profuse','proliferate','prolific','propensity','prosaic','pungent','putrefy','quaff','qualm','querulous','query','quiescence','quixotic','quotidian','rancorous','rarefy','recalcitrant','recant','recondite','redoubtable','refulgent','refute','relegate','renege','repudiate','rescind','reticent','reverent','rhetoric','salubrious','sanction','satire','sedulous','shard','solicitous','solvent','soporific','sordid','sparse','specious','spendthrift','sporadic','spurious','squalid','squander','static','stoic','stupefy','stymie','subpoena','subtle','succinct','superfluous','supplant','surfeit','synthesis','tacit','tenacity','terse','tirade','torpid','torque','tortuous','tout','transient','trenchant','truculent','ubiquitous','unfeigned','untenable','urbane','vacillate','variegated','veracity','vexation','vigilant','vilify','virulent','viscous','vituperate','volatile','voracious','waver','zealous');
  return a[parseInt(Math.random()* a.length)];
};

// Splitting up the word to an array to be able to loop through to check each letter and then display it individually

localStorage['localNewWord'] = getWord();


var newWord = localStorage['localNewWord'];
var newWordArray =  newWord.split("");
var guessLetterHistory = new Array();
// Variable for letter guess
var guessLetter;
var numberOfGuesses = 14;
$('.image span').text(numberOfGuesses);
var wordLength = newWordArray.length;
var count = guessLetterHistory.length;
var blork = "";

$('div.content').hide();


// Generating the list items to show the word length
$('a.generate').click(function(event){
	event.preventDefault();
	for (var x = 0; x < wordLength; x++) {
		$('section.word ul').append('<li class="item' + x + '"></li>');
	}
	$(this).hide();
	$('div.content').show();
});


var checkWordFn = function(){
	var wordCurrent = $('section.word li').text();
	var g = $('input[type="text"]');
	
	if ( g.val().length > 1 || g.val().length < 1 ) {
		alert("Please enter 1 letter")
	} else {
		guessLetter = g.val();
		guessLetterHistory[count] = g.val();
		$('section.letters ul').append('<li>' + guessLetterHistory[count] + '</li>');
		count++;		
		g.val('');
		numberOfGuesses = numberOfGuesses - 1;
		$('.image span').text(numberOfGuesses);
		$('div.frame').removeClass('welcome').addClass('start');
		if( count > 0 && $('div.frame').hasClass('pic'+ (count - 1) )) {
			$('div.frame').removeClass('pic' + (count - 1)).addClass('pic' + count);
		} else {
			$('div.frame').addClass('pic' + count);
		}
		
		if (numberOfGuesses == 0) {
			alert('Game Over');
			window.location.reload();
		}
	}
	
	$.each(newWordArray, function(index, value){ 
    	if (value == guessLetter) {
      		var e = "li.item" + index;
      		$(e).html(guessLetter); 
    	}
	});
	$('section.guess input').focus();
};

$("section.guess form").bind("keypress", function(e) {
  if (e.keyCode == 13) {
  e.preventDefault();
  checkWordFn();
  }
});

// Generating letter guess
$('a.enter').click(function(event){
	event.preventDefault();
	checkWordFn();
});


$('section.guess input').focus(function() {
	var wordCurrent = $('section.word li').text();
	if (wordCurrent == newWord) {
		$('div.main').hide();
		$('header').append('<div class="yay"><h1>Well done</h1><p>The word was</p><h2>"' + newWord + '"</h2></div>');
	}
});
