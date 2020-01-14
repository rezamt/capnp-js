
var person = { 
   name: 'reza',
   email: 'rezamt@gmail.com',
   phone: '+1234-567-890'
};

var capnp = require('capnp-jcm');

var hr = require("./capnp/hr.capnp");

// Serialized Message - by passing object person
var srm = capnp.serialize(hr.Person, person);

console.log("Creating Capnp Message from Object");
console.log("------------------------------------");
console.log("Object:" + JSON.stringify(person));
console.log("Capnp Message: " + srm.toString('hex'));
console.log("\n");

console.log("Creating Object from Capnp Message");
console.log("------------------------------------");
console.log("Capnp Message: " + srm.toString('hex'));
// De-serialized Message - by passing srm (serialized message)
var obj = capnp.parse( hr.Person, srm);

console.log("Object is " + JSON.stringify(obj));
