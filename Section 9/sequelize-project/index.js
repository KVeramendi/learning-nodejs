const { CRUD } = require('./helpers/index')
const db = require('./models/index')

const params = process.argv;
if (params.length <= 2) process.exit(0);
const args = params.slice(2);
const command = args[0].split(':')[0].substring(2);
const entity = args[0].split(':')[1];

switch (command) {
    case CRUD.CREATE:
        const data = {};
        args.slice(1).forEach(arg => {
            const aux = arg.split('=');
            data[aux[0].substring(2)] = aux[1];
        });
        db[entity].create(data).then(() => {
            console.log('Entity created');
        }).catch(console.log);
        break;
    case CRUD.READ:
        db[entity].findAll().then(console.log).catch(console.log);
        break;
    default:
        console.log('Operation not found!');
}