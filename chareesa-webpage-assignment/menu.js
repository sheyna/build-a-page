var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.openContactMe').click(function() {
    $('.contactMe').animate({
      right: "0px"
    }, 200);

    $('aside').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.closeContactMe').click(function() {
    $('.contactMe').animate({
      right: "-285px"
    }, 200);

    $('aside').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
