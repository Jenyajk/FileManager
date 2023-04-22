import fs, {createReadStream, createWriteStream} from "fs";
import path from "path";
import * as zlib from "zlib";

export const compress = async (pathFile, secondPath) =>{

    try {
        if (pathFile && secondPath ) {
            const sourceStream = createReadStream(pathFile);
            const destinationPath = path.join(secondPath, `${path.basename(pathFile)}.br`);
            const destinationStream = createWriteStream(destinationPath);
            const brotli = zlib.createBrotliCompress()

            sourceStream.pipe(brotli).pipe(destinationStream)
            destinationStream.on('finish', () => {
                console.log('File has been compressed');
            });

            destinationStream.on('error', (error) => {
                console.error('Error while compressing file');
            });
        } else console.log('Missing argument')

    } catch (error) {
        console.error('Dont path to file');
    }
}

export const decompress = async (pathFile, secondPath) =>{
    try {
        if (pathFile && secondPath ) {
            const fileName = path.basename(pathFile, '.br');
            const decompressedPath = path.join(secondPath, fileName);
            const readStream = fs.createReadStream(pathFile);
            const writeStream = fs.createWriteStream(decompressedPath);
            const brotliStream = zlib.createBrotliDecompress();

            readStream.pipe(brotliStream).pipe(writeStream);

            writeStream.on('finish', () => {
                console.log('File decompressed');
            });
        } else console.log('Missing argument')

    } catch (error) {
        console.error('Dont path to file');
    }
}
