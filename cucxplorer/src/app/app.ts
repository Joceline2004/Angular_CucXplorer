import { Component, OnInit, signal} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './components/loading/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  isLoading = true;

  constructor(private router: Router) {
    // Escuchamos los eventos del router
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        // Simulamos un pequeño retraso para que el logo no parpadee si carga muy rápido
        setTimeout(() => {
          this.isLoading = false;
        }, 800); 
      }
    });
  }

  ngOnInit() {
    // Si al iniciar ya estás en la ruta raíz, asegúrate de que cargue el home
    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }
  }
}