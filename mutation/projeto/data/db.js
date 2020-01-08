let idUsu = 1
function proximoIdUsu() {
    return idUsu++
}

let idPer = 1
function proximoIdPer() {
    return idPer++
}

const perfis = [
    { id: proximoIdPer(), nome: 'Comum' },
    { id: proximoIdPer(), nome: 'Administrador' }
]

const usuarios = [{
    id: proximoIdUsu(),
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: proximoIdUsu(),
    nome: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    idade: 31,
    perfil_id: 2,
    status: 'INATIVO'
}, {
    id: proximoIdUsu(),
    nome: 'Daniela Smith',
    email: 'danismi@umail.com',
    idade: 24,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { 
    usuarios, 
    perfis,
    proximoIdUsu,
    proximoIdPer
}