var infoForm: HTMLFormElement = document.getElementById('infoForm') as HTMLFormElement;
var submitBtn: HTMLButtonElement = document.getElementById('submitBtn') as HTMLButtonElement;

var validateForm = () => {
    if (infoForm.checkValidity()) {
        alert('Form was successfully submitted!')
    } else {
        infoForm.reportValidity();
        return false;
    }
};

var handleSubmit = (event: MouseEvent): void => {
    event.preventDefault(); 
    if (validateForm()) {
        infoForm.submit(); 
        window.location.reload();
    }
};

submitBtn.addEventListener('click', handleSubmit);


var menuButton: HTMLElement = document.getElementById('menuButton')!;
var slidingMenu: HTMLElement = document.getElementById('slidingMenu')!;
var spans = menuButton.querySelectorAll('span');


var toggleMenu = (): void => {
  slidingMenu.classList.toggle('translate-x-full');
  

  if (spans[1].classList.contains('opacity-0')) {

    spans[0].classList.remove('rotate-45', '-translate-y-1');
    spans[1].classList.remove('opacity-0');
    spans[2].classList.remove('-rotate-45', 'translate-y-1');
  } else {

    spans[0].classList.add('rotate-45', '-translate-y-1');
    spans[1].classList.add('opacity-0');
    spans[2].classList.add('-rotate-45', 'translate-y-1');
  }
};


menuButton.addEventListener('click', toggleMenu);


