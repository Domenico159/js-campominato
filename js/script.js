

var numeriTot = 0;

var bombeTot = 16;

var possibilita = numeriTot - bombe;

var campo = document.getElementById('campo');

var bombe = [];

var numeriSalvi = [];

var numeriTrovati = [];

var difficolta =  prompt('Inserire un tipo di difficoltà \n facile \n medio \n difficile');


   while((difficolta !== 'difficile' && difficolta !== 'medio' && difficolta !== 'facile') || (!isNaN(difficolta)) ){
    difficolta =  prompt('Dato errato , prego inserire un tipo di  difficoltà \n facile \n medio \n difficile');
   }


   switch(difficolta){
       case 'facile' :
           numeriTot = 100;
           break

           case 'medio' :
           numeriTot = 80;
           break

           case 'difficile' :
           numeriTot = 50;
           break
   }



   console.log('Numeri salvi' + numeriSalvi);
    


  while(bombe.length < bombeTot){
        
    var randomNumber = numberRandom(1 , (numeriTot)+2);

       if(! bombe.includes(randomNumber)){
          bombe.push(randomNumber);

         }
  }


  while( numeriSalvi.length < numeriTot ){

    var randomNumber = numberRandom(1 , (numeriTot) + 2);

    if(! numeriSalvi.includes(randomNumber)){
        numeriSalvi.push(randomNumber);

        

       }


  }

//   console.table(numeriSalvi);
//   console.log(bombe);
console.log(numeriSalvi.length);


for(var i = 0 ; i < numeriTot ; i++){

    if(! bombe.includes(i)){
        campo.innerHTML += '<li>' + '<p class="minibox">' + numeriSalvi[i] + '</p>' + '</li>' ;
    }
    else{
        campo.innerHTML += '<li>' + '<p class="covid minibox">'+ '</p>' + '</li>' ; 
    }



}


    

    var miniBoxes = document.getElementsByClassName('minibox');

   console.log(miniBoxes);
   console.log(bombe);



    for(var i = 0 ; i < miniBoxes.length ; i++){

        var thisBox = miniBoxes[i];

        var thisBomb = bombe[i];

        thisBox.addEventListener('click', 

                    function(){
                        
                        this.className = this.classList + " visibility";

                        bombeTot = parseInt((bombe.length) - 1);

                        possibilita = parseInt(numeriTot) - bombeTot ;

                        var thisNum = parseInt(this.innerHTML);
                        console.log(thisNum);

                        if(isNaN(thisNum)){
                            // console.log(true);
                            alert('Mi dispiace hai preso il covid-19 , RIMETTITI PRESTO !!!! :D');
                            $('p').addClass('visibility');
                            setTimeout(function(){ window.location.reload() }, 3000);
                        }else if(numeriTrovati.length == possibilita){
                            alert('HAI VINTO!!!! SEI RIUSCITO A SFUGGIRE AL COVID-19 :D');
                            setTimeout(function(){ window.location.reload() }, 3000);
                        }else{
                            // console.log(false);
                            numeriTrovati.push(thisNum);
                        //     console.table(numeriTrovati);
                        //     console.table(numeriSalvi);
                        //    console.log(possibilita);
                        }
        
                    })

                  
    }

                      
 



    







/******************************************************
 *  Functions
 ******************************************************/ 

function numberRandom(min,max){

    return Math.floor(Math.random() * (max - min) +1) + min;


}







        




