
export interface Employee {
    id: number;
    name: string;
    basicSalary: number;
    deductions: number;
    netPayout: number;
    loanDetails: LoanDetails;
}

export interface LoanDetails {
    amount: number,
    interestRate: number;
    emi: number;
}