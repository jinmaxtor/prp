/**
 * EventoModel.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Evento',

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        titulo: {
            type: 'string',
            required: true,
            unique: false,
            maxLength: 20
        },

        descripcion: {
            type: 'string',
            required: false,
            unique: false,
            maxLength: 40
        },

        lugar: {
            type: 'string',
            required: false,
            unique: false,
            maxLength: 40
        },

        estado: {
            type: 'number',
            required: true,
            unique: false
        },

        fechaInicio: {
            type: 'number',
            required: true,
            columnType: 'datetime'
        },

        fechaFin: {
            type: 'number',
            required: true,
            columnType: 'datetime'
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        usuario: {
            columnName: 'idUsuario',
            model: 'UsuarioModel'
        },

        transacciones: {
            collection: 'TransaccionModel',
            via: 'evento',
            through: 'TransaccionEventoModel'
        },

        tareas: {
            collection: 'TareaModel',
            via: 'evento',
            through: 'TareaEventoModel'
        },

        notas: {
            collection: 'NotaModel',
            via: 'evento',
            through: 'NotaEventoModel'
        }
    },

};

