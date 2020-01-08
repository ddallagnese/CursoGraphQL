const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'joao@teste.com',
    idade: 25,
    perfil_id: 1,
    status: 'ATIVO'
},{
    id: 2,
    nome: 'Carlos Santos',
    email: 'carlos@teste.com',
    idade: 33,
    perfil_id: 2,
    status: 'INATIVO'
},{
    id: 3,
    nome: 'Jaqueline do Tinder',
    email: 'jaque@teste.com',
    idade: 18,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

const perfis = [{
    id: 1,
    nome: 'Comum'
},{
    id: 2,
    nome: 'Administrador'
}]

module.exports = { usuarios, perfis }