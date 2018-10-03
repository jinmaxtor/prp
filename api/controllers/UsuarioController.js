/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    /**
     * `UsuarioController.formRegistrar()`
     */
    formRegistrar: async function (req, res) {

        return res.view('pages/Usuario/RegisterView', {
            vista: {register: true},
        });
    },

    /**
     * `UsuarioController.registrar()`
     */
    registrar: async function (req, res) {
        var nombre = req.body.name.trim();
        var correo = req.body.email.toLowerCase().trim();
        var contrasena = req.body.password.trim();
        var confirmacion = req.body.passwordCheck.trim();

        if (contrasena != confirmacion || nombre == '' || correo == '') {
            return res.redirect('/usuario/registrar');
        }

        try {
            var nuevoUsuario = await UsuarioModel.create({
                nombres: nombre,
                genero: 'Masculino',
                correo: correo,
                contrasena: contrasena,
            });

            return res.redirect('/usuario/login');
        }
        catch (e) {
            sails.log(e);
            return res.redirect('/usuario/registrar');
        }
    },

    /**
     * `UsuarioController.formLogin()`
     */
    formLogin: function (req, res) {
        return res.view('pages/Usuario/LoginView', {
            vista: {login: true},
        });
    },

    /**
     * `UsuarioController.login()`
     */
    login: async function (req, res) {
        var correo = req.body.email.toLowerCase();
        var contrasena = req.body.password;
        var remember = req.body.remember;
        try {
            var usuario = await UsuarioModel.validarUsuario(correo, contrasena);

            if (remember) {
                req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
            }

            sails.log(usuario);

            req.session.userId = usuario.id;
            return res.redirect('/dashboard');
        }
        catch (e) {
            sails.log(e.message);
            return res.redirect('/usuario/login');
        }
    },

    logout: async function (req, res) {
        // Clear the `userId` property from this session.
        delete req.session.userId;

        return res.redirect('/usuario/login');
    },

    /**
     * `UsuarioController.perfil()`
     */
    perfil: async function (req, res) {
        return res.json({
            todo: 'perfil() is not implemented yet!'
        });
    },

    /**
     * `UsuarioController.formEditar()`
     */
    formEditar: async function (req, res) {
        return res.json({
            todo: 'formEditar() is not implemented yet!'
        });
    },

    /**
     * `UsuarioController.editar()`
     */
    editar: async function (req, res) {
        return res.json({
            todo: 'editar() is not implemented yet!'
        });
    }

};

