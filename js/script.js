

var numeriTot = 100;

var bombeTot = 16;

var possibilita = numeriTot - bombe;

var campo = document.getElementById('campo');

var bombe = [];

var numeriSalvi = [];



    


  while(bombe.length < bombeTot){
        
    var randomNumber = numberRandom(1 , 100);

       if(! bombe.includes(randomNumber)){
          bombe.push(randomNumber);

         }
  }


for(var i = 1 ; i <= numeriTot ; i++){

    if(! bombe.includes(i)){
        campo.innerHTML += '<li>' + '<p class="minibox">' + i + '</p>' + '</li>' ;
    }
    else{
        campo.innerHTML += '<li>' + '<p class="covid minibox">'+ '</p>' + '</li>' ; 
    }



}

    

    var miniBoxes = document.getElementsByClassName('minibox');

   console.log(miniBoxes);



    for(var i = 0 ; i < miniBoxes.length ; i++){

        var thisBox = miniBoxes[i];

        var thisBomb = bombe[i];

        thisBox.addEventListener('click', 

                    function(){
                        
                        this.className = this.classList + " visibility";

                        if(this === thisBomb ){

                        }
        
        
                    })

                  
    }






/******************************************************
 *  Functions
 ******************************************************/ 

function numberRandom(min,max){

    return Math.floor(Math.random() * (max - min) +1) + min;


}







        




