const input=require("readline-sync");
console.log("************Welcome to ATM*************");
console.log("Please enter your Card");
let balance=10000;
// var lang='English';

let language=input.question("Enter the language Hindi or English: ");
if (language=='Hindi'){
    console.log('Hindi is not available');
}
else if(language=='English'){
    let pin=input.question('Enter your pin: ');
    if (pin=='3456'){
        console.log('Your pin is correct');
        console.log('1.CASH WITHDRWAL\n2.BALANCE INQUERY')
        let option1=input.question('Enter Option Anyone, 1 or 2: ');
        if (option1=='1'){
            console.log('CASH WITHDRWAL');
            console.log('1.SAVING\n2.CURRENT\n3.CREDIT')
            let option2=input.question('Enter your option 1 or 2 or 3: ');
            if (option2=='1'){
                console.log('Your Saving',balance,'balance');
            }
            else if(option2=='2'){
                console.log('CURRENT');
                let transaction=input.question('Enter your Amount; ')
                if (transaction<=balance){
                    console.log(`Your transaction is being processed\n Now in your account ${balance-transaction} left\nPlease Wait`)
                }
                else if(transaction>balance){
                    console.log('In Your Account No Extra transaction')
                }
            }
            else if(option2=='3'){
                console.log('CREDIT');
                let transaction=input.question('Enter your Amount; ')
                if (transaction<=balance){
                    console.log('Your transaction is being processed\nPlease Wait')
                }
                else if(transaction>balance){
                    console.log('In Your Account No Extra transaction')
                }
            }

        }
        else if(option1=='2'){
            console.log('BALANCE INQUERY')
            console.log('You have',balance,'balance')
        }
    }
    else{
        console.log('pin is not correct')
        console.log('atm card blocked')
    }
}


