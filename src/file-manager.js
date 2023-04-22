import { createInterface } from 'readline';
import {hash} from "./hash.js";
import {addFile, copyFile, deleteFile, moveFile, readFile, renameFile} from './basic-operations-with-file.js';
import {goDirectory, upFolder} from "./navigation.js";
import {getTable} from "./table.js";
import {compress, decompress} from "./compress.js";


export async function createFileManger(username) {
    const name = username.slice(11);
    const currentPath = process.cwd();
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(`You are currently in ${currentPath}`);
    console.log(`Welcome to the File Manager, ${name}!`);

    rl.on('line', async (data) => {
        const [command, fileName, secondFile] = data.trim().split(' ');
        switch (command) {
        case 'up':
           await upFolder(process.cwd());
           break;
        case 'ls':
           await getTable(process.cwd());
           break;    //доделай !
        case 'cd':
            await goDirectory(fileName);
            break;
        case 'cat':
            await readFile(fileName);
            break;
        case 'add':
            await addFile(currentPath,fileName );
            break;
        case 'rn':
            await renameFile(fileName, secondFile);
            break;
        case 'cp':
            await copyFile(fileName, secondFile);
            break;
        case 'mv':
            await moveFile(fileName, secondFile);
            break;
        case 'rm':
            await deleteFile(fileName);
            break;
        case 'os':
            await upFolder(process.cwd());
            break;
        case 'hash':
            await hash(fileName);
            break;
        case 'compress':
            await compress(fileName, secondFile);
            break;
        case 'decompress':
            await decompress(fileName, secondFile);
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
