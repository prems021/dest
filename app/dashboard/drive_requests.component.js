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
var data_service_1 = require('../services/data.service');
require('rxjs/add/operator/toPromise');
var router_1 = require('@angular/router');
var DriverequestComponent = (function () {
    function DriverequestComponent(router, Ds) {
        this.router = router;
        this.Ds = Ds;
    }
    DriverequestComponent.prototype.getdata = function () {
        var _this = this;
        this.Ds.getonlinedriver().then(function (drivers) { return _this.driver = drivers; });
        console.log('data==', this.driver);
    };
    DriverequestComponent.prototype.ngOnInit = function () {
        this.getdata();
    };
    DriverequestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'drive-requests',
            templateUrl: 'drive_requests.component.html',
            styleUrls: ['usertable.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], DriverequestComponent);
    return DriverequestComponent;
}());
exports.DriverequestComponent = DriverequestComponent;
//# sourceMappingURL=drive_requests.component.js.map