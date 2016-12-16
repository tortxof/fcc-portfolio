function resetHeights() {
  var window_height = window.innerHeight;
  var nav_height = document.querySelector('nav').clientHeight;
  document.querySelector('.section-home').style.marginTop = nav_height.toString() + 'px';
  document.querySelectorAll('.nav-target').forEach(function(e) {
    e.style.transform = 'translateY(-' + nav_height + 'px)';
  });
  document.querySelectorAll('section').forEach(function(e) {
    e.style.minHeight = (window_height - nav_height).toString() + 'px';
  });
}

resetHeights();

window.addEventListener('resize', resetHeights);

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var xhr = new XMLHttpRequest();
  var formData = new FormData(document.getElementById('contact-form'));

  xhr.addEventListener('load', function() {
    showContactModal();
  });

  xhr.open('POST', document.getElementById('contact-form').action + '&res_type=json');
  xhr.send(formData);
});

function showContactModal() {
  var modal_elem = document.getElementById('contact-success-modal');
  modal_elem.classList.add('show');
}

document.getElementById('contact-success-modal').addEventListener('animationend', function() {
  this.classList.remove('show');
});
