// Fungsi untuk menyimpan data formulir ke cookie
function saveForm() {
  var nama = document.getElementById("nama").value;
  var jumlah = document.getElementById("jumlah").value;
  var tanggal = document.getElementById("tanggal").value;
  var keterangan = document.getElementById("keterangan").value;

  var item = { nama, jumlah, tanggal, keterangan };
  var itemJson = JSON.stringify(item);

  // Tambahkan expires dan path
  var expires = new Date();
  expires.setTime(expires.getTime() + (24 * 60 * 60 * 1000)); // Expire dalam 1 hari
  document.cookie = "savedItem=" + itemJson + ";expires=" + expires.toUTCString() + ";path=/";

  console.log("Cookie disimpan:", document.cookie); // Debugging
}

// Fungsi untuk mendapatkan data formulir dari cookie
function getSavedItem() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith("savedItem=")) {
          var cookieValue = cookie.substring("savedItem=".length);
          try {
              var item = JSON.parse(cookieValue);
              if (item) {
                  document.getElementById("nama").value = item.nama || "";
                  document.getElementById("jumlah").value = item.jumlah || "";
                  document.getElementById("tanggal").value = item.tanggal || "";
                  document.getElementById("keterangan").value = item.keterangan || "";
              }
          } catch (e) {
              console.error("Error parsing cookie:", e);
          }
          break;
      }
  }
  console.log("Cookie dibaca:", document.cookie); // Debugging
}