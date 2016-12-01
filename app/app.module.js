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
var forms_1 = require('@angular/forms');
var forms_2 = require("@angular/forms");
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var login_component_1 = require('./components/login/login.component');
var routes_1 = require('./routes');
var home_component_1 = require('./components/home/home.component');
var auth_guard_1 = require('./dashboard/auth.guard');
var auth_service_1 = require('./services/auth.service');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var data_service_1 = require('./services/data.service');
var header_component_1 = require('./header/header.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var usertable_component_1 = require('./dashboard/usertable.component');
var drive_requests_component_1 = require('./dashboard/drive_requests.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule, forms_2.ReactiveFormsModule,
                forms_1.FormsModule,
                routes_1.routing, routes_1.routing, material_1.MaterialModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent, usertable_component_1.UsertableComponent, drive_requests_component_1.DriverequestComponent, login_component_1.LoginComponent, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent, dashboard_component_1.DashboardComponent
            ],
            providers: [auth_guard_1.AuthGuard, auth_service_1.AuthenticationService, data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map