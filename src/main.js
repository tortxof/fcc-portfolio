function resetHeights() {
  var window_height = window.innerHeight;
  var nav_height = document.querySelector('nav').clientHeight;
  document.querySelector('.section-home').style.marginTop = nav_height.toString() + 'px';
  var nav_targets = document.querySelectorAll('.nav-target');
  for (var i = 0; i < nav_targets.length; i++) {
    nav_targets[i].style.transform = 'translateY(-' + nav_height + 'px)';
  }
  var sections = document.querySelectorAll('section');
  for (i = 0; i < sections.length; i++) {
    sections[i].style.minHeight = (window_height - nav_height).toString() + 'px';
  }
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
  document.getElementById('contact-success-modal').classList.add('show');
}

document.getElementById('contact-success-modal').addEventListener('animationend', function() {
  this.classList.remove('show');
});
