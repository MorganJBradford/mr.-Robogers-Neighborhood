let response = [];










$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault()
    response.push(parseInt($("#userNumber").val()));
  });
});