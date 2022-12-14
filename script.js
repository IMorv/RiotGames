var inputs = document.querySelectorAll('.input');
var handleFocus = (event) => {
    console.log(event.target)
}

inputs.forEach((input) =>
    input.addEventListener('focus', handleFocus))
