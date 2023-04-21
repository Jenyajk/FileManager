import fs from 'fs';

export async function listFiles(path) {
    try {
        const files = await fs.promises.readdir(path);
        console.log(files);
    } catch (error) {
        console.error(error);
    }
}
