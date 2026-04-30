import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Importa tus componentes
// 1. Importa tus componentes
import { HomeComponent } from './components/home-page/home-page'; // Verifica si este archivo también termina en .component
import { LoginComponent } from './components/login/login';
import { RegistroComponent } from './components/registro/registro';
import { CodigoConfirmacion } from './codigo-confirmacion/codigo-confirmacion';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }, 
   { path: 'confirmacion', component: CodigoConfirmacion },// <--- Asegúrate que esté antes del '**'
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // <--- Esta SIEMPRE debe ser la última
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }