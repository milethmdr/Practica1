import {stdin, stdout} from 'process';
import readline from 'readline';

const rd = readline.createInterface({
    input: stdin,
    output: stdout
});

rd.question('what you name?', (name)=>{
    console.log("Welcome" + name)
    rd.close()
});

