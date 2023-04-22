import {promises as fs} from 'fs';
import {createReadStream,createWriteStream} from 'fs';
import path from 'path';


export const readFile = async (pathFile) =>{
    try {
        if (pathFile) {
            const stream = createReadStream(pathFile);

            stream.on('data', (data) => {
                process.stdout.write(data);
            });
        } else console.log('Missing argument')


    } catch (error) {
        console.error('Dont path to file');
    }
}

export const addFile = async (pathFile, fileName) =>{
    try {
        if (fileName) {
            await fs.promises.writeFile(path.join(pathFile, fileName), '');
            console.log(`File ${fileName} created successfully.`);
        } else console.log('Missing argument')
    } catch (error) {
        console.error(error);
    }
}

export const renameFile = async (fileName,secondFile) =>{
    try {
        if (fileName && secondFile) {
            await fs.rename(path.basename(fileName), secondFile);
            console.log('File renamed');
        } else console.log('Missing argument')
    } catch (error) {
        console.error(error);
    }
}

export const copyFile = async (fileName,secondFile) =>{
    try {
        if (fileName && secondFile) {
            const source = createReadStream(path.resolve(fileName));
            const destination = createWriteStream(path.join(secondFile, path.basename(fileName)));

            source.pipe(destination);
            source.on('error', (err) => console.error(`Error reading file: ${err}`));
            destination.on('error', (err) => console.error(`Error writing file: ${err}`));
            destination.on('finish', () => console.log(`File copied to ${secondFile}`));
        } else console.log('Missing argument')
    } catch (error) {
        console.error(error);
    }
}

export const moveFile = async (filePath,secondFile) =>{

    try {
        if (filePath && secondFile) {
            const fileName = path.basename(filePath);
            const fileNewPath = path.join(secondFile, fileName);

            const readStream = createReadStream(filePath);
            const writeStream = createWriteStream(fileNewPath);

            readStream.pipe(writeStream);

            writeStream.on('finish', async () => {
                await fs.unlink(filePath);
                console.log('File has been moved');
            });
        } else console.log('Missing argument')
    } catch (error) {
        console.error(error);
    }
}

export const deleteFile = async (fileName) =>{
    try {
        if (fileName) {
            await fs.unlink(fileName);
            console.log('File deleted');
        } else console.log('Missing argument')
    } catch (error) {
        console.error(error);
    }
}
