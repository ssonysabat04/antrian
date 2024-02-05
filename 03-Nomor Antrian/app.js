function changeColor(buttonNumber) {
  if (80>=buttonNumber & buttonNumber>70) {
    buttonNumber = buttonNumber+7;
  }else if(70>=buttonNumber & buttonNumber>60){
    buttonNumber = buttonNumber+6;
  }else if(60>=buttonNumber & buttonNumber>50){
    buttonNumber = buttonNumber+5;
  }else if(50>=buttonNumber & buttonNumber>40){
    buttonNumber = buttonNumber+4;
  }else if(40>=buttonNumber & buttonNumber>30){
    buttonNumber = buttonNumber+3;
  }else if(30>=buttonNumber & buttonNumber>20){
    buttonNumber = buttonNumber+2;
  }else if(20>=buttonNumber & buttonNumber>10){
    buttonNumber = buttonNumber+1;
  }
  
  let button = document.querySelector('.button:nth-child(' +buttonNumber+ ')');
  if (button) {
    button.classList.toggle('clicked');
  }
}

const waktuButton = document.getElementById('saveButton');
const displayWaktu = document.getElementById('display-waktu');
const displayNama = document.getElementById('display-nama');
const displayPoli = document.getElementById('display-poli');
const displayDokter = document.getElementById('display-dokter');
const displayNoHP = document.getElementById('display-noHP');
const displayNoAntri = document.getElementById('display-noAntri');

function batal() {
  let buttons = document.querySelectorAll('.button.clicked');

  buttons.forEach(button => {
          button.classList.remove('clicked');
          button.classList.remove('registered');
          button.classList.add('cancel');
          removeAppointment();
      });
    }

function daftar() {
  let buttons = document.querySelectorAll('.button.clicked');

  buttons.forEach(button => {
    button.classList.remove('clicked');
    button.classList.add('registered');
    button.classList.remove('cancel');

    window.location.href = 'input.html';
  });
}


  // Membuat event untuk menghapus data appointment
  deleteButton.addEventListener('click', removeAppointment);

  // Fungsi untuk menghapus data ke local storage
  function removeAppointment() {
    // Menghapus data appointment di local storage
    localStorage.removeItem('appointmentData');
  }

//--------------------------------------------------------------------------------------

// Mendapatkan referensi ke tombol daftar
const tombolDaftar = document.querySelector('.bDaftar');

  // Menambahkan event listener pada tombol daftar
  tombolDaftar.addEventListener('click', function() {
    // Mendapatkan daftar nomor antrian yang dipilih
    const nomorAntrian = document.querySelectorAll('.button.registered');
    // Mengubah daftar nomor antrian menjadi array of strings
    const daftarNomorAntrian = Array.from(nomorAntrian).map(function(button) {
      return button.textContent;
    });

  // Menyimpan daftar nomor antrian ke local storage
  localStorage.setItem('nomorAntrian', JSON.stringify(daftarNomorAntrian));
  displayNoAntri.textContent = nomorAntrian;
});

//------------------------------------------------------------------------------------------
// Kode untuk data buttonNumber hapus

// Mendapatkan referensi ke tombol batal
const tombolBatal = document.querySelector('.bBatal');

// Menambahkan event listener pada tombol batal
tombolBatal.addEventListener('click', function() {
  // Menghapus daftar nomor antrian dari local storage
  localStorage.removeItem('nomorAntrian');
});

// Mendapatkan daftar nomor antrian yang tersimpan di local storage
const daftarNomorAntrianTersimpan = JSON.parse(localStorage.getItem('nomorAntrian'));

// Jika ada daftar nomor antrian tersimpan
if (daftarNomorAntrianTersimpan) {
  // Mendapatkan referensi ke semua tombol nomor antrian
  const tombolNomorAntrian = document.querySelectorAll('.button');

  // Menambahkan class 'registered' ke tombol nomor antrian yang tersimpan
  daftarNomorAntrianTersimpan.forEach(nomorAntrian => {
    const tombol = tombolNomorAntrian.item(parseInt(nomorAntrian) - 1);
    if (tombol) {
      tombol.classList.add('registered');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const data = JSON.parse(localStorage.getItem('appointmentData'));
  
  displayWaktu.textContent = data.waktu;
  displayNama.textContent = data.nama;
  displayPoli.textContent = data.poli;
  displayDokter.textContent = data.dokter;
  displayNoHP.textContent = data.noHP;

  // Mendapatkan daftar nomor antrian dari local storage
  const storedNomorAntrian = JSON.parse(localStorage.getItem('nomorAntrian'));

  // Memeriksa apakah ada nomor antrian yang disimpan
  if (storedNomorAntrian && storedNomorAntrian.length > 0) {
    // Menampilkan nomor antrian di elemen HTML
    displayNoAntri.textContent = storedNomorAntrian;
  } else {
    // Menampilkan pesan jika tidak ada nomor antrian yang disimpan
    displayNoAntri.textContent = '';
    }
});