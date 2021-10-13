// solution 1:
var arr = [7, 1, 5, 3, 6, 4];
var len = arr.length;
// var new_arr = [];
var ini = 0;
if (len > 1) {
    for (let i = 0; i < len; i++) {
        // var f_ele = arr[i];
        var f_ind = arr.indexOf(arr[i]) + 1;
        if (f_ind !== len) {
            var sli = arr.slice(f_ind, len);
            var maxi = Math.max.apply(null, sli);
            var prof = maxi - arr[i];
            if (prof > ini) {
                ini = prof;
            }
            // new_arr.push(prof);
        } // else {
        //     new_arr.push(0)
        // }
    }

    // var maxi_prof = Math.max.apply(null, new_arr);
    // console.log(maxi_prof);
    console.log(ini);
} else {
    console.log("If the array is Empty or it contains only one value")
}





// solution 2:(using array assigning)

// var arr = [7, 1, 5, 3, 6, 4];
// var len = arr.length;
// var new_arr = [];
// if (arr.length !== 0) {
//     for (let i = 0; i < len; i++) {
//         var f_ele = arr[i];
//         var f_ind = arr.indexOf(f_ele) + 1;
//         if (f_ind !== len) {
//             var sli = arr.slice(f_ind, len);
//             var maxi = Math.max.apply(null, sli);
//             var prof = maxi - f_ele;
//             new_arr.push(prof);
//         } else {
//             new_arr.push(0)
//         }
//     }

//     var maxi_prof = Math.max.apply(null, new_arr);
//     console.log(maxi_prof);
// } else {
//     console.log("Empty")
// }


// solution 3:

// var a = [7, 1, 5, 3, 6, 4];
// var len = a.length;
// while (len > 0) {
//     var b = Math.min.apply(null, a);
//     var c = a.indexOf(b) + 1;
//     if (c !== len) {
//         var d = a.slice(c, len);
//         var e = Math.max.apply(null, d);
//         console.log(e - b);
//         break;
//     } else if (c === len) {
//         a.pop(b);
//         var len = a.length;
//     } else {
//         console.log(0)
//     }
// }