/**
 * IngresoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    /**
     * `IngresoController.listar()`
     */
    listar: async function (req, res) {

        var idUs = 1;
        var ajax = req.param('ajax');
        sails.log(ajax);

        try {
            var ingresos = await TransaccionModel.listarIngresos({idUsuario: idUs});
            var cuentas = await CuentaModel.find({where: {usuario: idUs}, select: ['id', 'nombre']});

            if (ajax) {
                return res.json({data: ingresos, itemsCount: ingresos.length});
            }

            return res.view('pages/Finanzas/IngresoView', {
                vista: {
                    ingreso: true,
                    otro: true,
                    datos: {
                        ingresos: ingresos,
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
     * `IngresoController.ver()`
     */
    ver: async function (req, res) {
        return res.json({
            todo: 'ver() is not implemented yet!'
        });
    },

    /**
     * `IngresoController.adicionar()`
     */
    adicionar: async function (req, res) {

        var nombre = req.body.nombre.trim();
        var suma = parseFloat(req.body.suma);
        var categoria = req.body.categoria;
        var fecha = req.body.fecha;
        var descripcion = req.body.descripcion.trim();
        var imagen = 'NOFILE';
        var tipoTransaccion = 1; // => Ingreso

        var idCuenta = parseInt(req.body.cuenta);

        try {
            var nuevoIngreso = await TransaccionModel.create({
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
     * `IngresoController.editar()`
     */
    editar: async function (req, res) {
        var id = parseInt(req.body.id);
        var nombre = req.body.nombre.trim();
        var suma = parseFloat(req.body.suma);
        var categoria = req.body.categoria;
        var fecha = req.body.fecha;
        var descripcion = req.body.descripcion.trim();
        var imagen = 'NOFILE';
        var tipoTransaccion = 1; // => Ingreso

        var idCuenta = parseInt(req.body.cuenta);

        try {
            var actualizadoIngreso = await TransaccionModel.update({id: id}, {
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
     * `IngresoController.eliminar()`
     */
    eliminar: async function (req, res) {
        return res.json({
            todo: 'eliminar() is not implemented yet!'
        });
    }

};

