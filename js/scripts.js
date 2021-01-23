let beepBoopReturn = [];

let response = [];
function beepBoop(){
  if (parseInt(response) >= 0) {
    for (let i = 0; i <= parseInt(response); i++) {
      beepBoopReturn.push(i);
    }
  }
}




// function beepBoop(response) {
//   for (let i = 0; i < response.length; i++) { 
//     if (response[0] !== 0 && response[0] !== 3 && response[0] !== 2 && response[0] !== 1 && response[0] >= 0 && response[0] <=9) {
//       for (let j = 0; j <= response[0]; j++) {
//         beepBoopReturn.push(j)
//       }
//     } else if (response[i] !== 0 && response[i] !== 3 && response[i] !== 2 && response[i] !== 1 && response[i] > 9) {
//         for (let i = 0; i < response; i++) {
//           if (response[0] === threeArray[i]) {
//             beepBoopReturn =  "Won't you be my neighbor"
//             return beepBoopReturn
//           }
//         }
    // } else {
    //     for (let i = 0; i < response.length; i++) {
    //       if (response[i] === 0){
    //         beepBoopReturn.push(response[i]);
    //         return beepBoopReturn
    //       } else if (response[i] === 3) {
    //         beepBoopReturn = "Won't you be my neighbor"
    //         return beepBoopReturn
    //       } else if (response[i] === 2) {
    //         beepBoopReturn = "Boop!"
    //         return beepBoopReturn
    //       } else if (response[i] === 1) {
    //         beepBoopReturn = "Beep!"
    //         return beepBoopReturn
    //       }
    //     }
    // }
//   }
// }
$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response = ($("#userNumber").val());
    const beepityBoppityBoop = beepBoop(response);
    $("#output").text(beepityBoppityBoop);
    $(".output").show();
  });
});





// let response;
// function beepBoop(){
//   if (response >= 0) {
//     response = response.split("");
//   }
// }

// $(document).ready(function(){
//   $("#formOne").submit(function(event) {
//     event.preventDefault()
//     response = ($("#userNumber").val());
    
//     $("#output").text();
//     $(".output").show();
//   });
// });