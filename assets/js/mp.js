/*{
    "access_token": "APP_USR-8823864294557049-022422-1dc5f789124e2ff5ba31541771c677de__K_G__-304184724",
    "refresh_token": "TG-5a922451e4b0a8b9082a12d7-304184724",
    "live_mode": true,
    "user_id": 304184724,
    "token_type": "bearer",
    "expires_in": 21600,
    "scope": "offline_access read write"
*/

//https://api.mercadopago.com//checkout/preferences/:id/?access_token=APP_USR-8823864294557049-022422-1dc5f789124e2ff5ba31541771c677de__K_G__-304184724 //

const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'APP_USR-8823864294557049-022422-1dc5f789124e2ff5ba31541771c677de__K_G__-304184724'
});
console.log(mercadopago.payment);
//const mercadopago = require('../../index.html');

exports.run = function (req, res) {
  var preference = {
    items: [
      {
        title: 'Test',
        quantity: 1,
        currency_id: 'CLP',
        unit_price: 10.5
      }
    ]
  };

  mercadopago.preferences.create(preference).then(function (data) {
    res.render('checkout-buttons/basic-preference/button', {
      preference: data
    });
  }).catch(function (error) {
    res.render('500', {
      error: error
    });
  });
};