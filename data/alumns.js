/**
 * ARRAY CON ERRORES
 */

// const alumnosArr = [
//     alumno = {
//         name:"Juan",
//         lastName: "Perez",
//         age:"30"
//     },
//     alumno1 = {
//         name:"Jose",
//         lastName:"gonzalez",
//         age:"20",

//     },
// ]


/**
 * ARRAY OK: no debes asignar el objeto a ninguna variable, si haces eso, deja de ser dinamico, la idea es tener
 * un array de objetos para poder recorrerlo y buscar en tu interior de forma dinamica
 */
const alumnosArr = [
    {
        name: "Juan",
        lastName: "Perez",
        age: "30"
    }, {
        name: "Jose",
        lastName: "gonzalez",
        age: "20",

    },
]

function searchLastName(lastName) {
    /**
     * esto funciona pero hay una manera mas corta de hacerlo
     */

    // let alumno = alumnosArr.find(function (surname) {
    //     return surname.lastName === lastName;
    // });

    /**
     * este codigo de la linea 44 sustituye la funcion por una arrow function y es algo mas corto 
     * y se ve mejor para comprenderlo.
     */
    // let alumno = alumnosArr.find((alumno) => alumno.lastName === lastName);

    /**
     * y esta la misma pero usando el .filter(), PARA MI ES MEJOR USAR EL FILTER, 
     * PORQUE EL .FIND() SOLO DEVUELVE LA PRIMERA COINCIDENCIA QUE ENCUENTRE
     * PERO EL .FILTER() TE DEVUELVE UN ARRAY CON TODAS LAS COINCIDENCIAS,
     * ES DECIR; SI TIENES DOS USUARIOS CON EL MISMO APELLIDO, EL FILTER TE DEVUELVE AMBOS Y EL
     * FIND SOLO EL PRIMERO QUE ENCUENTRE
     */
    let alumno = alumnosArr.filter((alumno) => alumno.lastName === lastName);
    console.log(alumno);
    return alumno;

}


module.exports = searchLastName;








