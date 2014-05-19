(function PGATour() {
	
	var constants = {
   		'AD_CONTAINER': 'ad-container',
        'MESSAGE': '**************** FOUND BAD NODE: REMOVING!!! ********************'
	};

    var ads = document.getElementsByClassName(constants.AD_CONTAINER);
    if(ads) {
        var counter = ads.length;
        for(var i = 0; i < counter; i ++) {
            console.log(constants.MESSAGE);
            ads[0].remove();
        }
    }

})();