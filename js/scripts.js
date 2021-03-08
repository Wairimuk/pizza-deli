$(document).ready(function () {
  // Business Logic
  function Pizza(flavor, size, crust, toppings) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
  // Pizza.prototype.pizzaOrder = function () {
  //   return (
  //     this.Flavor + this.Size + this.Crust + this.Toppings
  //   );
  // };
  // UI Logic
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
  });

  $(function () {
    $("#select-size").change(function () {
      let prices = {
        small: 400,
        medium: 600,
        large: 800,
      };
      // let myJSON = JSON.stringify(prices);
      $("input[name=amount1]").val(prices.small, prices.medium, prices.large);
      console.log(
        $("input[name=amount1]").val(prices.small, prices.medium, prices.large)
      );
    });
  });
  // $(function () {
  //   $("#select-crust").change(function () {
  //     let prices = {
  //       crispy: 50,
  //       stuffed: 100,
  //       "Gluten-free": 150,
  //     };
  //     let myJSON = JSON.stringify(prices);
  //     $("input[name=amount1]").val(prices.crispy, prices.stuffed);
  //     console.log($("input[name=amount2]").val(myJSON));
  //   });
  // });
});
