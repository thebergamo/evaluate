var ensure = {
	'number': ensureNumber,
	'boolean': ensureBoolean,
	'string': ensureString, 
	'date': ensureDate,
	'object': ensureObject,
	'array': ensureArray
};

function ensureNumber(vari, def) {
	if(typeof vari !== 'number' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a Number');	
	}	

  def = def ? def : 0;

	return vari ? vari : def;
}

function ensureBoolean(vari, def) {
	if(typeof vari !== 'boolean' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a Boolean');	
	}	

  def = def ? def : false;

	return vari ? vari : def;
}

function ensureString(vari, def) {
	if(typeof vari !== 'string' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a String');	
	}

  def = def ? def : '';  

	return vari ? vari : def;
}

function ensureDate(vari, def) {
	if(!(vari instanceof Date) && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t a Date');	
  }
  
  def = def ? def : new Date();  

	return vari ? vari : def;
}

function ensureObject(vari, def) {
	if(typeof vari !== 'object' && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t an Object');	
	}	

  def = def ? def : {};
	return vari ? vari : def;
}

function ensureArray(vari, def) {
	if(!Array.isArray(vari) && typeof vari !== 'undefined') {
		throw new TypeError('Your variable is already setted and isn\'t an Array');	
	}	

  def = def ? def : [];
	return vari ? vari : def;
}

module.exports = ensure;

