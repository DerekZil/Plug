blacklist = [
        //insert users ID follwed by comma. you can get it by doing /id @(username) and make sure you copy the quotations
];

API.addEventListener(API.USER_JOIN, checkBlacklist);

function checkBlacklist(user) {
        if (blacklist.indexOf(user.id) > -1 ) {
                API.sendChat("/me blacklisted user detected!");
                API.moderateBanUser(user.id, "Blacklisted User. banned for 30 days");
        }
}
