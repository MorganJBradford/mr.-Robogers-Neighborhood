let response = [];
let beepBoopReturn = [];
function beepBoop(response) {
  if (response === 3) {
    for (let i = 0; i < response; i++) {
      beepBoopReturn.push[i]
    }
  }
  
  // for (let i = 0; i < response.length; i++) {
  //   if (response[i] === 0){
  //     beepBoopReturn.push(response[i]);
  //     return beepBoopReturn
  //   } else if (response[i] === 3) {
  //     beepBoopReturn = "Won't you be my neighbor"
  //     return beepBoopReturn
  //   } else if (response[i] === 2) {
  //     beepBoopReturn = "Boop!"
  //     return beepBoopReturn
  //   } else if (response[i] === 1) {
  //     beepBoopReturn = "Beep!"
  //     return beepBoopReturn
  //   }
  // }
}


$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response.push(parseInt($("#userNumber").val()));
    const beepityBoppityBoop = beepBoop(response)
    $("#output").text(beepityBoppityBoop);
    $(".output").show();
  });
});