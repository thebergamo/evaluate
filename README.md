# evaluate
========

[![Build Status](https://travis-ci.org/thebergamo/evaluate.svg)](https://travis-ci.org/thebergamo/evaluate) [![Coverage Status](https://coveralls.io/repos/thebergamo/evaluate/badge.svg?branch=master)](https://coveralls.io/r/thebergamo/evaluate?branch=master)

Evaluate your variables, with a simples function. 

This is a simple way to check if a variable is setted and `evaluate` a value default depends the type of the variable.

## Instalation

```javascript
npm install --save evaluate
```

## How to use

### evaluate(vari, type, default)
The evaluate function need a variable and a type to works. In other cases it will throw an error. You can send a default value to the variable if the current variable is undefined.

```javascript
var evaluate = require('evaluate');

function(vari, varDate) {
	vari = evaluate(vari, 'string');
	varDate = evaluate(varDate, 'date');
  varInt = evaluate(varInt, 'integer', 10);

	console.log(vari, varDate, varInt); // '', Thu Sep 17 2015 15:04:56 GMT-0300 (BRT), 10 
}
```

## Supported Types

### Number
```javascript
evaluate(vari, 'number', default); // If vari is undefined and default is not send  the returned value is 0
```

## String
```javascript
evaluate(vari, 'string', default); // If vari is undefined and default is not send  the returned value is ''
```

## Boolean
```javascript
evaluate(vari, 'boolean', default); // If vari is undefined and default is not send  the returned value is false
```

## Date
```javascript
evaluate(vari, 'date', default); // If vari is undefined and default is not send  the returned value is the current date
```

## Object
```javascript
evaluate(vari, 'object', default); // If vari is undefined and default is not send  the returned value is {}
```

## Array
```javascript
evaluate(vari, 'array', default); // If vari is undefined and default is not send the returned value is []
```
