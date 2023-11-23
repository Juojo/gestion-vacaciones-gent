const XLSX = require('xlsx');
const fs = require('fs');

// Ruta al archivo Excel
const rutaArchivoExcel = 'forms/FRPV.xlsx';

// Lee el archivo Excel
const libro = XLSX.readFile(rutaArchivoExcel);

// Itera sobre cada hoja del libro
libro.SheetNames.forEach(hojaNombre => {
    // Obtiene la hoja actual
    const hoja = libro.Sheets[hojaNombre];

    // Convierte los datos de la hoja a un formato legible (arreglo de objetos)
    const datos = XLSX.utils.sheet_to_json(hoja);

    // Muestra los datos en la consola
    console.log(`Datos de la hoja ${hojaNombre}:`);
    console.log(datos);

    // Puedes hacer más cosas con los datos aquí, como guardarlos en una base de datos, etc.

    // Ejemplo: Guardar los datos en un archivo JSON
    const datosJSON = JSON.stringify(datos, null, 2);
    fs.writeFileSync(`datos_${hojaNombre}.json`, datosJSON);
});
