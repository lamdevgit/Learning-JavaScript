var item = prompt('Masukkan nama makanan / minuman:  \n (cth: nasi, daging, susu, airmineral, pizza, hamburger, softdrink');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
    case 'airmineral':
        alert('Makanan / minuman tersebut SEHAT!');
        break;
    case 'pizza':
    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman tersebut TIDAK SEHAT!');
        break;
    default:
        alert('Makanan / minuman yang anda masukka salah!');
        break;
}