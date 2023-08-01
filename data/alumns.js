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
    let alumno = alumnosArr.find(function (surname) {
        return surname.lastName === lastName;

    });
    // buscar en google como hacer un busqueda dentro de un array (alumnosArr) por un parametro en concreto
    
    // SI HAS BUSCADO ESTO, BUSCA AHORA COMO HACER UN FILTER EN LA URL QUE TE PONGO AQUI ABAJO:
    // https://masteringjs.io/tutorials/fundamentals/filter-array-of-objects
    console.log(alumno);

}


module.exports = searchLastName;








