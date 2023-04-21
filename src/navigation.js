import path from 'path';


export async function upFolder(currentPath) {
    try {
        const parentDir = path.resolve(currentPath, '..');
        if (parentDir !== currentPath) {
            process.chdir(parentDir);
            console.log(`Changed directory to ${parentDir}`);
            console.log(`You are currently in ${parentDir}`);
        } else {
            console.log(`You are already in the root directory.`);
        }
    } catch (error) {
        console.error(error);
    }
}
