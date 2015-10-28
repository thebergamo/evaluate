var ensure = require('./helper/ensure');

function evaluate(vari, type, def) {
	if(Object.keys(arguments).length < 1){
		throw new TypeError('You must specified an variable and type to evaluate');
	}
	
	if(!type) {
		throw new TypeError('You must send the \'type\' of variable is evalated.');
	}

	var method = ensure[type];

	if(!method){
		throw new TypeError('Specified type '+type+' is invalid. See the supported types');
	}

	return method(vari, def);
}

module.exports = evaluate;
