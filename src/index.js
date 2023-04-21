import { createFileManger } from './file-manager.js';
const args = process.argv.slice(2);
const username = args.find(arg => arg.startsWith('--username='))
if (!username) {
    console.log('T_T');
    process.exit(1);
}

await createFileManger(username)

