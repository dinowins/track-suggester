// Back-end Business logic






// Front-end UI

$(document).ready(function() {
  $("#Java").hide();
  $("#PhP").hide();
  $("#Front-end").hide();

  $("#Survey").submit(function(event) {
    event.preventDefault();

    if($(".form-company-size option:company-small")) {
      $("#Java").show();
      console.log("yeet");
    }
  });

});
