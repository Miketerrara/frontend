const _elements = {
    bar:  document.querySelector('.bar'),
    barScreen: document.querySelector('.bar-modal'),
    barLinks: document.querySelectorAll('.item'),
}

_elements.bar.addEventListener('click', () =>{
    _elements.barScreen.classList.toggle('bar-modal--active');
});