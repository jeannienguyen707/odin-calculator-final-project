let base = document.querySelector(".calBody")
let display = document.createElement("div")
display.classList.add("showNums")
base.append(display)

let firstNum = 0
let secondNum = 0
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


//return value function
// and checks value function
function operate(){
    switch(o){
        case "+":
            return firstNum + secondNum
        case "-":
            return firstNum - secondNum
        case "*":
            return firstNum * secondNum
        case "/":
            if (secondNum === 0){
                console.log("No no no there!")
            } else {
                return firstNum / secondNum
            }

    }
}

// check values function

/*
operations only?  just change op
1 num value
operations?

if  /0 vs /10

store as a string and break it down? no ne


*/
function createButton(){
    let newNum = document.createElement("button")
    newNum.addEventListener("click", valueButton)
    return newNum
}
function valueButton(e){
    let value = e.target.innerHTM
    let displayText = display.textContent

    if (value == "clear"){
        firstNum = 0
        secondNum = 0
        operation = -1
        display.textContent = ""
        return
    }
    
     if (firstNum == 0 && isOperation(value)) {
        return
    }

    if (firstNum != 0 && isOperation(value)) {
        firstNum = display.textContent
        operation = value
    }

    // display input
    
    display.textContent = displayText + value
}

function isOperation(o){
    if (o == "+" || o == "-" || o == "*" || o == "/" ) {
        return true
    }
    return false
}