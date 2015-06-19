if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var Home = (function () {
    function Home() {
        this.cache = {};
        this.selectedUser = null;
    }
    Home.prototype.getUser = function (u) {
    };
    Home.prototype.selectUser = function (user) {
        var _this = this;
        this.selectedUser = null;
        this.loading = true;
        this.getUser(user)
            .then(function (u) {
            console.log(u);
            _this.selectedUser = u;
            _this.loading = false;
        });
    };
    Home = __decorate([
        Component({}),
        View({})
    ], Home);
    return Home;
})();
exports.Home = Home;
