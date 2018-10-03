/**
 * GastoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    /**
     * `GastoController.listar()`
     */
    listar: async function (req, res) {
        var idUs = 1;
        var ajax = req.param('ajax');
        sails.log(ajax);

        try {
            var gastos = await TransaccionModel.listarGastos({idUsuario: idUs});
            var cuentas = await CuentaModel.find({where: {usuario: idUs}, select: ['id', 'nombre']});

            if (ajax) {
                return res.json({data: gastos, itemsCount: gastos.length});
            }

            return res.view('pages/Finanzas/GastoView', {
                vista: {
                    ingreso: true,
                    otro: true,
                    datos: {
                        gastos: gastos,
                        cuentas: cuentas
                    },
                }
            });
        } catch (e) {
            sails.log(e.message);
            return res.redirect('/usuario/login');
        }
    },

    /**
     * `GastoController.ver()`
     */
    ver: async function (req, res) {
        return res.json({
            todo: 'ver() is not implemented yet!'
        });
    },

    /**
     * `GastoController.adicionar()`
     */
    adicionar: async function (req, res) {

        var nombre = req.body.nombre.trim();
        var suma = parseFloat(req.body.suma);
        var categoria = req.body.categoria;
        var fecha = req.body.fecha;
        var descripcion = req.body.descripcion.trim();
        var imagen = 'NOFILE';
        var tipoTransaccion = 2; // => Gasto

        var idCuenta = parseInt(req.body.cuenta);

        try {
            var nuevoGasto = await TransaccionModel.create({
                nombre: nombre,
                suma: suma,
                categoria: categoria,
                fecha: fecha,
                descripcion: descripcion,
                imagen: imagen,
                tipo: tipoTransaccion,
                cuenta: idCuenta
            });

            return res.json({
                terminado: true
            });
        } catch (e) {
            sails.log(e);
            return res.json({
                terminado: false
            });
        }
    },

    /**
     * `GastoController.editar()`
     */
    editar: async function (req, res) {
        return res.json({
            todo: 'editar() is not implemented yet!'
        });
    },

    /**
     * `GastoController.eliminar()`
     */
    eliminar: async function (req, res) {
        return res.json({
            todo: 'eliminar() is not implemented yet!'
        });
    }

};

