const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display')
const rDisplay = document.querySelector('.result')
const clear = document.getElementById("clear")
const del = document.getElementById("delete")
const cbtn = document.getElementById("equal")
let displayText = '';

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        console.log('Im clicked', button.textContent);
        displayText += button.textContent
        display.textContent = displayText
    })
});

clear.addEventListener('click', ()=> {
    displayText = ""
    display.textContent = ""
})

del.addEventListener('click', ()=> {
    const arr = displayText.split('')
    arr.pop()
    console.log(arr);
    displayText = arr.join('')
    display.textContent = displayText
})

cbtn.addEventListener('click', ()=> {
    const arr = displayText.split('');
    let lastResult = 0;
    let ops = []
    let nums = []
    let uptext = displayText
    arr.forEach(element => {
        if(element === "*" || element === "/" || element === "-" || element === "+"){
            ops.push(element)
            const newArr = uptext.split(element)
            const newNum = newArr[0]
            nums.push(newNum)
            uptext = newArr[1]
            console.log(uptext);
            if (uptext === undefined) {
                rDisplay.textContent = "Syntax error";
                return;
            }
        }
    });
    newNums = [...nums, uptext];
    let count = 0;
    for (let i = 0; i < newNums.length-1; i++) {
        if(count === 0) lastResult = calculate(ops[i], newNums[i], newNums[i+1])
        else lastResult = calculate(ops[i], lastResult, newNums[i+1])
        count++
    }
    console.log(lastResult);
    rDisplay.textContent = lastResult;
})

const calculate = (op, num1, num2)=> {
    switch (op) {
        case "*":
            return Number(num1) * Number(num2)
        case "+":
            return Number(num1) + Number(num2)
        case "-":
            return Number(num1) - Number(num2)
        case "/":
            return Number(num1) / Number(num2)
    
        default:
            break;
    }
}

const checkSigns = (text)=> {

}
