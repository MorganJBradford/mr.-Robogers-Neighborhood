let beepBoopReturn = [];

function beepBoop(response){
  if (parseInt(response) >= 0) {
    for (let i = 0; i <= parseInt(response); i++) {
      beepBoopReturn.push(i.toString());
    }
  }
  beepBoopNumReplacer(beepBoopReturn)
}
function beepBoopNumReplacer(beepBoopReturn) {
  for (let i = 0; i < beepBoopReturn.length; i++) {
    if (beepBoopReturn[i] === "0"){
      beepBoopReturn[i] = (parseInt(beepBoopReturn[i]));
    } else if (beepBoopReturn[i].includes("3")) {
      beepBoopReturn[i] = "Won't you be my neighbor?"
    } else if (beepBoopReturn[i].includes("2")) {
      beepBoopReturn[i] = "Boop!"
    } else if (beepBoopReturn[i].includes("1")) {
      beepBoopReturn[i] = "Beep!"
    }
  }
}


$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    let response = ($("#userNumber").val());
    $("#output").text(beepBoop(response));
    $(".output").show();
  });
});





