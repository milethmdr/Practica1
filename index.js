import {stdin, stdout} from 'process';
import readline from 'readline';

const rd = readline.createInterface({
    input: stdin,
    output: stdout
});

// rd.question('what you name?', (name)=>{
//     console.log("Welcome" + name)
//     rd.close()
// });

// let word = "Hola esto es JavaScript";
// //ToLowerCase
// console.log(word.toLocaleLowerCase())
// console.log(word.toLocaleUpperCase())
// console.log(word.trim().split(/\s+/))
// console.log("reverse:"+word.split("").reverse().join(''))
// console.log(word.replaceAll("","").split(','))

//Verificar si la palabra es palindromo
//Escribir la palabra en consola y procesar para saber si lo es

rd.question('Ingrese la palabra para saber si es palindromo:', (word)=>{
    let palabraInvertida = word.split('').reverse().join(" ");
    //debug
    console.log(palabraInvertida + " " + word)
    let respuesta;
    //  if(word == palabraInvertida){
    //     respuesta = "¿Es palindromo?"
    //  }else{
    //     respuesta = "No es palindromo"
    //  }

    //usando ternario
    respuesta= word == palabraInvertida? "Es palindromo" : "No es palindromo"
     console.log(word + " : " + respuesta)
     rd.close()
});


