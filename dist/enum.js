"use strict";
// enum H {
//     student = "student",
//     teacher = "teacher",
//     management = "management",
//     staf = "staf",
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let a: H = H.student
// console.log(H.management)
// enum H {
//     a = "Apple",
//     b = "Banana",
//     c = "Cherry",
//     d = "Daddy"
// }
// let a: H = H.a
// console.log(H.c)
var H;
(function (H) {
    H[H["admin"] = 0] = "admin";
    H[H["manage"] = 1] = "manage";
    H[H["qa"] = 2] = "qa";
    H[H["la"] = 3] = "la";
    H[H["Haha"] = 4] = "Haha";
})(H || (H = {}));
let a = H.la;
console.log(a);
console.log(H.admin);
//# sourceMappingURL=enum.js.map