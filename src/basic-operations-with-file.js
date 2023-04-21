import fs from 'fs';
import {createReadStream } from 'fs';
import path from 'path';

export async function listFiles(pathFile) {
    try {
        const files = await fs.promises.readdir(pathFile);
        console.log(files);
    } catch (error) {
        console.error(error);
    }
}

export const readFile = async (pathFile) =>{
    try {
        const stream = createReadStream(pathFile);

        stream.on('data', (data) => {
            process.stdout.write(data);
        });
    } catch (error) {
        console.error(error);
    }
}

export const addFile = async (pathFile, fileName) =>{
    try {
        if (fileName) {
            await fs.promises.writeFile(path.join(pathFile, fileName), '');
            console.log(`File ${fileName} created successfully.`);
        } else console.log('Please enter a filename')
    } catch (error) {
        console.error(error);
    }
}

export const renameFile = async (fileName,secondFile) =>{

    try {
        if (fileName && secondFile) {
            const newPath = `${path.dirname(fileName)}/${newFileName}`
            await fs.rename(fileName, secondFile);
            console.log('File renamed');
        } else console.log('Please enter a filename')
    } catch (error) {
        console.error(error);
    }
}
