import { modelo } from "./Modelo";
import { vista } from "./Vista";
import { submit } from "./Submit";
import { validaciones } from "./Validaciones";

class Controlador {
  DOMContentLoaded() {
    //console.log("Hello World");
  }
  click(e) {
    //console.log("Eventos Click");
  }
  submit(e) {
    e.preventDefault();

    const validacionesInputs = vista.$inputsRequired.map((el) =>
      el.checkValidity()
    );

    if (validacionesInputs.every((el) => el === true)) {
      submit.enviarFormulario();
      vista.cambiarVistaExito();
    } else {
      console.log("HAY DATOS QUE SON INCORRECTOS O FALTAN COMPLETAR");
      setTimeout(() => {
        vista.ocultarErrorInput(e.target.querySelector(`[type="submit"]`));
      }, 5000);
      vista.informarErrorInput(
        e.target.querySelector(`[type="submit"]`),
        "HAY DATOS QUE SON INCORRECTOS O FALTAN COMPLETAR"
      );
    }
  }
  input(e) {
    if (e.target.type === "text") {
      console.log("validar Textos");
      validaciones.validarTypeTexto(e.target);
    }
    if (e.target.type === "email") {
      console.log("validar Correo");
      validaciones.validarTypeEmail(e.target);
    }
    if (e.target.type === "tel") {
      console.log("validar Numeros");
      validaciones.validarTypeTel(e.target);
    }
    if (e.target.type === "password") {
      console.log("validar Contraseñas");
      validaciones.validarTypePassword(vista.$inputsPassword);
    }
  }
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.DOMContentLoaded);
document.addEventListener("click", controlador.click);
document.addEventListener("submit", controlador.submit);
document.addEventListener("input", controlador.input);

export { controlador };
