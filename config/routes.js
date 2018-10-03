/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


    //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
    //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
    //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': '/usuario/login',

    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the routes in this file, it   *
     * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
     * not match any of those, it is matched against static assets.             *
     *                                                                          *
     ***************************************************************************/
    'GET /login': {
        fn: function (req, res) {
            console.log("holas de mar");
            return res.ok("se ejecuto");
        }
    },

    //RUTAS DASHBOARD
    'GET /dashboard': {
        view: 'pages/Dashboard/Dashboard',
        locals: {
            vista: {dashboard: true, otro: true},
        }
    },

    //RUTAS USUARIO-------------------------------------------------
    'GET /usuario/registrar': {
        controller: 'UsuarioController',
        action: 'formRegistrar'
    },

    'POST /usuario/registrar': {
        controller: 'UsuarioController',
        action: 'registrar'
    },

    'GET /usuario/logout': {
        controller: 'UsuarioController',
        action: 'logout'
    },

    'GET /usuario/login': {
        controller: 'UsuarioController',
        action: 'formLogin'
    },

    'POST /usuario/login': {
        controller: 'UsuarioController',
        action: 'login'
    },

    'GET /usuario/perfil': {
        controller: 'UsuarioController',
        action: 'perfil'
    },

    'GET /usuario/editar': {
        controller: 'UsuarioController',
        action: 'formEditar'
    },

    'POST /usuario/editar': {
        controller: 'UsuarioController',
        action: 'editar'
    },

    //RUTAS EVENTO---------------------------------------------
    'GET /evento/listar': {
        controller: 'EventoController',
        action: 'listar'
    },

    'POST /evento/ver': {
        controller: 'EventoController',
        action: 'ver'
    },

    'POST /evento/adicionar': {
        controller: 'EventoController',
        action: 'adicionar'
    },

    'POST /evento/editar': {
        controller: 'EventoController',
        action: 'editar'
    },

    'POST /evento/eliminar': {
        controller: 'EventoController',
        action: 'eliminar'
    },

    //RUTAS NOTA

    //RUTAS TAREA

    //RUTAS CUENTA
    'GET /cuenta/listar/:ajax?': {
        controller: 'CuentaController',
        action: 'listar'
    },

    'POST /cuenta/adicionar': {
        controller: 'CuentaController',
        action: 'adicionar'
    },

    'POST /cuenta/editar': {
        controller: 'CuentaController',
        action: 'editar'
    },

    'POST /cuenta/eliminar': {
        controller: 'CuentaController',
        action: 'eliminar'
    },


    //RUTAS MONEDA
    'GET /moneda/listar/:ajax?': {
        controller: 'MonedaController',
        action: 'listar'
    },

    'POST /moneda/adicionar': {
        controller: 'MonedaController',
        action: 'adicionar'
    },

    'POST /moneda/editar': {
        controller: 'MonedaController',
        action: 'editar'
    },

    'POST /moneda/eliminar': {
        controller: 'MonedaController',
        action: 'eliminar'
    },


    //RUTAS INGRESO
    'GET /ingreso/listar/:ajax?': {
        controller: 'IngresoController',
        action: 'listar'
    },

    'POST /ingreso/adicionar': {
        controller: 'IngresoController',
        action: 'adicionar'
    },

    'POST /ingreso/editar': {
        controller: 'IngresoController',
        action: 'editar'
    },

    'POST /ingreso/eliminar': {
        controller: 'IngresoController',
        action: 'eliminar'
    },

    //RUTAS EGRESO

    'GET /gasto/listar/:ajax?': {
        controller: 'GastoController',
        action: 'listar'
    },

    'POST /gasto/adicionar': {
        controller: 'GastoController',
        action: 'adicionar'
    },

    'POST /gasto/editar': {
        controller: 'GastoController',
        action: 'editar'
    },

    'POST /gasto/eliminar': {
        controller: 'GastoController',
        action: 'eliminar'
    },


    //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
    //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
    //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝


    //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
    //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
    //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


    //  ╔╦╗╦╔═╗╔═╗
    //  ║║║║╚═╗║
    //  ╩ ╩╩╚═╝╚═╝


};
