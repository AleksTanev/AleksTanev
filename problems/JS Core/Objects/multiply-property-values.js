let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

// for (var key in menu) {
//     if (!isNaN(menu[key])) {        // isNaN version
//         menu[key] *= 2
//     }
// }
// console.log(menu)

for (var key in menu) {
    if (typeof(menu[key]) == 'number') {  // using typeof()
        menu[key] *= 2
    } 
}

console.log(menu)