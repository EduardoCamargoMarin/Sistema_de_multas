function calcular() {

    var txtvel = window.document.getElementById('vel');
    var resultado = window.document.getElementById('resultado');
    var velocidade = Number(txtvel.value)
    

    if (velocidade > 80) {
        resultado.innerHTML = ` Sua velocidade é ${velocidade} km/h, Multado`;  
        
    } 
    

    else {
        resultado.innerHTML = ` Sua velocidade é ${velocidade} km/h, Liberado!!!`;

    }

}