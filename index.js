/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {

    if (process.argv[2] === undefined ){
    return "No operation provided..." // if in line does not carry a command
    }

    if (process.argv[3] === undefined){
        return "No numbers provided..."; // if in line does not carry numbers
    }

    if (process.argv[2] !== `plus` && process.argv[2] !== `minus` ){
        return `Invalid operation: ${process.argv[2]}` ; // if in line does not carry the rigth command
    }



    let sum = 0
    
    
    if (process.argv[2] === `plus`){

        for (let i = 3; i < process.argv.length; i++ )

        sum += Number(process.argv[i])

    } else if (process.argv[2] === `minus` ){

        sum = Number(process.argv[3]);

        for (let i = 4; i < process.argv.length; i++ )

        // let sum = process.argv[2] 

        sum -= Number(process.argv[i])

    }
    
    return sum

}

// Don't change anything below this line.
module.exports = calculator;
