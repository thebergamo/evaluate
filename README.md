# evaluate
========
[![Build Status](https://travis-ci.org/thebergamo/evaluate.svg)](https://travis-ci.org/thebergamo/evaluate) [![Coverage Status](https://coveralls.io/repos/thebergamo/evaluate/badge.svg?branch=master)](https://coveralls.io/r/thebergamo/evaluate?branch=master)

Evaluate your variables, with a simples function. 

This is a simple way to check if a variable is setted and `evaluate` a value default depends the type of the variable.

##Instalation

```javascript
npm install --save evaluate
```

##How to use

###evaluate(vari, type)
The evaluate function need a variable and a type to works. In other cases it will throw an error.

```javascript
var evaluate = require('evaluate');

function(vari, varDate) {
	vari = evaluate(vari, 'string');
	varDate = evaluate(varDate, 'date');

	console.log(vari, varDate); // '', Thu Sep 17 2015 15:04:56 GMT-0300 (BRT) 
}
```

##Supported Types

###Number
```javascript
evaluate(vari, 'number'); // If vari is undefined the returned value is 0
```

##String
```javascript
evaluate(vari, 'string'); // If vari is undefined the returned value is ''
```

##Boolean
```javascript
evaluate(vari, 'boolean'); // If vari is undefined the returned value is false
```

##Date
```javascript
evaluate(vari, 'date'); // If vari is undefined the returned value is the current date
```

##Object
```javascript
evaluate(vari, 'object'); // If vari is undefined the returned value is {}
```

##Array
```javascript
evaluate(vari, 'array'); // If vari is undefined the returned value is []
```
