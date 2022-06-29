//Make  logo clickable and have animation
let mylogo = document.getElementById('myLogo');
document.getElementById('myButton').onclick = function(){
mylogo.classList.toggle('fade');
}


//Allbumes description event
let image = document.querySelectorAll('.image');
image.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active')
}))


//Scroll form logo to catalog 
$(document).ready(function () {

  $("a").on('click', function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function () {

              window.location.hash = hash;
          });
      }
  });
});


//TOP btn
var mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
