function resetHeights() {
  var window_height = $(window).height();
  var nav_height = $('.nav-wrap').height();
  $('.section-home').css('margin-top', nav_height);
  $('.nav-target').css('top', -nav_height);
  $('.section').height(window_height - nav_height);
}

resetHeights();

$(window).resize(resetHeights);
