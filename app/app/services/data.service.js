"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getuserlist = function () {
        return this.http.get('https://destiny.mod.bz/listusers')
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log(data); return data; });
    };
    DataService.prototype.getdriverlist = function () {
        return this.http.get('https://destiny.mod.bz/driverlist')
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log(data); return data; });
    };
    DataService.prototype.getdrivehistory = function () {
        return this.http.get('https://destiny.mod.bz/getridehistory')
            .toPromise()
            .then(function (res) { return res.json(); }, this.handleError)
            .then(function (data) { console.log(data); return data; });
    };
    DataService.prototype.getdriver = function (user_id) {
        return this.getdriverlist()
            .then(function (drivers) { return drivers.find(function (driver) { return driver.user_id === user_id; }); });
    };
    DataService.prototype.getonlinedrivers = function () {
        return this.getdriverlist()
            .then(function (drivers) { return drivers.filter(function (drivers) { return drivers.driver_mode === true; }); });
        //.then(drivers=> drivers.find(driver=>driver.driver_mode === false));
    };
    DataService.prototype.getonlinedriver = function () {
        return this.getdriverlist().then(function (dri) { return dri.find(function (cri) { return cri.license_status === true; }); });
    };
    DataService.prototype.getonlinedrivertrue = function () {
        return this.getdriverlist().then(function (mri) { return mri.filter(function (mr) { return mr.license_status === true && mr.driver_mode === true; }); });
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map