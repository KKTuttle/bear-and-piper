$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("h1").addClass("color-white");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("h1").addClass("color-black");
  });
});
