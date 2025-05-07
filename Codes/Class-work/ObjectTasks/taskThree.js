const prompt = require(`prompt-sync`)();
const bankAccount ={
    owner: "Alice",
    balance: 500,
    deposit: function(depositAmount) {
        do {
            depositAmount = parseFloat(prompt("Enter an amount to deposit: "));
            if (depositAmount < 0) {
                console.log("Invalid deposit amount... Enter valid deposit amount");
            } else {
                bankAccount.balance += depositAmount;
                result = `${bankAccount.balance} deposited successfully`; break;
            }} while (depositAmount < 0)
        return result;
    },
    withdrawal: function(withdrawalAmount) {
        do {
            withdrawalAmount = parseFloat(prompt("Enter an amount to withdraw: "));
            if (withdrawalAmount > bankAccount.balance) {
                console.log("Insufficient funds"); continue;
            } else {
                result = bankAccount.balance -= withdrawalAmount; break;

            }} while (withdrawalAmount > bankAccount.balance);
            return result;
    }}

    const main = ()=> {
        console.log("===== Bank Account =====")
        let choice;
        do {
            console.log("\n1. Deposit \n2. Withdraw \n3. Check balance \n4. Exit");
            choice = parseInt(prompt("Enter an Option(1-4): "))
            switch(choice) {
                case 1:
                    console.log(bankAccount.deposit()); break;
                case 2:
                    console.log(bankAccount.withdrawal()); break;
                case 3:
                    console.group(`Your present balance is ${bankAccount.balance}`); break;
                case 4:
                    return
            }} while(true);
    }
    //module.exports = {bankAccount.deposit, bankAccount.withdrawal}
    main()