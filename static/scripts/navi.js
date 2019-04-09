document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener("click", function(){
    console.log("heya");
  });
  const navi = document.querySelector('.Navi');
  var event = 'ontouchstart' in window ? 'touchstart' : 'click';
  document.addEventListener(event, function(e) {
    if (e.target.closest('.menu-button') && !navi.classList.contains('Navi-open')) {
      navi.classList.add('Navi-open');
    } else if (navi.classList.contains('Navi-open')) {
      navi.classList.remove('Navi-open');
    }
  });
})
