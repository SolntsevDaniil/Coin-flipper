(function(){

	var doc = document,
		button = doc.querySelector('.button'),
		coin = doc.querySelector('.img'),
		alt = coin.alt,
		statement;

	function coinFlip() { return (Math.floor(Math.random() * 2) === 0); };

	function handler() {
		coin.src = '';

		setTimeout(function() {
			if (statement) {
				coin.src = 'css/img/tail.jpeg';
				alt = 'Tail';
			} else {
				coin.src = 'css/img/eagle.jpeg';
				alt = 'Eagle';
			}
		}, 250);
	};

	button.addEventListener('click', function() {
		statement = coinFlip();
		handler();
	});

}());