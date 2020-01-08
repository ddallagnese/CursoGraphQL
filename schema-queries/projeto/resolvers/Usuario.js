const { perfis } = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const ret = perfis
            .filter(p => p.id === usuario.id)
        return ret ? ret[0] : null
    }
}