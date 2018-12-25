import { Customer } from '../../cust/service/cust';

export class Account{
    accountNumber: number;
    openDate: Date;
    balance: number;
    customer: Customer;
}