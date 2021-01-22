let response;
function beepBoop(){
  if (response >= 0) {
    response = response.split("");
  }
}

$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response = ($("#userNumber").val());
    
    $("#output").text();
    $(".output").show();
  });
});