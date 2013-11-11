var exposeMask = document.getElementById('exposeMask');

if(exposeMask) exposeMask.remove();

findPayWall();

function findPayWall() {
	var paywall = document.getElementById('paywall-code');
	if(paywall) {
		paywall.remove();
		findPayWall = undefined;
	} else {
		setTimeout(findPayWall, 100);
	}
}