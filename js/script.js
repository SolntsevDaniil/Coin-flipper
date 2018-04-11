class CoinFlipper {
	// Constructor init
	constructor(coin) {
		this.coin = coin;
	};

	// Random position - eagle or tail
	statement() { return (Math.floor(Math.random() * 2) === 0); };

	// Rerender of the coin
	flip() {
		this.coin.src = '';

		// Saving the scope
		let self = this;

		// Image disappear for a moment so as to put a new image
		setTimeout(function() {
			if (self.statement()) {
				self.coin.src = 'css/img/tail.jpeg';
			} else {
				self.coin.src = 'css/img/eagle.jpeg';
			};
		}, 700);
	};
};

// Itit of the vars
const coin = document.querySelector('.img'),
	  coinflipper = new CoinFlipper(coin),
	  button = document.querySelector('.button');

// Adding handler
button.addEventListener('click', function() { coinflipper.flip(); });