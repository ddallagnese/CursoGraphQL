const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    let { id } = await db('usuarios')
        .select('id')
        .where({ email })
        .first()
        .catch(err => console.log('SelUsu: '+err.sqlMessage))
    if (!id) {
        [ id ] = await db.insert({ nome, email, senha })
            .into('usuarios')
            .catch(err => console.log('InsUsu: '+err.sqlMessage))
    } else {
        await db('usuarios')
            .where({ id })
            .update({ nome, email, senha })
    }
    return db('usuarios').where({ id })
}

async function salvarPerfil(nome, rotulo) {
    let { id } = await db('perfis')
        .select('id')
        .where({ nome })
        .first()
        .catch(err => console.log('SelPer: '+err.sqlMessage))
    if (!id) {
        [ id ] = await db.insert({ nome, rotulo })
            .into('perfis')
            .catch(err => console.log('InsPer: '+err.sqlMessage))
    } else {
        await db('perfis')
            .where({ id })
            .update({ nome, rotulo })
    }
    return db('perfis').where({ id })
}

async function adicionarPerfis(usuario, ...perfis) {
    for (perfil of perfis) {
        const { qtde } = await db('usuarios_perfis')
            .count('* as qtde')
            .where({ usuario_id: usuario[0].id, perfil_id: perfil[0].id })
            .first()
        if (qtde === 0) {
            db.insert({ usuario_id: usuario[0].id, perfil_id: perfil[0].id })
                .into('usuarios_perfis')
                .catch(err => console.log('InsUsuPer: '+err.sqlMessage))
        }
    }
}

async function executar() {
    const usuario = await salvarUsuario('Ana',
        'ana@empresa.com.br', '123456')
    const perfilA = await salvarPerfil('rh', 'Pessoal')
    const perfilB = await salvarPerfil('fin', 'Financeiro')

    console.log(usuario)
    console.log(perfilA)
    console.log(perfilB)

    await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())