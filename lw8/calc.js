function math(arithmeticOperation, num1, num2) {
    switch(arithmeticOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return null;
    }
    return result;
}

function calculate(number) {
    console.log(number);
    let arrayCalc = [];
    let numb1 = null;
    let numb2 = null;
    let numCurr = null;
    const arithmeticOperation = ['+', '-', '*', '/'];
    for (let i = 0; i < number.length; i++) {
        if (arithmeticOperation.includes(number[i])) {
            arrayCalc.push(number[i]);
            continue;
        }
        numCurr = parseInt(number[i]);
        if (numCurr >= 1 && numCurr <= 9) {
            if (numb1 == null) {
                numb1 = numCurr;
            } else {
                numb2 = numCurr;
                numb1 = math(arrayCalc.pop(), numb1, numb2);
            }
        }
    }
    if (!numb2 || !numb1) {
        console.log('Wrong example');
    }  else {
        console.log(numb1);
    }
}


