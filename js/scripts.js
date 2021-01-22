let response;
let beepBoopReturn = [];
function beepBoop(response) {
  if (response === 0){
    beepBoopReturn.push(response);
  }
}



$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response = (parseInt($("#userNumber").val()));
  });
});