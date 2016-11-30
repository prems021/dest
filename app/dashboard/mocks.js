"use strict";
var Parse = (function () {
    function Parse(__v, _id, about, account_status, date_created, email, fav_music, firstname, hometown, lastname, phonenumber, profile_pic, verify_code) {
        this.__v = __v;
        this._id = _id;
        this.about = about;
        this.account_status = account_status;
        this.date_created = date_created;
        this.email = email;
        this.fav_music = fav_music;
        this.firstname = firstname;
        this.hometown = hometown;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.profile_pic = profile_pic;
        this.verify_code = verify_code;
    }
    return Parse;
}());
exports.Parse = Parse;
var Parsea = (function () {
    function Parsea(news) {
        this.news = news;
    }
    return Parsea;
}());
exports.Parsea = Parsea;
//# sourceMappingURL=mocks.js.map