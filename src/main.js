function resetHeights() {
  var window_height = $(window).height();
  var nav_height = $('nav').height();
  $('.section-home').css('margin-top', nav_height);
  $('.nav-target').css('transform', 'translateY(-' + nav_height + 'px)');
  $('section').height(window_height - nav_height);
}

resetHeights();

$(window).resize(resetHeights);
