var naoButton = document.getElementById('nao');
var originalTop = naoButton.style.top;

naoButton.addEventListener('mouseenter', function() {
  this.style.top = '-50px';
});

naoButton.addEventListener('mouseleave', function() {
  this.style.top = originalTop;
});
