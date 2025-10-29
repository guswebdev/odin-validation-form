import { modelo } from "./Modelo";
import { vista } from "./Vista";

class Submit {
  enviarFormulario() {
    /*Capturar datos del form*/
    const formData = new FormData(vista.$form);
    const datos = Object.fromEntries(formData.entries());

    modelo.guardarInformacion(datos);
  }
}

const submit = new Submit();

export { submit };
