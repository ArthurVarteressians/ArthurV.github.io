let image = document.querySelectorAll('.image');
image.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active')
}))
