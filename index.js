let countEl = document.getElementById("count-el")
let currentValue = document.getElementById("people-record")
count =0

function increment() {
    count+=1
    countEl.innerText = count
}

function save() {
    if(currentValue.innerText===""){
        currentValue.innerText = count
    }
    else{
        currentValue.innerText = currentValue.innerText + " -> " + count
    }
    count = 0
    countEl.innerText = 0
}

function restart() {
    count = 0
    countEl.innerText = 0
    currentValue.innerText = ""
} 
