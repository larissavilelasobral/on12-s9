const contatosJson = require("../models/contatos.json")

const getAll = (req, res) => {
    res.status(200).send(contatosJson)
}

const getByName = (req, res) => {
    const nomeRequerido = req.query.nome
    const nomeFiltro = contatosJson.find(nomes => nomes.nome.includes(nomeRequerido))

    res.status(200).send(nomeFiltro)
}

const getById = (req, res) => {
    const idRequerido = req.params.id
    const contatoFiltro = contatosJson.find(contato => contato.id == idRequerido)

    res.status(200).send(contatoFiltro)
}

const newContato = (req, res) => {
    const nomeContato = req.body.nome;
    const contatoContato = req.body.celular;
    const redesContato = req.body.redesSociais;

    const novoCadastro = {
        id: "268426982468243542",
        nome: nomeContato,
        celular: contatoContato,
        redesSociais: redesContato
    }

    contatosJson.push(novoCadastro);
    res.status(200).send(novoCadastro);

}

const deletarContato = (req, res) => {
    const idSolicitado = req.params.id;
    const contatosFiltrados = contatosJson.find(contatos => contatos.id == idSolicitado)
    const indice = contatosJson.indexOf(contatosFiltrados)

    contatosJson.splice(indice, 1);

    res.status(200).send(
        [
            {
                'message': 'contato deletado com sucesso'
            }
        ]
    )
}

module.exports = {
    getAll,
    getById,
    getByName,
    newContato,
    deletarContato
}