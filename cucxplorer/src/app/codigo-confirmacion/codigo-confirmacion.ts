import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo-confirmacion',
  standalone: false,
  templateUrl: './codigo-confirmacion.html',
  styleUrl: './codigo-confirmacion.scss',
})
// ... dentro de la clase de tu componente ...
export class CodigoConfirmacion {
  isSuccessful: boolean = false;

  onConfirm() {
    this.isSuccessful = true;
    console.log('Código enviado');
  }

  // AGREGA ESTA FUNCIÓN:
  onResend() {
    console.log('Reenviando código...');
    // Aquí puedes poner la lógica para volver a enviar el correo
  }
}