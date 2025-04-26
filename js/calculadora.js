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

    for (const dia of diasLaborales) {
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

    const ciudadano = {
        nombre: 'John',
        apellido: 'Quinatoa',
        direccion: {
            callePrincipal: 'Pedro Campaña',
            calleSecundaria: 'José Encalada',
            numeracion: 'N65-123',
            barrio: {
                referencia: 'Alado de una tienda'
            }
        }
    }

    console.table(ciudadano);
    console.table(ciudadano.nombre);
    console.table(ciudadano.direccion.callePrincipal);
    console.table(ciudadano.direccion.barrio.referencia);

    ciudadano.direccion.callePrincipal = 'Av. Amazonas';

    console.log(ciudadano);

    const est1 = {
        nombre: 'John',
    }

    const est2 = {
        nombre: 'Steven',
    }

    est1.nombre = 'David'

    const arregloEstudiantes1 = [est1, est2]
    console.log(arregloEstudiantes1);

    const arregloEstudiantes2 = [
        {
            nombre: 'Naidelin',
            apellido: 'Tabango'
        },
        {
            nombre: 'Brigith',
            apellido: 'Mañay'
        }
    ]

    console.log(arregloEstudiantes2);
    console.log(arregloEstudiantes2[1].apellido);

    // Desestructuración de arreglos
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c5);

    const [cuno, cdos] = colores;
    console.log(cuno);
    console.log(cdos);

    const [, , ctres] = colores;
    console.log(ctres);

    const [c01, c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    desestructuracionArreglo(colores);  
     
    const [,p2, p3, p4, p5, p6, p7, p8, p9, p10] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p3);
    console.log(p10);

    // Desustructuración por operador rest
    console.log('Desustructuración por operador rest');
    const [p1, ...resto] = desestructuracionArreglo2();
    console.log(p1);
    console.log(resto);    
     
    

    // Desustructuración de objetos
    const auto = {
        marca: 'Toyota',
        modelo: 'prius',
        anio: 2020,
        color: 'amarillo'
    }

    const {marca, color, anio} = auto;

    console.log(color);

    const {anio1} = {
        marca1: 'Toyota',
        modelo1: 'prius',
        anio1: 2020,
        color1: 'amarillo'
    }

    console.log(anio1);

    desestructuracionObjeto(auto);  
    
    const universidad = {
        nombre: 'UCE',
        direccion: 'America',
        rector: {
            nombre: 'John',
            apellido: 'Quinatoa',
        }   
    }

    const {rector} = universidad
    const {apellido} = rector

    console.log(apellido);


    // En una sola linea

    const universidad2 = {
        nombre2: 'UCE',
        direccion2: 'America',
        rector2: {
            nombreR2: 'John',
            apellidoR2: 'Quinatoa',
        }   
    }

    const {nombre2, rector2:{nombreR2}} = universidad2
    console.log(nombreR2);
    
    // desestructuración de objeto por operador rest
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'prius',
        anioR: 2020,
        colorR: 'amarillo'
    }
    
    const {marcaR, ...restoO} = autoR 
    console.log(marcaR);
    console.log(restoO);

    
}

function desestructuracionArreglo([c1, c2, c3]) {
    console.log(c1);
    console.log(c2);
    console.log(c3);       
}

function desestructuracionArreglo2() {
    const colores = ['Rosado', 'Azul', 'Rojo', 'Verde', 'Naranja'];
    return colores
}

function desestructuracionObjeto({marca, color}) {
    console.log(marca);        
    console.log(color);        
}







