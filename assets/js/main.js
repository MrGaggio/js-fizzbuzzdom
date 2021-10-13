//Scrivi un programma che esegua un ciclo da 1 a 100

//a ogni operazione appenda un elemento html al container con stile differente a seconda del valore dell'indice per multipli di 3, per multipli di 5 e per i valori che sono sia multipli di 3 che di 5.



let list = document.querySelector(' .list')
    console.log(list);


//Scrivi un programma che esegua un ciclo da 1 a 100
//creare una lista all'interno della quale ci sono list items
//visualizzare i numeri da 0 100 inseriti all'interno di un list item

for (let i = 1; i <= 100; i++){
    console.log(i);
    const element = `<li class="box"> ${i} </li>`
    list.innerHTML += element
}

//Stilizzare i container .. fatto in parte

//I deve essere verde ogni 3 (fizz - #61D2A4)
//I deve essere giallo ogni 5 (buzz - #F9D277)
//i deve essere rosso ogni 15 (fizzbuzz - #DE5471)
//per tutti gli altri numeri i è (#3D88AE)


//Associre a ogni variabile i rispettivi numeri multipli

const fizz = '3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45,48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99,'
console.log(multipleTree);

const buzz = '5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,'

const fizzbuzz = '15, 30, 45, 60, 75, 90'

//Se multiplo di 3 - box verde, scritta fizz
//Se multiplo di 5 - box giallo, scritta buzz
//Se multiplo di 15 - box rosso, scritta fizzbuzz











