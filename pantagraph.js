(function PantaFree() {

	var constants = {
   		'PAYWALL': 'paywall-code',
   		'EXPOSE': 'exposeMask',
   		'MESSAGE': '**************** FOUND BAD NODE: REMOVING!!! ********************'
	};


	document.body.addEventListener("DOMNodeInserted", function(evt) {
		var node = evt.target;
    	if(node.id == constants.EXPOSE || node.id == constants.PAYWALL) {
    		console.log(constants.MESSAGE);
    		node.remove();
    	}
	 }, false);

	var exposeMask = document.getElementById(constants.EXPOSE);
	var paywall = document.getElementById(constants.PAYWALL);

	if(exposeMask) {
   		console.log(constants.MESSAGE);
 		exposeMask.remove();
	}
	if(paywall) {
   		console.log(constants.MESSAGE);
 		paywall.remove();
	}

})();