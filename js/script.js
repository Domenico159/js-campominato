

var numeriTot = 100;

var bombeTot = 16;

var possibilita = numeriTot - bombe;

var campo = document.getElementById('campo');

var bombe = [];



    


  while(bombe.length < bombeTot){
        
    var randomNumber = numberRandom(1 , 100);

       if(! bombe.includes(randomNumber)){
          bombe.push(randomNumber);

         }
  }


for(var i = 1 ; i <= numeriTot ; i++){

    if(! bombe.includes(i)){
        campo.innerHTML += '<li id ="ciao">' + '<p>' + i + '</p>' + '</li>' ;
    }
    else{
        campo.innerHTML += '<li>' + '<p class="covid">'+ '</p>' + '</li>' ; 
    }


    var elemento = document.getElementById('ciao');

elemento.addEventListener('click', 

            function(){
                
                var thisElement = this;


            })
}


/******************************************************
 *  Functions
 ******************************************************/ 

function numberRandom(min,max){

    return Math.floor(Math.random() * (max - min) +1) + min;


}






        




