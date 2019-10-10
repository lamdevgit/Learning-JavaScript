alert('Selamat datang di kalkulator sederhana^^')
var operator = prompt('Masukkan salah satu operator + atau - atau * atau /');
var a = parseInt(prompt('Masukkan angka pertama:'));
var b = parseInt(prompt('Masukkan angka kedua:'));

if (operator == '+') {
    alert('Hasilnya penjumlahannya adalah : ' + (a + b));
} else if (operator == '-') {
    alert('Hasilnya penjumlahannya adalah : ' + (a - b));
} else if (operator == '*') {
    alert('Hasilnya penjumlahannya adalah : ' + (a * b));
} else if (operator == '/') {
    alert('Hasilnya penjumlahannya adalah : ' + (a / b));
} else {
    alert('Yang anda masukkan bukan operator pilihan!')
}