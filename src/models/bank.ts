import  BankAccount  from "./bank-account"

let bankId = 0;
class Bank{
    bankAccountsId: number[]
    bankId:number

    constructor(){
        this.bankAccountsId = [];
        this.bankId = ++bankId;
    }

    static create(){
        const bank = new Bank();
        return bank;
    }

    getId(){
        return this.bankId;
    }

    createAccount(amount:number){
        const bankAccount = new BankAccount(amount);
        this.bankAccountsId.push(bankAccount.getId())
        return bankAccount;
    }
}

export default Bank;