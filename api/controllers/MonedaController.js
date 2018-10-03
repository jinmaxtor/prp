/**
 * MonedaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    /**
     * `MonedaController.listar()`
     */
    listar: async function (req, res) {
        var idUs = 1;
        var ajax = req.param('ajax');
        sails.log(ajax);

        try {
            var monedas = await MonedaModel.find({where: {usuario: idUs}, select: ['id', 'nombre', 'abreviatura']});

            if (ajax) {
                return res.json({data: monedas, itemsCount: monedas.length});
            }

            return res.view('pages/Finanzas/MonedaView', {
                vista: {
                    ingreso: true,
                    otro: true,
                    datos: {
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
     * `MonedaController.adicionar()`
     */
    adicionar: async function (req, res) {
        var nombre = req.body.nombre.trim();
        var abreviatura = req.body.abreviatura.trim();

        var idUsuario = 1;


        try {
            var nuevaCuenta = await MonedaModel.create({
                nombre: nombre,
                abreviatura: abreviatura,
                usuario: idUsuario,
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
     * `MonedaController.editar()`
     */
    editar: async function (req, res) {
        return res.json({
            todo: 'editar() is not implemented yet!'
        });
    },

    /**
     * `MonedaController.eliminar()`
     */
    eliminar: async function (req, res) {
        return res.json({
            todo: 'eliminar() is not implemented yet!'
        });
    }

};

