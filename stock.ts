#!/usr/bin/env node

import inquirer from "inquirer";

const stocks: any = {
    AAPL: 27,
    GOOGL: 345,
    AMZN: 190,
    MSFT: 478,
    TSLA: 523
};

function getRandomValue(): number{
    return Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000;
}

async function promptInvestment(){
    const answers = await inquirer.prompt({
        type: "input", name: "investment", message: "Enter the amount you want to invest: ",
        validate: (input) => {
            const num = parseFloat(input);
            return !isNaN(num) && num >= 0 ? true : 'Please enter a valid positive number';
        }
    });
    const conversion = await inquirer.prompt({
        name: "options", type: "list", message: "Select an option!", choices: Object.keys(stocks),
    });


    const userInvestment = parseFloat(answers.investment);
    const randomValue = getRandomValue();

    console.log(`Random value generated: ${randomValue}`);
    let updatedInvestment  = userInvestment;

    if(randomValue > 50000){
        console.log("Random value is greater than 50,000. Adding to your investment. ");
        switch(conversion.options){
            case "AAPL":
                updatedInvestment += stocks.AAPL * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "GOOGL":
                updatedInvestment += stocks.GOOGL * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "AMZN":
                updatedInvestment += stocks.AMZN * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "MSFT":
                updatedInvestment += stocks.MSFT * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "TSLA":
                updatedInvestment += stocks.TSLA * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            default:
                console.log("Invalid option");
                break;
        }
    }
    else {
        console.log("Random value is less than 50,000. Subtracting from your investment. ");
        switch(conversion.options){
            case "AAPL":
                updatedInvestment -= stocks.AAPL * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "GOOGL":
                updatedInvestment -= stocks.GOOGL * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "AMZN":
                updatedInvestment -= stocks.AMZN * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "MSFT":
                updatedInvestment -= stocks.MSFT * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            case "TSLA":
                updatedInvestment -= stocks.TSLA * randomValue;
                console.log(`Updated investment: ${updatedInvestment}`);
                break;
            default:
                console.log("Invalid option");
                break;
        }
    }
    
}



promptInvestment();








// let name = await inquirer.prompt({
//     name: "message", type: "number", message: "Enter an amount you want to invest"
// });

// const randomNumber = Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000;
// console.log(randomNumber);

// if(randomNumber < 30000){

// }
