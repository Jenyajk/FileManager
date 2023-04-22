import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const hash = async (file) =>{

    try {
        if (file) {
            const hash = createHash('sha256');
            const stream = createReadStream(file);
            stream.on('data', (data) => hash.update(data));
            stream.on('end', () => console.log(hash.digest('hex')));
        } else  console.log('Missing argument')

    } catch (error) {
        console.error(error);
    }

}
