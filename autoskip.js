overPlayed = [
        //insert song ID's here followed by a comma. you can get it by using '/op' make sure you copy the quoations
];

function autoSkip() {
	if (overPlayed.indexOf(Models.room.data.media.id) > -1) {
		API.sendChat("/me auto skip activated! song overplayed");
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],true,true,1,5);", 250);
		setTimeout("new ModerationForceSkipService;", 500);
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],false,true,1,5);", 750);
	}
	if (Models.room.data.media.duration > 481) {
		API.sendChat("/me auto skip activated! song exceeds 8 minutes long");
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],true,true,1,5);", 250);
		setTimeout("new ModerationForceSkipService;", 500);
		setTimeout("new RoomPropsService(document.location.href.split('/')[3],false,true,1,5);", 750);
	}
}

function roomSkip() {
	var tv = Models.room.roomScore.negative + Models.room.roomScore.positive;
	var tvp = Models.room.roomScore.negative / tv;
	if(tvp >= 20 && tv >= 45) {
		new ModerationForceSkipService;
		API.sendChat("room voted to skip!");
	}
}
