let image = document.querySelectorAll('.image');
image.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active')
}))


let mylogo = document.getElementById('myLogo');
document.getElementById('myButton').onclick = function(){
mylogo.classList.toggle('fade');
}
