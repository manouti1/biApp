import { AccountValue } from './AccountValue';

export class Account {
  public accountId: number;
  public parentAccountId: number;
  public name: string;
  public parentAccount: Account;
  public accountValue: AccountValue[];
}
