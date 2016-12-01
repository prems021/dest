"use strict";
var User = (function () {
    function User(user_name, password) {
        this.user_name = user_name;
        this.password = password;
    }
    return User;
}());
exports.User = User;
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
var Driver = (function () {
    function Driver(_id, driver_latitude, driver_longtitude, res_zipcode, res_state, res_city, res_address_2, res_address_1, license_expire, license_state, license_num, dob, ssn, legal_lastname, middle_name, legal_firstname, car_color, car_ofdoors, car_model, car_company, car_year, ref_code, city, user_id, __v, license_status, driver_mode) {
        this._id = _id;
        this.driver_latitude = driver_latitude;
        this.driver_longtitude = driver_longtitude;
        this.res_zipcode = res_zipcode;
        this.res_state = res_state;
        this.res_city = res_city;
        this.res_address_2 = res_address_2;
        this.res_address_1 = res_address_1;
        this.license_expire = license_expire;
        this.license_state = license_state;
        this.license_num = license_num;
        this.dob = dob;
        this.ssn = ssn;
        this.legal_lastname = legal_lastname;
        this.middle_name = middle_name;
        this.legal_firstname = legal_firstname;
        this.car_color = car_color;
        this.car_ofdoors = car_ofdoors;
        this.car_model = car_model;
        this.car_company = car_company;
        this.car_year = car_year;
        this.ref_code = ref_code;
        this.city = city;
        this.user_id = user_id;
        this.__v = __v;
        this.license_status = license_status;
        this.driver_mode = driver_mode;
    }
    return Driver;
}());
exports.Driver = Driver;
//# sourceMappingURL=mock.js.map