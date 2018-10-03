/**
 * CuentaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    /**
     * `CuentaController.listar()`
     */
    listar: async function (req, res) {
        var idUs = 1;
        var ajax = req.param('ajax');
        sails.log(ajax);

        try {
            var cuentas = await CuentaModel.find({
                where: {usuario: idUs},
                select: ['id', 'nombre', 'balance', 'icono', 'porDefecto', 'moneda']
            });
            var monedas = await MonedaModel.find({where: {usuario: idUs}, select: ['id', 'nombre', 'abreviatura']});

            if (ajax) {
                return res.json({data: cuentas, itemsCount: cuentas.length});
            }

            return res.view('pages/Finanzas/CuentaView', {
                vista: {
                    ingreso: true,
                    otro: true,
                    datos: {
                        cuentas: cuentas,
                        monedas: monedas
                    },
                }
            });
        } catch (e) {
            sails.log(e.message);
            return res.redirect('/usuario/login');
        }
    },

    /**
     * `CuentaController.adicionar()`
     */
    adicionar: async function (req, res) {
        var nombre = req.body.nombre.trim();
        var moneda = parseInt(req.body.moneda);
        var porDefecto = parseInt(req.body.porDefecto);
        var balance = parseFloat(req.body.balance);
        var icono = req.body.icono.trim();

        var idUsuario = 1;


        try {
            var nuevaCuenta = await CuentaModel.create({
                nombre: nombre,
                moneda: moneda,
                porDefecto: porDefecto,
                balance: balance,
                icono: icono,
                usuario: idUsuario,
                moneda: moneda
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
     * `CuentaController.editar()`
     */
    editar: async function (req, res) {
        return res.json({
            todo: 'editar() is not implemented yet!'
        });
    },

    /**
     * `CuentaController.eliminar()`
     */
    eliminar: async function (req, res) {
        return res.json({
            todo: 'eliminar() is not implemented yet!'
        });
    }

};

