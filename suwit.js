//Suwit Jawa
var ulang = true;
while (ulang) {
    //Player memasukkan inputan
    var player = prompt('Pilih salah satu dari (gajah, orang, semut)');

    //Komputer random generate
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    //Rules permainan
    var hasil;
    if (player == comp) {
        hasil = 'SERI!'
    } else if (player == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (player == 'orang') {
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else if (player == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'salah memasukkan pilihan!';
    }

    //Hasil permainan
    alert('Anda memilih ' + player + ' dan Komputer memilih ' + comp + '\nHasilnya adalah anda ' + hasil);

    ulang = confirm('Ingin bermain lagi?');
}
alert('Terima kasih sudah bermain^^');