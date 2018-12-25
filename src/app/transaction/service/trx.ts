import {Account} from '../../account/service/account';
import { from } from 'rxjs';

export class Transaction{
    id: number;
    type: string;
    amount: number;
    amountSign: string;
    account: Account;
}