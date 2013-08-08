var ohmahgawded = false;
var ohmahgawdedWait = 600000;
var ohmahgawdedPassed = 0;
var ohmahgawdedTimer = null;
var omgMsg = [
	" #1: Song skipped!", 
];
		

API.on(API.CHAT, omgsticles);

function omgsticles(data) {
	msg = data.message.toLowerCase();
        if (ohmahgawded == false && msg.indexOf('omg') > -1 || msg.indexOf('omfg') > -1) {
        	ohmahgawded = true;
		ohmahgawdedTimer = setInterval("checkOhmahgawded();", 1000);
        	API.sendChat("OMG alternative" + omgMsg[Math.floor(Math.random() * omgMsg.length)]);
	}
}

function checkOhmahgawded() {
	if (ohmahgawdedPassed >= ohmahgawdedWait) {
		clearInterval(ohmahgawdedTimer);
		ohmahgawded = false;
		ohmahgawdedPassed = 0;
	}
	else {
		ohmahgawdedPassed = ohmahgawdedPassed + 1000;
	}
}
