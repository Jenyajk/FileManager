import fs from 'fs';

export const getTable = async (pathFolder) =>{
    try {
        const files = await fs.promises.readdir(pathFolder, {withFileTypes:true})
        let sortedFiles = files.sort((a,b) => a.isFile() - b.isFile())
        const res = sortedFiles.map((elem)=> ({Name: elem.name, Type: elem.isFile() ? 'file' : 'directory'}))
        console.table(res)
    } catch (error) {
        console.error(error);
    }
}
