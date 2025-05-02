let num1 =0;
let num2 =1;

let result = ''

function mostrarEnDisplay(valor) {
    let elementDisplay = document.getElementById('id_display')
    console.log(valor);

    if(valor === '+' ){
        elementDisplay.innerText += " +  " 
        
    }else{
        elementDisplay.innerText+=valor    
  
    }
    

}

function igual() {
    result = document.getElementById('id_display').innerText
    console.log(result);
    let aux = result.split('+')
    console.log(aux);
    let respuesta = 0
    for(let num of aux){
        respuesta+=Number(num)
    }
    document.getElementById('id_display').innerText=respuesta    
                
}

