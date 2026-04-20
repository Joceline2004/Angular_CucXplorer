import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'HomeComponent',
  templateUrl: './home-page.html', // Verifica que coincida con tu archivo .html
  styleUrls: ['./home-page.scss'] ,
  standalone: false
})
export class HomeComponent { 
 // Inyectamos el Router para que los botones puedan navegar
  constructor(private router: Router) {}

  // Función para el botón de iniciar sesión
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Función para el botón de invitado
  enterAsGuest() {
    console.log('Entrando como invitado...');
    // Aquí puedes redirigir a la página principal de la app
    this.router.navigate(['/dashboard']); 
  }
}