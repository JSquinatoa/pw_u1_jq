function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value)
    let num2 = parseFloat(document.getElementById('id_numero_2').value)

    let resultado = 0;
    resultado = 'q';

    const SUMA = '+'
    const RESTA = '-'
    const MULTIPLICAR = '*'
    const DIVIDIR = '/'

    if (tipo === SUMA) {
        resultado = sumar(num1, num2)
    } else if (tipo === RESTA) {
        resultado = restar(num1, num2)
    } else if (tipo === MULTIPLICAR) {
        resultado = multiplicar(num1, num2)
    } else if (tipo === DIVIDIR) {
        resultado = dividir(num1, num2)
    }

    document.getElementById('id_resultado').innerText = 'Resultado: '
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();
}


const fundamentos = () => {

    console.log('Fundamentos JS');

    /*Tipos de Variables
    var: antiguo, obsoleto
    let: varaible cambiantes
    const: varaibles constantes
    */

    let nombre = '10';
    let numero = 10;
    let arreglo = [1, 2, 3, 4, 5];

    const nombrec = 10;
    console.log(arreglo);
    console.log('Texto de Prueba');

    /*Arreglos*/

    const diasLaborales = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasLaborales);
    console.log(diasLaborales[0]);

    console.log(diasLaborales[10]);
    let valor = '';
    console.log(valor);

    console.log();

    diasLaborales.push('Sabado');
    diasLaborales.unshift('Días');
    console.log(diasLaborales);

    const numerosImpares = [1, 3, 5, 7, 9];
    const numerospares = [2, 4, 6, 8];

    const numeros = numerosImpares.concat(numerospares);
    console.log(numeros);
    

    /*Sentecnias de control */

    for(const dia of diasLaborales){
        console.log(dia);    
        
        if (dia === 'Viernes') {
            console.log('Por fin Viernes ');
        } else {
            console.log('Aun no es Viernes :C');               
        }

        if (dia !== 'Viernes') {
            console.log('Día normal');          
        } else {
            console.log('Dia de salida');
        }
    }

    /*manejo de objetos*/ 
    const miProfesor = {
        nombre: 'John',
        apellido: 'Quinatoa',
        edad: 23,
        genero: 'masculino',
        ciudad: 'Quito'
    }
    
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    /*Seteo de Atributos */ 
    miProfesor.apellido = 'Guerrero';

    console.log(miProfesor);

    if (miProfesor.ciudad === 'Quito') {
        console.log('Es de la capital');           
    }
    
    /*Ejercicoi*/

    const Estudiante1 = {
        nombre: 'John',
        apellido: 'Quinatoa',
        edad: 23,
        genero: 'masculino',
        ciudad: 'Quito'
    }

    const Estudiante2 = {
        nombre: 'Steven',
        apellido: 'Guerrero',
        edad: 23,
        genero: 'masculino',
        ciudad: 'Quito'
    }

    const Estudiante3 = {
        nombre: 'Naildein',
        apellido: 'Tabnago',
        edad: 21,
        genero: 'femenino',
        ciudad: 'Quito'
    }

    const arregloEstudiantes = [Estudiante1, Estudiante2, Estudiante3]
    console.table(arregloEstudiantes);
    
    
}

