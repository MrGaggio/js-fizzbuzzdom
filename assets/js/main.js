//Scrivi un programma che esegua un ciclo da 1 a 100

//a ogni operazione appenda un elemento html al container con stile differente a seconda del valore dell'indice per multipli di 3, per multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


//Scrivi un programma che esegua un ciclo da 1 a 100

// seleziona la lista 
const ul = document.querySelector('ul.list')


// esegui un ciclo da 1 a 100
for (let index = 1; index <= 100; index++) {

// crea l'elemento listElement che contiene per ogni list item l'index per la classe e l'index al suo interno
let listElement = `<li class="li li--${index}">${index}</li>`



if (index % 3  == 0 && index % 5 == 0) {
    listElement = `<li class="li fizzbuzz">"FizzBuzz"</li>`

} else  if(index % 5 == 0){
    listElement = `<li class="li buzz">"Buzz"</li>`
   
} else if(index % 3 == 0){
    listElement = `<li class="li fizz">"Fizz"</li>`
 
} else {
    listElement = `<li class="li li--${index}">${index}</li>` 
}
    ul.innerHTML += listElement
    console.log(listElement);

}





