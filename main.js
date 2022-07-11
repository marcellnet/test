function buttonClick() {
  var nama = document.getElementById("nama");
  var nomer = document.getElementById("nomer");
  var pesan = document.getElementById("pesan");
  var pesan = document.getElementById("pesan");
  var form = document.forms["mrc-contact"];
  var myAlert = document.getElementById("myalert");
  var myAlertw = document.getElementById("myalertw");
  // var sukses = document.getElementById("sukses");
  // var errorNodes = document.getElementById("error");

  var gabungan = "Nama%20%3A%20" + nama.value + "%0ANomor%20%3A%20" + nomer.value + "%0APesan%20%3A%20" + pesan.value;

  var token = "5493881306:AAHK-1aPwfqTi4I0nLZc838tBq9WSS73yIA";
  var grup = "5111025809";

  $.ajax({
    url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
    method: `POST`,
  });

  form.reset();
  myAlert.classList.toggle("d-none");
  console.log("sukses test");
}

// on top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
