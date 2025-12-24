// Account list

// Let's build upon a previous account object exercise. A bank account is still defined by:
// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. 
// These accounts are stored in an array. 
// Next, the program credits 1000 to each account and shows its description.

//*** S O L U T I O N ***//
class Bankaccount{
  constructor(owner, balance){
    this.owner = owner;
    this.balance = 0;
}
  credit(value){
    return this.balance += value
}
  description(){ return `owner:${this.owner},balance:${this.balance}`
}
}

const seanAccount = new Bankaccount('Sean')
const bradAccount = new 
Bankaccount('Brad')
const georgesAccount = new
Bankaccount('Georges')

let accounts = [seanAccount,bradAccount,georgesAccount]

accounts.forEach(account =>{
                 account.credit(1000)
                 console.log(account.description())})
