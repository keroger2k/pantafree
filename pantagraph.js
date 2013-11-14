(function PantaFree() {
	var EXPOSE_MASK_CONST = "exposeMask",
	PAYWALL_CONT = "paywall-code",
	exposeMask = document.getElementById(EXPOSE_MASK_CONST), 
	MAX_TRIES = 5;

	if(exposeMask) exposeMask.remove();

	findPayWall();

	function findPayWall() {
		var paywall = document.getElementById(PAYWALL_CONT);
		if(paywall) {
			console.log('Found annoying modal.  Removing.');
			paywall.remove();
			findPayWall = undefined;
		} else {
			MAX_TRIES--;
			console.log("Did not find paywall model.  Trying " + MAX_TRIES + " more times.");
			if(MAX_TRIES === 0) {
				console.log("Didn't find paywall; assuming not being prompted.");
				findPayWall = undefined;
			} else {
				setTimeout(findPayWall, 1000);
			}
		}
	}

})();