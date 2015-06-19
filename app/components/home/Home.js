if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="../../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var Home = (function () {
    function Home() {
        this.users = [];
        this.cache = {};
        this.selectedUser = null;
    }
    Home.prototype.addUser = function (currentUser) {
        this.users.push(currentUser);
    };
    Home.prototype.removeUser = function (user) {
        if (this.selectedUser && this.selectedUser.login === user) {
            this.selectedUser = null;
        }
        this.users.splice(this.users.indexOf(user), 1);
    };
    Home.prototype.getUser = function (u) {
        var _this = this;
        if (this.cache[u]) {
            return Promise.resolve(this.cache[u]);
        }
        else {
            return fetch("https://api.github.com/users/" + u)
                .then(function (r) {
                return r.json();
            })
                .then(function (user) {
                _this.cache[u] = user;
                return user;
            });
        }
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            templateUrl: './components/home/home.html?v=<%= VERSION %>',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        })
    ], Home);
    return Home;
})();
exports.Home = Home;
