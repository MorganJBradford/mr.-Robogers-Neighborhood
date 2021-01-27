function beepBoop(userInput){
  if (parseInt(userInput) >= 0) {
    for (let i = 0; i <= parseInt(userInput); i++) {
      beepBoopReturn.push(i.toString());
    }
  }
  beepBoopNumReplacer(beepBoopReturn);
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
    beepBoopReturn = [];
    let userInput = ($("#userNumber").val());
    beepBoop(userInput);
    const joinedArray = beepBoopReturn.join(", ")

    $("#output").text(joinedArray);
  });
});





