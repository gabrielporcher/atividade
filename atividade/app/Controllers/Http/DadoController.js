'use strict'

const Dado = use("App/Models/Dado")

class DadoController {

  async index ({ request, response, view }) {
    const dados = await Dado.all();

    return dados;
  }

  async show ({request, params}) {
    const dados = await Dado.findOrFail(params.id);

    return dados;
  }

  async store ({ request, response, view }) {
    const data = request.only(["estacao_id", "temperatura", "velocidade_vento", "umidade", "data"]);

    const dado = await Dado.create(data);

    return dado;
  }

  async update ({ params, request, response }) {
    const dado = await Dado.findOrFail(params.id);
    const data = request.only(["estacao_id", "temperatura", "velocidade_vento", "umidade", "data"]);

    dado.merge(data);
    await dado.save();

    return dado;
  }

  async destroy ({ params, request, response }) {
    const dado = await Dado.findOrFail(params.id);

    await dado.delete();
  }
}

module.exports = DadoController
