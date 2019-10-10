var lagi = true;
while (lagi) { //bisa juga(lagi === true)
    var angka = prompt('Silahkan masukkan angka:');
    if (angka % 2 === 0) {
        alert('Angka ' + angka + ' adalah bilangan GENAP');
    } else if (angka % 2 === 1) {
        alert('Angka ' + angka + ' adalah bilangan GANJIL');
    } else {
        alert('Yang anda masukkan bukan angkka')
    }
    lagi = confirm('Coba lagi?');
}
alert('Selesai!')