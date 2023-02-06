class Department {
  private readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.id} : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found");
  }

  set mostRecentReport(report: string) {
    if (!report) throw new Error("Please input value");
    this.addReports(report);
  }

  constructor(id: string, reports: string[]) {
    super(id, "Account");
    this.reports = reports;
    if (reports.length) {
      this.lastReport = reports[reports.length - 1];
    } else {
      this.lastReport = "";
    }
  }

  addEmployee(employee: string): boolean {
    if (employee === "Max") {
      return false;
    }

    this.employees.push(employee);

    return true;
  }

  addReports(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
}

const accounting = new AccountingDepartment("d1", ["Foul"]);
const it = new ITDepartment("d2", ["Max"]);

it.addEmployee("Foup");
it.addEmployee("Ewsdp");
it.describe();
it.printEmployeeInformation();
console.log(it);
