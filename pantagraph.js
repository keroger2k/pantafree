(function PantaFree() {
	var exposeMask = document.getElementById('exposeMask');

	if(exposeMask) exposeMask.remove();

	findPayWall();

	function findPayWall() {
		var paywall = document.getElementById('paywall-code');
		if(paywall) {
			if(console) {
				console.log('Found annoying modal.  Removing.');
			}
			paywall.remove();
			findPayWall = undefined;
		} else {
			if(console) {
				console.log("Did not find paywall model.  Trying again...");
			}
			setTimeout(findPayWall, 100);
		}
	}
})();