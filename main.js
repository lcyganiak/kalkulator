// objekt window

console.log(window)

// objekt document


console.log(document)

const main_h1 = document.getElementById('main-h1')
console.log('podbrane po id', main_h1)

main_h1.style.color = 'red'

main_h1.innerText = "to nie kalkulator"

const btn = document.getElementsByClassName('btn')

// console.log('pobrane po class', btn )

for(let i = 0; i < btn.length; i++ ) {
    if(i % 2 === 0) {
        btn[i].style.backgroundColor = 'red'
    } else {
        btn[i].style.backgroundColor = 'black'
    }
}
const inputObj = document.getElementById('result-input')
// inputObj.value = inputObj.value + 'ło matko jedyna'
inputObj.value += ' o matko jedyna '  // to samo co inputObj.value = inputObj.value + ' o matko jedyna ' 
console.log(inputObj)
function sum() {
    console.log('będe sumować różen cyfry')
    console.log(btn)
    const lokolna = 'jestem zminną zadeklarowaną w funkcji sum()'
    console.log(lokolna)

}

sum()
// console.log(lokolna) 

