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


 // lukasz.c@com.pl
 // lUkasz.c@com.pl

 // Warszawa i warszawa



 // działania na string

 //toUpperCase()

 const imie = "jan"

 const imieZDuzej = imie.toUpperCase()
 console.log(imieZDuzej)

 // toLowerCase() wsztkow w stringu z małej litery
 const nazwisko = "NOWAK"
 const nazwiskoZMałejLitery = nazwisko.toLowerCase()
const item1 = "Warszawa"
const item2 = "warszawa"

console.log(item1.toLowerCase() === item2.toLowerCase())

const art = 'Jego brat przez wiele lat był gwiazdą NBA, jest wrogiem publicznym w Turcji, a on świetnie sobie radzi w polskiej lidze.'
// search 
// ['J','e','g']
const isNBA = art.search('NBA')
console.log(isNBA) // wynik 38
const isNFL = art.search('NFL')
console.log(isNFL) // wynik -1
// includes 
const isTurcji = art.includes('Turcji')  // includes zwraca true lub false
console.log(isTurcji)



const email = 'lukasz@com.pl'
const email2 = '@lukasz.com.pl'
const email2Dlugosc = email2.length // zwraca ilośc ilośc znaków 
// w stringu
console.log(email2Dlugosc)
if(email2.search('@') > 0 && email2.search('@') < email2Dlugosc - 1) {
    // tylko wejdzie w ta cześć kodu kiedy emila nie będzie miał @ na poczatku i koncu
}

// split() 

const artSplit = art.split(' ') // zwraca tablicę [ "Jego", "brat", "przez", "wiele", "lat", "był", "gwiazdą", "NBA,", "jest", "wrogiem", … ]
console.log(artSplit)

const artSplit2 = art.split('') 
console.log(artSplit2)



// slice()

const artSlice = art.slice(100) // zwróci zi w polskiej lidze. czyli od 100 znaku 
console.log(artSlice)
const artSlice2 = art.slice(0, 40) // zwróci od pierwszego do 40 znaku w tekście 
console.log(artSlice2)

// trim()
const textZeSpacjami = '                Jan Nowak                   '
console.log(textZeSpacjami)
const textBezSpacji = textZeSpacjami.trim()
console.log(textBezSpacji)

// repeat()

const someText = "Łukasz jest "
const textRepeat = "Słabym trenerem "

const textZpowielonąWartoscia = someText + textRepeat.repeat(25)

console.log(textZpowielonąWartoscia)

// concat 
const nowyText = someText.concat('+++++++++', textRepeat)
console.log(nowyText)


// 1. Sprawdz czy szukan fraza jest w tekście. 3 dowolne frazy. Sprawdzanie zamknij w funkcji z parametrem 


function szukaj(parametr) {
// napisz fukcje szukająća padanej frazy , z uwzględnieniem małych i duzych liter
}

// const czyJestWhen = szukaj('When')
// const czyJestAre = szukaj("are") *// ARE, Are, aRe

//2. Dowlony text podzle na 2 połówki. 
// np. 
function rozdziel(parametr) {
    // zwracam objekt
}

// 3. Zamieni w tekscie dowalny wyraz na SDA 
// np. mam tekst "Kocham poniedziałek"
// zaminiam na Kocham SDA 
function zmina(parametr) {
    // replace
}