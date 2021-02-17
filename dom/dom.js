$(document).ready(function() {
  $(document).on("click", ".card-header", function() {
    $(this)
      .next()
      .slideToggle();
  });

  $(".card-header").on("click", function() {
    if (
      $(this)
        .children(".minus")
        .hasClass("hidden")
    ) {
      $(this)
        .children(".minus")
        .removeClass("hidden");
      $(this)
        .children("i")
        .addClass("hidden");
    } else {
      $(this)
        .children(".minus")
        .addClass("hidden");
      $(this)
        .children("i")
        .removeClass("hidden");
    }
  });
  // $(".fas fa-plus").after("<h2>-</h2>");
});
