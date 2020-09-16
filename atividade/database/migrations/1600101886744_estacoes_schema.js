'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstacoesSchema extends Schema {
  up () {
    this.create('estacoes', (table) => {
      table.increments()
      table.string('serial')
      table.string('lat')
      table.string('lon')
      table.string('nome', '[length=100]')
      table.timestamps()
    })
  }

  down () {
    this.drop('estacoes')
  }
}

module.exports = EstacoesSchema
