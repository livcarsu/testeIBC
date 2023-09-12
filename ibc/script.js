
document.getElementById('btn').onclick = function Gerar() {

    var contGato = 0;
    var contTubarao = 0;
    var contLobo = 0;
    var contAguia = 0; 

    var radio = document.getElementsByClassName("pergunta");
    
    for(var i=0; i<radio.length; i++){

        if (radio[i].checked){

            if (radio[i].value === "I"){
                contAguia++;
            } 
            
            else if (radio[i].value === "A"){
                contTubarao++;
            } 
            
            else if (radio[i].value === "C"){
                contGato++;   
            } 
        
            else {
            contLobo++;
        }
    }
}


if (contAguia >= contGato & contAguia >= contLobo & contAguia >= contTubarao) {
    window.open('aguia.html');

} 

else if(contGato >= contAguia & contGato >= contLobo & contGato >= contTubarao ){
    window.open('gato.html');

}

else if (contLobo >= contGato && contLobo >= contAguia & contLobo >= contTubarao ){

    window.open('lobo.html');

}

else {
    window.open('tubarao.html');

}

 


localStorage.setItem    ('porcAguia', `Águia = ${contAguia*4}%`);
localStorage.setItem    ('porcTuba', `Tubarão = ${contTubarao*4}%`);
localStorage.setItem    ('porcGato', `Gato = ${contGato*4}%`);
localStorage.setItem    ('porcLobo', `Lobo = ${contLobo*4}%`);


document.getElementById("resultadoA").innerHTML = localStorage.getItem('porcAguia');
document.getElementById("resultadoT").innerHTML = localStorage.getItem('porcTuba');
document.getElementById("resultadoG").innerHTML = localStorage.getItem('porcGato');
document.getElementById("resultadoL").innerHTML = localStorage.getItem('porcLobo');



}



   


 