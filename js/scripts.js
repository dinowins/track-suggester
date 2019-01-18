// Back-end Business logic






// Front-end UI

$(document).ready(function() {
  $("#Java").hide();
  $("#PhP").hide();
  $("#Front-end").hide();

  $("#Survey").submit(function(event) {
    event.preventDefault();

    if($('select[id=project-preference-select]').val() === "projects-Java") {
      $("#Java").show();
      $("#PhP").hide();
      $("#Front-end").hide();
    } else if($('select[id=project-preference-select]').val() === "projects-PhP") {
      $("#Java").hide();
      $("#PhP").show();
      $("#Front-end").hide();
    } else if($('select[id=project-preference-select]').val() === "projects-frontend") {
      $("#Java").hide();
      $("#PhP").hide();
      $("#Front-end").show();
    }
  });

});
