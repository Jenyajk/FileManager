import path from 'path';

export const getTable = async (path) =>{
    try {
        const list = await fs.promises.readdir(path);
        console.table(list)
    } catch (error) {
        console.error(error);
    }
}
