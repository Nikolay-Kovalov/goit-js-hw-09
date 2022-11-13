const btnStartref = document.querySelector('[data-start]');
const btnStoptref = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body')

let switcher = null;

btnStartref.addEventListener('click', () => {
    switcher = setInterval(addColor, 1000),
     btnStartref.setAttribute('disabled', true);
} );

function addColor() {
    bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
    
}

btnStoptref.addEventListener('click', () => { clearInterval(switcher),  btnStartref.removeAttribute('disabled', true) })




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
