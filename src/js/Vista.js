const d = document;

class Vista {
  $formContainer = d.querySelector(`[data-form-container]`);
  $form = d.getElementById("form");
  $inputsPassword = Array.from(d.querySelectorAll(`[type="password"]`));
  $inputsRequired = Array.from(d.querySelectorAll(`[required]`));

  informarErrorInput(el, mensaje) {
    el.nextElementSibling.style.display = `block`;
    el.nextElementSibling.textContent = `${mensaje}`;
  }

  ocultarErrorInput(el) {
    el.nextElementSibling.style.display = `none`;
    el.nextElementSibling.textContent = ``;
  }
  cambiarVistaExito() {
    this.$formContainer.innerHTML = "";
    this.$formContainer.innerHTML = `<h1 class="mensaje-exito">¡Felicitaciones! <br> Formulario enviado con exito</h1>`
  }
}

const vista = new Vista();

export { vista };
