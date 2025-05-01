function guardar() {
    validar();        
}

function validar() {
    let nombre = document.getElementById('id_nombre').value;

    if (nombre === '') {
        console.log("ERROR no a ingresado el nombre");
    }else{
        console.log("Paso validación del nombre");
        
    }
}