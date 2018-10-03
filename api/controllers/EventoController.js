/**
 * EventoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    /**
     * `EventoController.listar()`
     */
    listar: async function (req, res) {

        return res.view('pages/Eventos/EventoView', {
            vista: {evento: true, otro: true}
        });

    },

    /**
     * `EventoController.ver()`
     */
    ver: async function (req, res) {
        return res.json({
            todo: 'ver() is not implemented yet!'
        });
    },

    /**
     * `EventoController.adicionar()`
     */
    adicionar: async function (req, res) {
        return res.json({
            todo: 'adicionar() is not implemented yet!'
        });
    },

    /**
     * `EventoController.editar()`
     */
    editar: async function (req, res) {
        return res.json({
            todo: 'editar() is not implemented yet!'
        });
    },

    /**
     * `EventoController.eliminar()`
     */
    eliminar: async function (req, res) {
        return res.json({
            todo: 'eliminar() is not implemented yet!'
        });
    }

};

