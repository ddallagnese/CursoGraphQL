const db = require('../config/db')

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))
//     .finally(() => db.destroy())

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

db.insert({ usuario_id: 1, perfil_id: 1 }).into('usuarios_perfis')
    .then(res => console.log(res))
    // .then(id => `O código gerado foi ${id}`)
    // .then(string => console.log(string))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())