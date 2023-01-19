const passInput = document.querySelector('.input__password');
const retypePass = document.querySelector('.input__password__retype');


function error(pass, retype) {
    pass.style.border = '2px solid red';
    retype.style.border = '2px solid red';
}

function pass(pass, retype) {
    pass.style.border = '2px solid green';
    retype.style.border = '2px solid green';
}

passInput.addEventListener('input', function (e) {
    (passInput.value !== retypePass.value && retypePass.value !== '')
        ? error(passInput, retypePass) : pass(passInput, retypePass)
});

retypePass.addEventListener('input', function (e) {
    (retypePass.value !== passInput.value && passInput.value !== '')
        ? error(passInput, retypePass) : pass(passInput, retypePass)
});