// Fungsi untuk menyimpan data formulir ke cookie
function saveForm() {
    var nama = document.getElementById("nama").value;
    var jumlah = document.getElementById("jumlah").value;
    var tanggal = document.getElementById("tanggal").value;
    var keterangan = document.getElementById("keterangan").value;
  
    var item = {
      nama: nama,
      jumlah: jumlah,
      tanggal: tanggal,
      keterangan: keterangan
    };
  
    // Mengubah objek item menjadi string JSON
    var itemJson = JSON.stringify(item);
  
    // Menyimpan item dalam cookie
    document.cookie = "savedItem=" + itemJson;
  }
  
  // Fungsi untuk mendapatkan data formulir dari cookie
  function getSavedItem() {
    // Mendapatkan nilai cookie
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
  
      // Mengecek apakah cookie sesuai dengan yang kita inginkan
      if (cookie.startsWith("savedItem=")) {
        // Mendapatkan nilai cookie
        var cookieValue = cookie.substring("savedItem=".length);
  
        // Mengubah nilai cookie menjadi objek
        var item = JSON.parse(cookieValue);
  
        // Mengisikan nilai dari cookie ke elemen formulir
        document.getElementById("nama").value = item.nama;
        document.getElementById("jumlah").value = item.jumlah;
        document.getElementById("tanggal").value = item.tanggal;
        document.getElementById("keterangan").value = item.keterangan;
  
        break;
      }
    }
  }