var infoForm = document.getElementById('infoForm');
var submitBtn = document.getElementById('submitBtn');
var validateForm = function () {
    if (infoForm.checkValidity()) {
        alert('Form was successfully submitted!');
    }
    else {
        infoForm.reportValidity();
        return false;
    }
};
var handleSubmit = function (event) {
    if (validateForm()) {
        infoForm.submit();
    }
};
submitBtn.addEventListener('click', handleSubmit);

var menuButton = document.getElementById('menuButton');
var slidingMenu = document.getElementById('slidingMenu');
var spans = menuButton.querySelectorAll('span');
var toggleMenu = function () {
    slidingMenu.classList.toggle('translate-x-full');
    if (spans[1].classList.contains('opacity-0')) {
        spans[0].classList.remove('rotate-45', '-translate-y-1');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', 'translate-y-1');
    }
    else {
        spans[0].classList.add('rotate-45', '-translate-y-1');
        spans[1].classList.add('opacity-0');
        spans[2].classList.add('-rotate-45', 'translate-y-1');
    }
};
menuButton.addEventListener('click', toggleMenu);
