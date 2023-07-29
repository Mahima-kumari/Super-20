const search = document.getElementById('search');
const input = document.getElementById('searchIcon')


search.addEventListener('click', function (e) {
    e.preventDefault();
    input.classList.toggle('none');
})


function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle.className === 'topnav') {
        navbarToggle.className += ' responsive';
    } else {
        navbarToggle.className = 'topnav';
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

