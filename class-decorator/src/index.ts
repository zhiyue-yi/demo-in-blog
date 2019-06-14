class AuthService {
  // Assume the server returns the access matrix of the current user as below
  private accessMatrix = {
    PM: ['create', 'read', 'update'],
    LM: ['read'],
    CM: [],
  };

  public getAccessMatrix(moduleCode: string) {
    return this.accessMatrix[moduleCode];
  }
}

// For simplicity, an instance of AuthService is created as a global variable. Normally in Angular, it will be instanitiated in a provider and injected into the component
const authService = new AuthService();

@AccessControl('PM')
class PayrollManagementModule {
  public accessTypes;

  public queryWhatICanDo() {
    console.log(`You can do ${this.accessTypes.length ? this.accessTypes.join(', ') : 'nothing'} in this module`);
  }
}

@AccessControl('LM')
class LeaveManagementModule {
  public accessTypes;

  public queryWhatICanDo() {
    console.log(`You can do ${this.accessTypes.length ? this.accessTypes.join(', ') : 'nothing'} in this module`);
  }
}

@AccessControl('CM')
class CandidateManagementModule {
  public accessTypes;

  public queryWhatICanDo() {
    console.log(`You can do ${this.accessTypes.length ? this.accessTypes.join(', ') : 'nothing'} in this module`);
  }
}

function AccessControl(moduleCode: string) {
  return function<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      accessTypes = authService.getAccessMatrix(moduleCode);
    };
  };
}

const payrollManagement = new PayrollManagementModule();
const leaveManagement = new LeaveManagementModule();
const candidateManagement = new CandidateManagementModule();

payrollManagement.queryWhatICanDo();
leaveManagement.queryWhatICanDo();
candidateManagement.queryWhatICanDo();
