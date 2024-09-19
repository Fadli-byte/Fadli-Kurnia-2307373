// Menunggu sampai halaman DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
  // Mendapatkan elemen form
  const form = document.querySelector('form');
  
  // Membuat div untuk menampilkan output di bawah form
  const outputDiv = document.createElement('div');
  document.getElementById('content').appendChild(outputDiv);

  // Menangani event submit form
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman form secara default

      // Mengambil nilai dari input form
      const name = document.getElementById('username').value;
      const nim = document.getElementById('usernumber').value;
      const kelas = document.getElementById('subject').value;
      const alamat = document.getElementById('message').value;

      // Membuat output dari data yang diinput
      outputDiv.innerHTML = `
          <h2>Data yang telah kamu masukkan:</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>NIM:</strong> ${nim}</p>
          <p><strong>Kelas:</strong> ${kelas}</p>
          <p><strong>Alamat:</strong> ${alamat}</p>
      `;

      // Membersihkan form setelah pengiriman
      form.reset();
  });
});
