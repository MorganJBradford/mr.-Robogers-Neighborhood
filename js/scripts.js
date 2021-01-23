let beepBoopReturn = [];

let response;
function beepBoop(){
  if (parseInt(response) >= 0) {
    for (let i = 0; i <= parseInt(response); i++) {
      beepBoopReturn.push(i);
    }
  }
  function beepBoopNumReplacer(beepBoopReturn) {
    for (let i = 0; i < beepBoopReturn.length; i++) {
      if (beepBoopReturn[i] === 0){
        beepBoopReturn[i] = (parseInt(beepBoopReturn[i]));
      } else if (beepBoopReturn[i] === 3) {
        beepBoopReturn[i] = "Won't you be my neighbor"
      } else if (beepBoopReturn[i] === 2) {
        beepBoopReturn[i] = "Boop!"
      } else if (beepBoopReturn[i] === 1) {
        beepBoopReturn[i] = "Beep!"
      }
    }
  }
  beepBoopNumReplacer(beepBoopReturn)
}


$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response = ($("#userNumber").val());
    const beepityBoppityBoop = beepBoop(response);
    $("#output").text(beepityBoppityBoop);
    $(".output").show();
  });
});