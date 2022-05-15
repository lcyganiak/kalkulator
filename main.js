// objekt window

console.log(window)

// objekt document


console.log(document)

const main_h1 = document.getElementById('main-h1')
console.log('podbrane po id', main_h1)

main_h1.style.color = 'red'

main_h1.innerText = "to nie kalkulator"

const btn = document.getElementsByClassName('btn')

console.log('pobrane po class', btn )

for(let i = 0; i < btn.length; i++ ) {
    console.log(btn[i])
    btn[i].style.color = 'black'
}
