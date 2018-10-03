/**
 * UsuarioModel.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Usuario',

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        nombres: {
            type: 'string',
            required: true,
            unique: false,
            maxLength: 30
        },

        apellidos: {
            type: 'string',
            required: false,
            unique: false,
            maxLength: 30
        },

        genero: {
            type: 'string',
            required: true,
            columnType: "enum('Masculino', 'Femenino')",
            maxLength: 20,
        },

        fechaNacimiento: {
            type: 'number',
            required: false,
            columnType: 'datetime'
        },

        correo: {
            type: 'string',
            required: true,
            unique: false,
            maxLength: 40,
        },

        contrasena: {
            type: 'string',
            required: true,
            unique: false,
            maxLength: 40,
            encrypt: true,
            protect: true
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        monedas: {
            collection: 'MonedaModel',
            via: 'usuario'
        },

        cuentas: {
            collection: 'CuentaModel',
            via: 'usuario'
        },

        eventos: {
            collection: 'EventoModel',
            via: 'usuario'
        },

        tareas: {
            collection: 'TareaModel',
            via: 'usuario'
        },

        notas: {
            collection: 'NotaModel',
            via: 'usuario'
        }
    },

    validarUsuario: async function (correo, contrasena) {
        var usuario = await UsuarioModel.findOne({correo: correo}).decrypt();

        if (!usuario) {
            throw require('flaverr')({
                message: `No existe un usuario con w/ correo=${opts.correo}.`,
                code: 'E_NOEXISTE_USUARIO'
            });
        }

        if (usuario.contrasena != contrasena) {
            throw require('flaverr')({
                message: `La w/ contrseña=${opts.contrasena} es incorrecta.`,
                code: 'E_ERRORCONTRASENA_USUARIO'
            });
        }

        return usuario;
    },


};

