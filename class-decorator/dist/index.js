var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthService = /** @class */ (function () {
    function AuthService() {
        // Assume the server returns the access matrix of the current user as below
        this.accessMatrix = {
            PM: ['create', 'read', 'update'],
            LM: ['read'],
            CM: [],
        };
    }
    AuthService.prototype.getAccessMatrix = function (moduleCode) {
        return this.accessMatrix[moduleCode];
    };
    return AuthService;
}());
// For simplicity, an instance of AuthService is created as a global variable. Normally in Angular, it will be instanitiated in a provider and injected into the component
var authService = new AuthService();
var PayrollManagementModule = /** @class */ (function () {
    function PayrollManagementModule() {
    }
    PayrollManagementModule.prototype.queryWhatICanDo = function () {
        console.log("You can do " + (this.accessTypes.length ? this.accessTypes.join(', ') : 'nothing') + " in this module");
    };
    PayrollManagementModule = __decorate([
        AccessControl('PM')
    ], PayrollManagementModule);
    return PayrollManagementModule;
}());
var LeaveManagementModule = /** @class */ (function () {
    function LeaveManagementModule() {
    }
    LeaveManagementModule.prototype.queryWhatICanDo = function () {
        console.log("You can do " + (this.accessTypes.length ? this.accessTypes.join(', ') : 'nothing') + " in this module");
    };
    LeaveManagementModule = __decorate([
        AccessControl('LM')
    ], LeaveManagementModule);
    return LeaveManagementModule;
}());
var CandidateManagementModule = /** @class */ (function () {
    function CandidateManagementModule() {
    }
    CandidateManagementModule.prototype.queryWhatICanDo = function () {
        console.log("You can do " + (this.accessTypes.length ? this.accessTypes.join(', ') : 'nothing') + " in this module");
    };
    CandidateManagementModule = __decorate([
        AccessControl('CM')
    ], CandidateManagementModule);
    return CandidateManagementModule;
}());
function AccessControl(moduleCode) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.accessTypes = authService.getAccessMatrix(moduleCode);
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var payrollManagement = new PayrollManagementModule();
var leaveManagement = new LeaveManagementModule();
var candidateManagement = new CandidateManagementModule();
payrollManagement.queryWhatICanDo();
leaveManagement.queryWhatICanDo();
candidateManagement.queryWhatICanDo();
