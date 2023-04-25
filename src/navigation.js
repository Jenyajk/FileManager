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


export async function goDirectory(path) {
    try {
        const parentDir = process.cwd();
        if (parentDir !== path) {
            process.chdir(path);
            console.log(`You are currently in ${process.cwd()}`);
        } else {
            console.log(`You are already in the root directory.`);
        }
        }
     catch (error) {
        console.error(error);
    }
}

