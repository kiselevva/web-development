const arithmeticOperation = ['+', '-', '*', '/']

function math(arithmeticOperation, num1, num2) {
    switch(arithmeticOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    let i = 0;
    return result = String(result);
}

function operationIdentify(stack, i) {
    let num1 = Number(stack[i + 1]);
    let num2 = Number(stack[i + 2]);
    math(stack[i], num1, num2);
    stack.splice(i, 3);
    stack.splice(i, 0, result);
    return(stack);
}

function calculate(stack, i, length) {
    while (i <= length) {
        if (arithmeticOperation.includes(stack[i])) {
            operationIdentify(stack, i)
            i = 0;
            continue;    
        }
        i = i + 1;
    }    
    return(stack);
}

function calc(string) {
    const length = stack.length;
    let stack = string.split('');
    let indexOfArr = 0;
    let val = ' ';
    while (indexOfArr <= length) {
        if (stack[indexOfArr] == val) {
            stack.splice(indexOfArr, 1);
        } else {
            indexOfArr = indexOfArr + 1;
        }
    }
    let i = 0;
    if (length > 2) {
        calculate(stack, i, length);
        return(stack[0]);
    }
}
