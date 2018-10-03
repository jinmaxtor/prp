/**
 * CuentaModel.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Cuenta',

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        nombre: {
            type: 'string',
            required: true,
            unique: false,
            maxLength: 20
        },

        balance: {
            type: 'number',
            required: true,
            unique: false,
            columnType: 'double(12,2)'
        },

        icono: {
            type: 'string',
            required: false,
            unique: false,
            maxLength: 10
        },

        porDefecto: {
            type: 'boolean',
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

        moneda: {
            columnName: 'idMoneda',
            model: 'MonedaModel'
        },

        transacciones: {
            collection: 'TransaccionModel',
            via: 'cuenta'
        }
    },

};

