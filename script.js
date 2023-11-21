// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Creiamo un container
const container = document.querySelector (".container");

// Diciamo che il container contiene numeri da 1 a 100 e li stampiamo


for (let i=1; i<=100; i++) {

    console.log(i);
    const square = document.createElement("div");
    square.classList.add ("square");
    square.append(i);
    container.append (square);

// Diciamo che se il numero contenuto è divisibile per 3 e 5 allora scriviamo buzz

   if (i % 3 === 0 && i % 5 === 0) {
        square.innerHTML = `<span>fizzbuzz</span>`;
        square.classList.add ("fizzbuzz");
    }

// Diciamo che se il numero contenuto è divisibile per 3 allora scriviamo fizz
    else if (i % 3 === 0) {
        square.innerHTML = `<span>fizz</span>`;
        square.classList.add ("fizz");
    }

// Diciamo che se il numero contenuto è divisibile per 5 allora scriviamo buzz

    else if (i % 5 === 0) {
        square.innerHTML = `<span>buzz</span>`;
        square.classList.add ("buzz");
    }

}