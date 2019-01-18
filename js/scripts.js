// Back-end Business logic






// Front-end UI

$(document).ready(function() {
  $("#Java").hide();
  $("#PhP").hide();
  $("#Front-end").hide();
  $("#JavaImg").hide();
  $("#phpImg").hide();
  $("#JSimg").hide();

  $("#Survey").submit(function(event) {
    event.preventDefault();

    if($('select[id=project-preference-select]').val() === "projects-Java") {
      $("#Java").show();
      $("#PhP").hide();
      $("#Front-end").hide();
      $("#JavaImg").show();
      $("#phpImg").hide();
      $("#JSimg").hide();
    } else if($('select[id=project-preference-select]').val() === "projects-PhP") {
      $("#Java").hide();
      $("#PhP").show();
      $("#Front-end").hide();
      $("#JavaImg").hide();
      $("#phpImg").show();
      $("#JSimg").hide();
    } else if($('select[id=project-preference-select]').val() === "projects-frontend") {
      $("#Java").hide();
      $("#PhP").hide();
      $("#Front-end").show();
      $("#JavaImg").hide();
      $("#phpImg").hide();
      $("#JSimg").show();
    }
  });

});
