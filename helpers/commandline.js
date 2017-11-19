function handleArgv(argv) {
    let port = null;

    if(argv.length > 2) {
        if (argv[2].isNumber()) {
            port = argv[2];
        }
        else {
            console.log("Usage: node app.js [port]");
        }
    }

    return { 'port': port };
}

export { handleArgv }