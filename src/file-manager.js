import { createInterface } from 'readline';
import {hash} from "./hash.js";
import {addFile, copyFile, deleteFile, moveFile, readFile, renameFile} from './basic-operations-with-file.js';
import {goDirectory, upFolder} from "./navigation.js";
import {getTable} from "./table.js";
import {compress, decompress} from "./compress.js";
import {getOS} from "./system.js";


export async function createFileManger(username) {
    const name = username.slice(11);
    const currentPath = process.cwd();
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
function myCurrentPath(){
    console.log(`You are currently in ${process.cwd()}`);
}
    console.log(`You are currently in ${process.cwd()}`);
    console.log(`Welcome to the File Manager, ${name}!`);

    rl.on('line', async (data) => {
        const [command, fileName, secondFile] = data.trim().split(' ');
        switch (command) {
        case 'up':
           await upFolder(process.cwd());
            myCurrentPath()
           break;
        case 'ls':
           await getTable(process.cwd());
            myCurrentPath()
           break;
        case 'cd':
            await goDirectory(fileName);
            myCurrentPath()
            break;
        case 'cat':
            await readFile(fileName);
            myCurrentPath()
            break;
        case 'add':
            await addFile(currentPath,fileName );
            myCurrentPath()
            break;
        case 'rn':
            await renameFile(fileName, secondFile);
            myCurrentPath()
            break;
        case 'cp':
            await copyFile(fileName, secondFile);
            myCurrentPath()
            break;
        case 'mv':
            await moveFile(fileName, secondFile);
            myCurrentPath()
            break;
        case 'rm':
            await deleteFile(fileName);
            myCurrentPath()
            break;
        case 'os':
            await getOS(fileName);
            myCurrentPath()
            break;
        case 'hash':
            await hash(fileName);
            myCurrentPath()
            break;
        case 'compress':
            await compress(fileName, secondFile);
            myCurrentPath()
            break;
        case 'decompress':
            await decompress(fileName, secondFile);
            myCurrentPath()
            break;
        case '.exit':
            exit();
            process.exit(0);
            break;

        default:
            console.log(`Command '${command}' not recognized. Type 'exit' to quit.`);
    }
    });

    rl.on('close', () => {
        exit();
        process.exit(0);
    });

    rl.prompt();

    function exit() {
        console.log(`Thank you for using File Manager, ${name}, goodbye!`);
        console.log(`You are currently in ${process.cwd()}`);
    }
}
