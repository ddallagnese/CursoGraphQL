const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Qualquer string'
    },
    horaAtual() {
        return `${new Date}`
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana',
            email: 'teste@teste',
            idade: 23,
            salario_real: 123.12,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Produto 1',
            preco: 100,
            desconto: 0
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const ret = usuarios
            .filter(u => u.id === id)
        return ret ? ret[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const ret = perfis
            .filter(p => p.id === id)
        return ret ? ret[0] : null
    }
}