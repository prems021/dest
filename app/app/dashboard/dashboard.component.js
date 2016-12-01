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
var router_1 = require('@angular/router');
var mock_1 = require('../services/mock');
var data_service_1 = require('../services/data.service');
require('rxjs/add/operator/toPromise');
var DashboardComponent = (function () {
    function DashboardComponent(router, Ds) {
        this.router = router;
        this.Ds = Ds;
        this.parsedata = [new mock_1.Parse(0, '', '', true, new Date(), '', '', '', '', '', 0, '', 0)];
        this.driverlist = [];
        this.progress = 0;
    }
    DashboardComponent.prototype.getdata = function () {
        var _this = this;
        this.Ds.getuserlist().then(function (parsedata) { return _this.parsedata = parsedata; });
    };
    DashboardComponent.prototype.getdriverdetails = function () {
        var _this = this;
        this.Ds.getdriverlist().then(function (driverlist) { return _this.driverlist = driverlist; });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getdata();
        setInterval(function () {
            _this.progress = (_this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
        this.getdriverdetails();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map