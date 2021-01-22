let response;
let beepBoopReturn = [];
function beepBoop(response) {
  if (response === 0){
    beepBoopReturn.push(response);
  } else if (response === 3) {
    beepBoopReturn = "Won't you be my neighbor"
  } else if (response === 2) {
    beepBoopReturn = "Boop!"
  }
}



$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response = (parseInt($("#userNumber").val()));
  });
});