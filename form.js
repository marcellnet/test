// function getProductUrl(keyword) {
//   var nama = document.getElementById("nama");
//   var nomer = document.getElementById("nomer");
//   var pesan = document.getElementById("pesan");
//   var pesan = document.getElementById("pesan");

//   var gabungan = "Nama%20%3A%20" + nama.value + "%0ANomor%20%3A%20" + nomer.value + "%0APesan%20%3A%20" + pesan.value;

//   var token = "5493881306:AAHK-1aPwfqTi4I0nLZc838tBq9WSS73yIA";
//   var grup = "5111025809";

//   $.ajax({
//     url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
//     method: `POST`,
//   });
// }

function getProductsUrl() {
  return `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`;
}

function getProducts() {
  var nama = document.getElementById("nama");
  var nomer = document.getElementById("nomer");
  var pesan = document.getElementById("pesan");
  var pesan = document.getElementById("pesan");

  var gabungan = "Nama%20%3A%20" + nama.value + "%0ANomor%20%3A%20" + nomer.value + "%0APesan%20%3A%20" + pesan.value;

  var token = "5493881306:AAHK-1aPwfqTi4I0nLZc838tBq9WSS73yIA";
  var grup = "5111025809";
}

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

function displayProducts() {
  data.data.products.forEach((product) => displayProduct(product));
}

function displayProduct() {
  const productLi = document.createElement("li");
  productLi.textContent = product.name;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
}

function clearTableProducts() {
  const productUl = document.getElementById("table-products");
  productUl.textContent = "";
}

function displayTableProducts(data) {
  const table = document.createElement("table");
  table.setAttribute("border", 1);

  let index = 0;
  data.data.products.forEach((product) => {
    table.insertRow(index).insertCell(0).innerText = product.name;
    index++;
  });

  const tableProduct = document.getElementById("table-products");
  tableProduct.appendChild(table);
}

function buttonClick() {
  getProducts(document.getElementById("keyword").value);
}
