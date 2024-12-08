const _elements = {
    toggle: document.querySelector(".bars"),
    navbar: document.querySelector(".bars__nav"),
    navbarClose: document.querySelector(".fa-xmark"),
    navbarLinks: document.querySelectorAll(".bars__link"),
}

function linkNavbar() {
	_elements.navbarLinks.forEach(link => {
		link.classList.toggle("id--toggle");
	});

    _elements.navbar.classList.toggle("bars__nav--active");
}

_elements.toggle.addEventListener("click", linkNavbar);

_elements.navbarClose.addEventListener("click", () =>{
    _elements.toggle.dispatchEvent(new Event("click"));
});