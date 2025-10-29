import { vista } from "./Vista";

class Validaciones {
  vacio(input) {
    input.setCustomValidity("Este campo no puede estar vacio");
    vista.informarErrorInput(input, input.validationMessage);
  }

  soloTexto(input) {
    input.setCustomValidity("Solo se permite texto");
    vista.informarErrorInput(input, input.validationMessage);
  }

  soloNumeros(input) {
    input.setCustomValidity("Solo se permiten numeros");
    vista.informarErrorInput(input, input.validationMessage);
  }
  soloEmail(input) {
    input.setCustomValidity("Solo se permiten correos validos");
    vista.informarErrorInput(input, input.validationMessage);
  }

  validarTypeTexto(input) {
    const patron = /^[A-Za-z\\s]*$/;

    if (input.value.length === 0) {
      this.vacio(input);
    } else if (!patron.test(input.value)) {
      this.soloTexto(input);
    } else {
      input.setCustomValidity("");
      vista.ocultarErrorInput(input);
    }
  }
  validarTypeTel(input) {
    const patron = /^\d+$/;

    if (input.value.length === 0) {
      this.vacio(input);
    } else if (!patron.test(input.value)) {
      this.soloNumeros(input);
    } else {
      input.setCustomValidity("");
      vista.ocultarErrorInput(input);
    }
  }
  validarTypeEmail(input) {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (input.value.length === 0) {
      this.vacio(input);
    } else if (!patron.test(input.value)) {
      this.soloEmail(input);
    } else {
      input.setCustomValidity("");
      vista.ocultarErrorInput(input);
    }
  }
  validarTypePassword(arr) {
    if (arr[0].value != arr[1].value) {
    }

    arr.forEach((input) => {
      if (input.value.length === 0) {
        this.vacio(input);
      } else if (arr[0].value != arr[1].value) {
        input.setCustomValidity("Las contraseñas deben ser iguales");
        vista.informarErrorInput(input, input.validationMessage);
      } else {
        input.setCustomValidity("");
        vista.ocultarErrorInput(input);
      }
    });
  }
}

const validaciones = new Validaciones();

export { validaciones };
