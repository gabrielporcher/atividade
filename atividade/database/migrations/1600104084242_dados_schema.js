'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DadosSchema extends Schema {
  up () {
    this.create('dados', (table) => {
      table.increments()
      table.integer('estacao_id').notNullable()
      table.float('temperatura')
      table.float('velocidade_vento')
      table.float('umidade')
      table.string('data')
      table.timestamps()
    })
  }

  down () {
    this.drop('dados')
  }
}

module.exports = DadosSchema
