/**
 * TareaModel.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Tarea',

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        descripcion: {
            type: 'string',
            required: true,
            unique: false,
            maxLength: 40
        },

        fecha: {
            type: 'number',
            required: true,
            columnType: 'datetime'
        },

        tipo: {
            type: 'string',
            required: true,
            columnType: "enum('Trabajo', 'Reunion', 'Evento')",
            maxLength: 20
        },

        estado: {
            type: 'number',
            required: true,
            unique: false
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

        eventos: {
            collection: 'EventoModel',
            via: 'tarea',
            through: 'TareaEventoModel'
        }
    },

};

