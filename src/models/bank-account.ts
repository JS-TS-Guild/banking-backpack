let bankAccountId=0;
class BankAccount{
    bankAccountId:number;
    amount:number
    constructor(amount:number){
        this.bankAccountId = ++bankAccountId;
        this.amount = amount;
    }

    getId(){
        return this.bankAccountId;
    }
}

export default BankAccount;