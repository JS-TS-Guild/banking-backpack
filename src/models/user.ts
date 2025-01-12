import  BankAccount  from "./bank-account";

class User{
    firstName:string;
    lastName:string;
    bankAccountsId:number[]

    constructor(name:string,accountsId:number[]){
        const nameArray = name.split(' ');
        this.firstName = nameArray[0];
        this.lastName = nameArray[1];
        this.bankAccountsId = [];
        if(accountsId.length > 0){
            accountsId.forEach(accountId => {
                this.bankAccountsId.push(accountId);
            });
        } 
    }

    static create(name:string,accountsId:number[]){
        const user = new User(name,accountsId);
        return user;
    }
}

export default User;