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

function mnozenie(a, b) {
    const wynik = a * b
    console.log(wynik)
    return wynik;

}
mnozenie(5, 10)
mnozenie(5, 9)
mnozenie(5, 8)

const wynikMnozenia5razy10 = mnozenie(5, 10)

console.log('wynikMnozenia5razy10', wynikMnozenia5razy10)

const wynikMnozenia5razy9 = mnozenie(5, 9)
console.log('wynikMnozenia5razy9', wynikMnozenia5razy9)


function dzielenie(a, b) {
    if(b !== 0 && a !== 0) {
        const wynik = a / b 
        return wynik
    } else {
        return 'Nie dziel cholero przez zero'
    }
}
function sprawdzImie(imie) {
    if(imie === 'Jan') {
        return 'to imię ' + imie
    } else if(imie === "Łukasz") {
        return 'to imię ' + imie
    } else {
        return "nie ma takiego imienia"
    }
}
const czyjestImie = sprawdzImie('łukasz')

const dzieleni1 = dzielenie(4, 2)
console.log('dzielę 4 przez 2', dzieleni1)
const dzielenie2 = dzielenie(4, 0)
console.log('dzielę 4 przez 0', dzielenie2)
const dzielenie3 = dzielenie(10, -2)
console.log('dzielę 10 przez -5', dzielenie3)

const dzielenie4 = dzielenie(0, 4)
console.log('dzielę 0 przez 4', dzielenie4)
// operatory porównania
// === sprawdzają czy watości są równe i czy mją ten sam tym 
// np. 2 ===2 zwraca true a '2' === 2 false

// !== sprawdza czy wartości są różne i czy mająten sam typ


// operatory logiczne 

// && to jest i
// warunek 

// || lub 


// const numb1 = 5
// const numb2 = 8
// const numb3 = -2

// (numb1 > 5 && numb2 < 6) || numb3 < 0
 // false     false       true   => false
 //       false             true => true

 let jakieToImie= ''


 function xd(imie) {
     if(imie === "Andrzej") {
        jakieToImie = "Tak to jest " + imie
     } else if( imie === "Kacper") {
        jakieToImie = "Tak to jest " + imie
     }
 }