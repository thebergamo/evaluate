var debug = require("debug")("evaluate:ensure");

var ensure = {
  number: ensureNumber,
  boolean: ensureBoolean,
  string: ensureString,
  date: ensureDate,
  object: ensureObject,
  array: ensureArray,
};

function ensureNumber(vari, def) {
  debug("type number is being evaluated");
  if (typeof vari !== "number" && typeof vari !== "undefined") {
    debug("variable: " + vari + " provided is not set or a number");
    throw new TypeError("Your variable is already set and isn't a Number");
  }

  def = def ? def : 0;

  debug("default value is: " + def);

  return vari ? vari : def;
}

function ensureBoolean(vari, def) {
  debug("type boolean is being evaluated");
  if (typeof vari !== "boolean" && typeof vari !== "undefined") {
    debug("variable: " + vari + " provided is not set or a boolean");
    throw new TypeError("Your variable is already set and isn't a Boolean");
  }

  def = def ? def : false;

  debug("default value is: " + def);

  return vari ? vari : def;
}

function ensureString(vari, def) {
  debug("type string is being evaluated");
  if (typeof vari !== "string" && typeof vari !== "undefined") {
    debug("variable: " + vari + " provided is not set or a string");
    throw new TypeError("Your variable is already set and isn't a String");
  }

  def = def ? def : "";

  debug("default value is: " + def);

  return vari ? vari : def;
}

function ensureDate(vari, def) {
  debug("type date is being evaluated");
  if (!(vari instanceof Date) && typeof vari !== "undefined") {
    debug("variable: " + vari + " provided is not set or a date");
    throw new TypeError("Your variable is already set and isn't a Date");
  }

  def = def ? def : new Date();

  debug("default value is: " + def);

  return vari ? vari : def;
}

function ensureObject(vari, def) {
  debug("type object is being evaluated");
  if (typeof vari !== "object" && typeof vari !== "undefined") {
    debug("variable: " + vari + " provided is not set or a object");
    throw new TypeError("Your variable is already set and isn't an Object");
  }

  def = def ? def : {};

  debug("default value is: " + def);

  return vari ? vari : def;
}

function ensureArray(vari, def) {
  debug("type array is being evaluated");
  if (!Array.isArray(vari) && typeof vari !== "undefined") {
    debug("variable: " + vari + " provided is not set or a array");
    throw new TypeError("Your variable is already set and isn't an Array");
  }

  def = def ? def : [];

  debug("default value is: " + def);

  return vari ? vari : def;
}

module.exports = ensure;
