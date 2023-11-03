/* Harun Abdulkarim Khafid 
   121140147
       RB      */

// deklarasi mengmabil id dari display input
let display = document.getElementById('display');
// menambahkan input sesuai dengan tombol yang ditekan
function input(value) {
    display.value += value;
}
// melakukan perhitungan dengan fungsi eval
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
//menghapus isi display
function clears() {
    display.value = '';
}
//menghapus 1 karakter terakhir dengan fungsi slice
function back() {
    display.value = display.value.slice(0, -1);
}
//fungsi untuk menerima inputan dari keyboard
document.addEventListener('keydown', function (event) {
    // deklarasi variabel
    const key = event.key;
    //tombol keyboard yang bisa dimasukkan 
    const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 
    'Enter', 'Backspace', 'Delete', '0', '+', '-', '*', '/',  '='];
    //jika keyboard yang ditekan ada pada array, maka akan muncul di display
    if (allowedKeys.includes(key)) {
        
        if (key === 'Delete') {
            clear();
            
        } else if (key === 'Backspace') {
            back();

        } else if (key === 'Enter') {
            calculate();
        } else {
            input(key);
        }
    }
});
