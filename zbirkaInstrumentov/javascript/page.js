let nivelir = [8, 12, 15, 21, 26, 27, 29, 30, 31, 39, 51, 54, 58, 60, 62, 64, 73, 75, 77, 78, 88, 91];
let teodolit = [7, 9, 11, 13, 14, 16, 17, 20, 22, 23, 32, 33, 34, 35, 36, 38, 45, 59, 63, 65, 66, 69, 76, 83, 85, 93];
let tahimeter = [18, 37, 52, 53, 56, 67, 71, 74, 89, 94, 96];
let razdaljemer = [92, 68, 70, 84, 86, 87];
let sekstant = [44, 46];
let kipregl = [24, 25, 28, 61];

// 90 93(DIN)

function prikaziStran(id) {
    if (teodolit.includes(id)) window.location = "teodolit.html" + "?st=" + id;
    if (nivelir.includes(id)) window.location = "nivelir.html" + "?st=" + id;
    if (tahimeter.includes(id)) window.location = "tahimeter.html" + "?st=" + id;
    if (razdaljemer.includes(id)) window.location = "razdaljemer.html" + "?st=" + id;
    if (kipregl.includes(id)) window.location = "kipregel.html" + "?st=" + id;
    if (sekstant.includes(id)) window.location = "sekstant.html" + "?st=" + id;
}