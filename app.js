// REQUIRES
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
const colors = require("colors");

let command = argv._[0];

switch (command) {
  case "listar":
    listarTabla(argv.base, argv.limit);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limit)
      .then((archivo) => console.log(`Archivo creado ${archivo}`.yellow))
      .catch((err) => console.log(err));
    break;

  default:
    console.log("comando no reconocido");
    break;
}

// let parameter = process.argv[2];
// let base = parameter.split("=")[1];
// console.log(base);

// crearArchivo(base).then((archivo) => console.log(`Archivo creado ${archivo}`));
