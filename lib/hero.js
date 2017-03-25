'use strict'
// Regular way to make an object
const superman = {
  name: 'Clark Kent',
  alias: 'Superman',
  usePower: function () {
    return 'Leap tall buildings in a single bound'
  }
}

// Constructors always start with a capital
// A constructor is a function
// Hero is our blueprint for all of the superheroes we're going to make
const usePower = function () {
  return this._power
}

const Hero = function (name, alias, power) {
  // Once you create a Hero object, that object will assume these properties
  this.name = name
  this.alias = alias
  // ._power is a hidden function
  this._power = power
  // don't do this - don't put functions inside of constructor functions
  this.usePower = usePower
}

// Use 'new' keyword to create a new instance of your constructor function
// The new keyword creates an empty object
// Then, it attaches the constructor property of Hero to the spiderman object
// Then, it invokes the function
const wonderWoman = new Hero('Diana Prince', 'Wonder Woman', 'Deflects bullets with bracelets')
const spiderman = new Hero('Spiderman')

const Hero = function Hero () {

}

module.exports = Hero
