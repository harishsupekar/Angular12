export class Employee
{
    empId: number;
    deptId: number;
    empName: string;
    empCode: string;
    genderId:number;
    empDesignation: string;
    empMgr: number;
    empSalary: number;
    empContactNo: number;
    empEmailId: string;
    empIsActive: boolean;
    
    constructor(EmpId: number, DeptId: number,EmpName: string, EmpCode: string, GenderId: number, EmpDesignation: string, EmpMgr:number, EmpSalary: number, EmpContactNo: number, EmpEmailId: string, EmpIsActive: boolean)
    {
        this.empId = EmpId;
        this.deptId = DeptId;
        this.empName = EmpName;
        this.empCode = EmpCode;
        this.genderId = GenderId;
        this.empDesignation = EmpDesignation;
        this.empMgr = EmpMgr;
        this.empSalary = EmpSalary;
        this.empContactNo = EmpContactNo;
        this.empEmailId = EmpEmailId;
        this.empIsActive = EmpIsActive;
    }
}