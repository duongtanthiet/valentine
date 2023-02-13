function openCard() {
	document.getElementById('envelope').className = 'opened';
	setTimeout(function(){document.getElementById('card').className = 'opened';}, 1500);
}