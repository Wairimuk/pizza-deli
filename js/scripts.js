$(document).ready(function () {
  // Business Logic
  function Pizza(flavor, size, crust, toppings) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
  Pizza.prototype.pizzaOrder = function () {
    return this.Flavor + this.Size + this.Crust + this.Toppings;
  };
  // UI Logic
  $("#add-address").click(function () {
    $("#add-addresses").show();
  });

  $(document).submit(function (event) {
    event.preventDefault();

    let selectedFlavor = $("flavor#select-flavor").val();
    let selectedSize = $("size#select-size").val();
    let selectedCrust = $("crust#select-crust").val();
    let selectedToppings = $("toppings#select-topping").val();

    let newPizza =
      (selectedFlavor, selectedSize, selectedCrust, selectedToppings);

    $("ul#cart").append(
      "<li><span class='order'>" +
        newPizza.Flavor +
        newPizza.Size +
        newPizza.Crust +
        newPizza.Toppings +
        "</span></li>"
    );
    $("flavor#select-flavor").val("");
    $("size#select-size").val("");
    $("flavor#select-crust").val("");
    $("size#select-topping").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");

    // $(function () {
    //   $("#select-size").change(function () {
    //     let prices = {
    //       small: 400,
    //       medium: 600,
    //       large: 800,
    //     };
    //     $("input[name=amount1]").val(prices.small, prices.medium, prices.large);
  });
});
