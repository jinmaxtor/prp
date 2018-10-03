/**
 * TransaccionModel.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Transaccion',

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

        suma: {
            type: 'number',
            required: true,
            unique: false,
            columnType: 'double(12,2)'
        },

        categoria: {
            type: 'string',
            required: true,
            columnType: "enum('Servicios Basicos', 'Pasajes', 'Comida', 'ropa', 'Bebida', 'Salario', 'Mesada', 'Regalo')",
            maxLength: 20
        },

        fecha: {
            type: 'ref',
            required: true,
            columnType: 'datetime'
        },

        descripcion: {
            type: 'string',
            required: false,
            unique: false,
            maxLength: 30
        },

        imagen: {
            type: 'string',
            required: false,
            unique: false,
            maxLength: 10
        },

        tipo: {
            type: 'string',
            required: true,
            columnType: "enum('Ingreso', 'Gasto')",
            maxLength: 8
        },

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        cuenta: {
            columnName: 'idCuenta',
            model: 'CuentaModel'
        },

        eventos: {
            collection: 'EventoModel',
            via: 'transaccion',
            through: 'TransaccionEventoModel'
        },
    },

    listarIngresos: async function (parametros) {
        var idUsuario = parametros.idUsuario;
        var idCuenta = parametros.idCuenta;
        var tipoIngreso = 1;

        if (idUsuario) {
            var query = `Select t.id, t.nombre, t.suma, t.fecha, t.descripcion, t.tipo, t.idCuenta, t.categoria
                         FROM transaccion t
                         INNER JOIN cuenta c on t.idCuenta = c.id
                         INNER JOIN usuario u on c.idUsuario = u.id
                         where t.tipo = $1 and u.id = $2`;
            var params = [tipoIngreso, idUsuario];
            var ingresos = await sails.sendNativeQuery(query, params);
            //var ingresos = await TransaccionModel.find({tipo: 1}).populate("cuenta").populate("usuario");
            return ingresos.rows;
        }

        if (idCuenta) {
            var ingresos = await TransaccionModel.find({tipo: 1}).populate("cuenta", {id: idCuenta});
            return ingresos;
        }
    },

    listarGastos: async function (parametros) {
        var idUsuario = parametros.idUsuario;
        var idCuenta = parametros.idCuenta;
        var tipoGasto = 2; // => Gasto

        if (idUsuario) {
            var query = `Select t.id, t.nombre, t.suma, t.fecha, t.descripcion, t.tipo, t.idCuenta, t.categoria
                         FROM transaccion t
                         INNER JOIN cuenta c on t.idCuenta = c.id
                         INNER JOIN usuario u on c.idUsuario = u.id
                         where t.tipo = $1 and u.id = $2`;
            var params = [tipoGasto, idUsuario];
            var gastos = await sails.sendNativeQuery(query, params);
            return gastos.rows;
        }

        if (idCuenta) {
            var gastos = await TransaccionModel.find({tipo: 2}).populate("cuenta", {id: idCuenta});
            return gastos;
        }
    },

};

