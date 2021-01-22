let response;
let beepBoopReturn = [];
function beepBoop(response) {
  if (response === 0){
    beepBoopReturn.push(response);
    return beepBoopReturn
  } else if (response === 3) {
    beepBoopReturn = "Won't you be my neighbor"
    return beepBoopReturn
  } else if (response === 2) {
    beepBoopReturn = "Boop!"
    return beepBoopReturn
  } else if (response === 1) {
    beepBoopReturn = "Beep!"
    return beepBoopReturn
  }
}



$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response = (parseInt($("#userNumber").val()));
    const beepityBoppityBoop = beepBoop(response)
  });
});