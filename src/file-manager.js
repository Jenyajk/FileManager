import { createInterface } from 'readline';
import {hash} from "./hash.js";
import { listFiles } from './file.js';
import {upFolder} from "./navigation.js";


export async function createFileManger(username) {
    const name = username.slice(11);
    const currentPath = process.cwd();
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(`You are currently in ${process.cwd()}`);
    console.log(`Welcome to the File Manager, ${name}!`);

    rl.on('line', async (data) => {
        const command = data.trim();

        switch (command) {

            case 'up':
                await upFolder(process.cwd());
                break;
            case 'cd':
                await listFiles(process.cwd());
                break;
            case 'ls':
                await listFiles(process.cwd());
                break;
            case 'cat':
                await upFolder(process.cwd());
                break;
            case 'add':
                await listFiles(process.cwd());
                break;
            case 'rn':
                await upFolder(process.cwd());
                break;
            case 'cp':
                await listFiles(process.cwd());
                break;
            case 'mv':
                await upFolder(process.cwd());
                break;
            case 'rm':
                await listFiles(process.cwd());
                break;
            case 'os':
                await upFolder(process.cwd());
                break;
            case 'list':
                await listFiles(process.cwd());
                break;
            case 'hash':
                await upFolder(process.cwd());
                break;
            case 'compress':
                await listFiles(process.cwd());
                break;
            case 'decompress':
                await upFolder(process.cwd());
                break;
            case 'exit':
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
