const opts = {
  base: {
    alias: "b",
    describe: "Genera la tabla de multiplicar de la base",
    demandOption: true,
  },
  limit: {
    alias: "l",
    describe: "Limite para generar las tablas",
    default: 10,
  },
};
const argv = require("yargs")
  .command("listar", "Imprime en consola las tablas de multiplicar", opts)
  .command("crear", "Genera un archivo con la tabla de multiplicar ", opts)
  .help().argv;

module.exports = {
  argv,
};
