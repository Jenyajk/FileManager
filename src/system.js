import os from 'os'

export const getOS = (command) => {
    if (command) {
        switch(command){
            case "--EOL":
                console.log(`EOL:${JSON.stringify(os.EOL)}`);
                break;
            case "--cpus":
                const res = os.cpus().map((elem)=>({
                    Model:elem.model,
                    'Clock rate':`${elem.speed/1000} GHz`
                }))
                console.log(`Amount of CPUS: ${os.cpus().length}`);
                console.table(res);
                break;
            case "--homedir":
                console.log(`Current home directory: ${os.homedir()}`);
                break;
            case "--username":
                console.log(`Current system user name: ${os.userInfo().username}`);
                break;
            case "--architecture":
                console.log(`CPU architecture : ${process.arch}`);
                break;
            default:
                console.log('Command command not recognized.');
        }
    } else console.log('Missing argument');


}
