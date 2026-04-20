import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Importa tus componentes
import { HomeComponent } from './components/home-page/home-page';
import { LoginComponent } from './components/login/login';

const routes: Routes = [
  // 2. Define la ruta raíz (vacía) para el Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // 3. Define la ruta para el Login
  { path: 'login', component: LoginComponent },
  
  // 4. Comodín (Opcional): Redirige cualquier ruta desconocida al Home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }