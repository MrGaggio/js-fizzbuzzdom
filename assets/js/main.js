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


//Stilizzare i container

