let base = document.querySelector(".calBody")
let display = document.createElement("div")
display.classList.add("showNums")
base.append(display)

let firstNum = ""
let secondNum = ""
let operation = -1

// Numbers
for (let i = 0; i < 10; i++) {
    let newNum =  createButton()
    newNum.textContent = i
    base.append(newNum)
}
// Operations
    let plus = createButton()
    plus.textContent = "+"
    base.append(plus)

    let minus = createButton()
    minus.textContent = "-"
    base.append(minus)

    let muli = createButton()
    muli.textContent = "*"
    base.append(muli)

    let div = createButton()
    div.textContent = "/"
    base.append(div)

// equal and clear button
    let equal = createButton()
    equal.textContent = "="
    base.append(equal)

    let clear = createButton()
    clear.textContent = "clear"
    base.append(clear)




function createButton(){
    let newNum = document.createElement("button")
    newNum.addEventListener("click", valueButton)
    return newNum
}

function valueButton(e){
    let value = e.target.innerHTML
    let displayText = display.textContent

    if (value == "clear"){
        firstNum = ""
        secondNum = ""
        operation = -1
        display.textContent = ""
        return
    }

    if (value === "="){
        console.log (firstNum)
        console.log (secondNum)
        console.log(operation)
        let result = operate(operation)
        console.log(result)
        display.textContent = result
        firstNum = result
        operation = -1
        secondNum = "" 
        return 
    }

    if (operation == -1 && !isOperation(value)){
        firstNum = displayText + value
        display.textContent = displayText + value
    }

    else if (operation != -1 && !isOperation(value)) {
        secondNum = secondNum + value
        display.textContent = displayText + value 
        
    }

    else if (isOperation(value)) {
        if (secondNum == "") {// check properly
            if (operation == -1) {
                operation = value
                display.textContent = displayText + value 
            }  else {
                display.textContent = displayText.replace(operation, value) 
                operation = value
            }
            // doesn't change op display
        
        } else if (operation != -1){
             console.log (firstNum)
        console.log (secondNum)
        console.log(operation)
            let result = operate(operation)
            
            firstNum = result
            secondNum = ""
            operation = value
            display.textContent = result + operation
        }

    }
}

function isOperation(o){
    if (o == "+" || o == "-" || o == "*" || o == "/" ) {
        return true
    }
    return false
}

//return value function
// and checks value function
function operate(operation){
    console.log( firstNum)
    console.log(secondNum)
    switch(operation){
        case "+":
            return parseInt(firstNum) + parseInt(secondNum)
        case "-":
            return parseInt(firstNum) - parseInt(secondNum)
        case "*":
            return parseInt(firstNum) * parseInt(secondNum)
        case "/":
            if (secondNum === 0){
                console.log("No no no there!")
            } else {
                return parseInt(firstNum) / parseInt(secondNum)
            }

    }
}