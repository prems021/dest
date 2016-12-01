"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/login/login.component');
var home_component_1 = require('./components/home/home.component');
var auth_guard_1 = require('./dashboard/auth.guard');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var usertable_component_1 = require('./dashboard/usertable.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'usertable', component: usertable_component_1.UsertableComponent, canActivate: [auth_guard_1.AuthGuard] }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map