
export interface Employee {
    id: number;
    name: string;
    basicSalary: number;
    deductions: number;
    netPayout: number;
    loanDetails?: LoanDetails;
    month: string;
}

export interface LoanDetails {
    id: number,
    amount: number,
    interestRate: number;
    emi: number;
    employeeId: number
}