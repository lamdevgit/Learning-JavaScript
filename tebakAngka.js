//----- PERMAINAN TEBAK ANGKA -----//

//pengulangan untuk bermain lagi
var ulang = true;
while (ulang) {
    //Notice game
    alert('Tebak angka dari 1 - 10\nKamu punya 3 kesempatan!')

    //Komputer random generate angka 1 hingga 10
    var angka = Math.ceil(Math.random() * 10); //Math.ceil adalah untuk membulatkan angka ke angka berikutnya/atasnya

    //pengulangan jika masih ada kesempatan
    var kesempatan = 2;
    while (kesempatan >= 0) {

        //Player memasukkan inputan angka
        var player = parseInt(prompt('Masukkan angka 1 hingga 10'));

        //Rules permainan
        //Jika angka benar
        if (player === angka) {
            alert('Anda BENAR!\nAngka yang dicari adalah ' + angka);
            alert('Selamat anda MENANG^^');
            break;

            //jika player memasukkan angka selain 1 hingga 10
        } else if (player === 0 || player > 10) {
            alert('Anda harus memasukkan angka 1 hingga 10!');
            break;

            //jika kesempatan habis
        } else if (player < angka && kesempatan === 0) {
            alert('Angka terlalu RENDAH!\nKesempatan anda sudah habis!');
            alert('Anda GAGAL!\nAngka yang dicari adalah ' + angka);
        } else if (player > angka && kesempatan === 0) {
            alert('Angka terlalu TINGGI!\nKesempatan anda sudah habis!');
            alert('Anda GAGAL!\nAngka yang dicari adalah ' + angka);

            //jika masih ada kesempatan
        } else if (player < angka) {
            alert('Angka terlalu RENDAH!\nAyo masih ada ' + kesempatan + ' kesempatan');
        } else if (player > angka) {
            alert('Angka terlalu TINGGI!\nAyo masih ada ' + kesempatan + ' kesempatan');

            //jika player bukan memasukkan angka
        } else {
            alert('Yang anda masukkan bukan angka!');
            break;
        }
        kesempatan--;
    }
    ulang = confirm('Ingin bermain lagi?');
}
alert('Terima kasih sudah bermain^^');