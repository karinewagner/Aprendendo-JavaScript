function getAdmins(map) {
    let admins = [] ;
    for ( [key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new map();

usuarios.set('Luiz', 'Admin')
usuarios.set('Stephany', 'Admin')
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin')

console.log(getAdmins(usuarios));



const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));
