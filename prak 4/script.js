/* Harun Abdulkarim
121140147
RB */
function hitung() {
    //mengambil element berdasarkan ID
    let inputNumber = parseInt(document.getElementById("inputNumber").value);
    
    //jika input kurang dari 0 maka akan mengeluarkan alert
    //jika lebih dari 0 maka akan menjalankan perulangan untuk menentukan jumlah ganjil genap
    if (inputNumber <= 0) {
        alert("Masukkan bilangan bulat positif.");
    }else{
    //deklarasi variabel    
    let jumlahGanjil = 0;
    let jumlahGenap = 0;
    // Melakukan perulangan sampai i = angka yang dimasukkan
    // jika i habis dibagi 2 maka genap, jika tidak maka ganjil
    for (let i = 1; i <= inputNumber; i++) {
        if (i % 2 === 0) {
            jumlahGenap++;
        } else {
            jumlahGanjil++;
        }
    }
    //menampilkan output
    let hasil = jumlahGanjil;
    document.getElementById("genap").innerHTML = hasil;
    let hasil2 = jumlahGenap;
    document.getElementById("ganjil").innerHTML = hasil2;
    }
};
