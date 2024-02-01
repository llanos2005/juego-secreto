let numeroSecreto=0;
let intentos=1;
let listanumerosSorteados=[]
let numeroMaximo=10
/**let titulo= document.querySelector('h1'); //declaramos un objeto el cual va a tener como atributo la etiqueta h1 que usaremos usando el metodo queryselector de document
titulo.innerHTML='HOLA MUNDO COMO VAMOS' //A este objeto le vamos a aplicar el metodo innerhtml que nos va a cambiar el titulo en la pagina

let parrafo= document.querySelector('p'); //Hacemos lo mismo pero con otra etiqueta
parrafo.innerHTML='DA UN NUMERO DEL 1 AL 10 PERROOOOOOOOO'

function intentoUsuario(){ //Creamos una funcion que damos al dar un clic VER HTML
    alert('DISTE CLIC MI COMPA')
}
*/
function asignarElemento(elemento, texto){ //CREAMOS UNA FUNCION PARTA AUTOMATIZAR EL PROCESO ANTERIOR, LE DAMOS LOS PARAMETROS DE ELEMENTO QUE SERIA ETIQUETA, Y EL TEXTO
    let elementoHTML=document.querySelector(elemento); //CREAMOS UN OBJETO LLAMADO ELEMENTOHTML, EL CUAL LE DAMOS EL METODO QUERYSELECTOR, QUE NOS VA A BUSDCAR LA ETIQUETA QUE LE DIMOS EN EL PARAMETRO
    elementoHTML.innerHTML=texto //A ESTE OBJETO LE VAMOS A PASAR EL METODO INNERHTML, EL CUAL LE VAMOS A DAR EL TEXTO DEL PARAMETRO
}

//asignarElemento('h1','ADIVINA EL NUMERO SECRETO'); //LE DAMOS LA FUNCION Y LOS PARAMETROS EN ESTE CASO SERA H1 LA ETIEQUETA Y EL TEXTO
//asignarElemento('p','Introduce un numero del 1 al 10')

function getNumberSecret(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1 //usamos el return para devolver un valor
    console.log(listanumerosSorteados)
    console.log(numeroGenerado)
    
    if (listanumerosSorteados.length==numeroMaximo){
        asignarElemento('p','Has llegado al limite de numeros sorteados')
    }else{
    if (listanumerosSorteados.includes(numeroGenerado)){
            return getNumberSecret(); //LLAMAMOS A LA MISMA FUNCION HACIENDO USO DE LA RECURSIVIDAD
        } else{
            listanumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}
/** 
function getNumberSecret2(){ //forma larga 
    let numeroSecreto2= Math.floor(Math.random()*10)+1
    return numeroSecreto2

}
getNumberSecret2()
console.log(numeroSecreto2)
*/
function verificarNumero(){
    let numeroDeUsuario=parseInt(document.getElementById('numerousuario').value)
    if (numeroDeUsuario==numeroSecreto){
        asignarElemento('p',`ACERTASTE EN ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarElemento('p','El numero es menor')
        }else {
            asignarElemento('p','El numero es mayor')
        }
        intentos++
        limpiarJuego()
    }

    /**console.log(typeof(numeroDeUsuario))
    console.log(numeroSecreto)
    console.log(typeof(numeroSecreto))
    console.log(numeroDeUsuario)
    console.log(numeroDeUsuario==numeroSecreto)
    return;
    */
}
function limpiarJuego(){
    document.querySelector('#numerousuario').value='';
}

function reiniciarJuego(){
    condicionesIniciales()
    limpiarJuego()
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    
}
function condicionesIniciales(){
    asignarElemento('h1','ADIVINA EL NUMERO SECRETO'); //LE DAMOS LA FUNCION Y LOS PARAMETROS EN ESTE CASO SERA H1 LA ETIEQUETA Y EL TEXTO
    asignarElemento('p',`Introduce un numero del 1 al ${numeroMaximo}`)
    intentos=1;
    numeroSecreto=getNumberSecret()
    console.log(numeroSecreto)
}
condicionesIniciales()

/**
let arreglo1=[]
arreglo1.push(9,2,4,5)
console.log(arreglo1)
console.log(arreglo1.length)
console.log(arreglo1[0])
console.log(arreglo1[arreglo1.length-1])
 */
