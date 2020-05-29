var debug = require("debug")("evaluate");
var ensure = require("./helper/ensure");

function evaluate(vari, type, def) {
  debug("Initializing evaluate lib");
  if (Object.keys(arguments).length < 1) {
    debug("evaluate was called without any arguments");
    throw new TypeError("You must specified an variable and type to evaluate");
  }

  if (!type) {
    debug("type variable is required");
    throw new TypeError("You must send the 'type' of variable is evaluated.");
  }

  var method = ensure[type];
  debug("selected type: " + type);

  if (!method) {
    debug(type + " type if not supported yet");
    throw new TypeError(
      "Specified type " + type + " is invalid. See the supported types"
    );
  }

  return method(vari, def);
}

module.exports = evaluate;
