window.onload = () => {
  let btnSubmit = qs('#btnSubmit');
  let inputNombre = qs('#inputName');
  let erNombre = qs('.erName');
  let registerForm = qs('form');
  btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    let errores = {};
    if (inputNombre.value.length < 1) {
      errores.name = 'Este campo debe estar completo';
    }
    if (Object.keys(errores).length >= 1) {
      erNombre.innerText = errores.name ? errores.name : '';
    } else {
      registerForm.submit();
    }
  });
};
