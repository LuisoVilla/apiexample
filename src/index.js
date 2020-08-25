import '@babel/polyfill';

import app from  './server'

async function main() {
    app.listen(app.get('port'));
    console.log('Server on port ', 3000);
}

main();