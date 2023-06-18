function sortProducts() {
    var sortOption = document.getElementById("sort").value;
    var productList = document.querySelector(".product-list");
    var products = Array.from(document.querySelectorAll(".product"));
  
    switch (sortOption) {
      case "priceAsc":
        products.sort(function (a, b) {
          var priceA = parseFloat(a.querySelector("p").textContent.slice(1));
          var priceB = parseFloat(b.querySelector("p").textContent.slice(1));
          return priceA - priceB;
        });
        break;
  
      case "priceDesc":
        products.sort(function (a, b) {
          var priceA = parseFloat(a.querySelector("p").textContent.slice(1));
          var priceB = parseFloat(b.querySelector("p").textContent.slice(1));
          return priceB - priceA;
        });
        break;
  
      default:
        return;
    }
  
}