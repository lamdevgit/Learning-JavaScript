for (var i = 0; i < 10; i++) {
    for (var j = i; j < 10; j++) {
        document.write(" ");
    }
    for (var k = 0; k < i; k++) {
        document.write("*");
    }
    document.write("<br>");
}



// var s = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }

// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         s += '*';
//     }
//     s += '\n';
// }
// console.log(s);