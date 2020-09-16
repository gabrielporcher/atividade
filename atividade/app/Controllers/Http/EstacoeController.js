'use strict'

const Estacoes = use("App/Models/Estacoe")

class EstacoeController {
  
  async index ({ request, response, view }) {
    const estacoes = await Estacoes.all();

    return estacoes
  }

  async show ({request, params}) {
    const estacoes = await Estacoes.findOrFail(params.id);

    return estacoes;
  }

  async store ({ request, response, view }) {
    const data = request.only(["serial", "lat", "lon", "nome"]);

    const estacao = await Estacoes.create(data);

    return estacao;
  }

  async update ({ params, request, response }) {
    const estacao = await Estacoes.findOrFail(params.id);
    const data = request.only(["serial", "lat", "lon", "nome"]);

    estacao.merge(data);
    await estacao.save();

    return estacao;
  }

  async destroy ({ params, request, response }) {
    const estacao = await Estacoes.findOrFail(params.id);

    await estacao.delete();
  }
}

module.exports = EstacoeController
