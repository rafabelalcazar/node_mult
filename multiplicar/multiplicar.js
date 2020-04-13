const fs = require("fs");
const colors = require("colors");

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("La base no es un numero");
      return;
    }
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }
    fs.writeFile(`tablas/tabla${base}.txt`, data, (err, respo) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`.yellow);
    });
  });
};

let listarTabla = (base, limite = 10) => {
  console.log("=============".green);
  console.log(`TABLA DEL ${base}`.green);
  console.log("=============".green);

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

module.exports = { crearArchivo, listarTabla };
