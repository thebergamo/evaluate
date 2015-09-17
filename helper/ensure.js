var ensure = {
	'number': ensureNumber,
	'boolean': ensureBoolean,
	'string': ensureString, 
	'date': ensureDate,
	'object': ensureObject,
	'array': ensureArray
};

function ensureNumber(vari) {
	if(typeof vari !== 'number' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a Number');	
	}	

	return vari ? vari : 0;
}

function ensureBoolean(vari) {
	if(typeof vari !== 'boolean' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a Boolean');	
	}	

	return vari ? vari : false;
}

function ensureString(vari) {
	if(typeof vari !== 'string' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a String');	
	}	

	return vari ? vari : '';
}

function ensureDate(vari) {
	if(!(vari instanceof Date) && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a Date');	
	}	

	return vari ? vari : new Date();
}

function ensureObject(vari) {
	if(typeof vari !== 'object' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t an Object');	
	}	

	return vari ? vari : {};
}

function ensureArray(vari) {
	if(!Array.isArray(vari) && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t an Array');	
	}	

	return vari ? vari : [];
}

module.exports = ensure;

