/**
 * Local environment settings
 *
 * Use this file to specify configuration settings for use while developing
 * the app on your personal system.
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */

module.exports = {

    // Any configuration settings may be overridden below, whether it's built-in Sails
    // options or custom configuration specifically for your app (e.g. Stripe, Mailgun, etc.)
    host: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
    port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
    environment: 'development'
    //environment: process.env.NODE_ENV || 'development'

};
