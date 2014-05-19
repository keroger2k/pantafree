(function PeoriaJournalStar() {
	
	var constants = {
   		'GREG_BOX': 'gregbox-outer',
        'MESSAGE': '**************** FOUND BAD NODE: REMOVING!!! ********************'
	};

	document.body.addEventListener("DOMNodeInserted", function(evt) {
    	var node = evt.target;
    	if(node.id == constants.GREG_BOX || node.style["z-index"] >= 99998) {
    		console.log(constants.MESSAGE);
    		node.remove();
    	}
	 }, false);

})();