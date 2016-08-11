function resetHeights() {
  var window_height = $(window).height();
  var nav_height = $('nav').height();
  $('.section-home').css('margin-top', nav_height);
  $('.nav-target').css('transform', 'translateY(-' + nav_height + 'px)');
  $('section').css('min-height', (window_height - nav_height).toString() + 'px');
}

resetHeights();

$(window).resize(resetHeights);

$('#submit').click(function(event) {
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  var formData = new FormData($('#contact-form')[0]);

  xhr.addEventListener('load', function() {
    console.log('form posted successfully');
    showContactModal();
    setTimeout(hideContactModal, 2000);
  });

  xhr.addEventListener('error', function() {
    console.log('error posting form');
    showContactModal();
    setTimeout(hideContactModal, 2000);
  });

  xhr.open('POST', $('#contact-form')[0].action);
  xhr.send(formData);
});

function showContactModal() {
  $('#contact-success-modal').addClass('show');
}

function hideContactModal() {
  $('#contact-success-modal').removeClass('show');
}
