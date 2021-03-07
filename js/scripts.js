$(document).ready(function () {
  // Business Logic
  function Pizza(flavor, size, crust, toppings) {
    this.pizzaFlavor = flavor;
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaToppings = toppings;
  }
  Pizza.prototype.pizzaOrder = function () {
    return this.Flavour + this.pizzaSize + this.pizzaCrust + this.pizzaToppings;
  };
  // UI Logic
});
