var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Person = /** @class */ (function () {
    function Person() {
    }
    /**
     * Ask what the person is wearing, and you will get answered
     */
    Person.prototype.askWearing = function () {
        if (this.wearing) {
            console.log("I am wearing a " + this.wearing);
        }
        else {
            console.log("I am wearing nothing");
        }
    };
    __decorate([
        Wear,
        __metadata("design:type", String)
    ], Person.prototype, "wearing", void 0);
    return Person;
}());
function Wear(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return 'Jacket';
        }
    });
}
var zhiyue = new Person();
zhiyue.askWearing();
