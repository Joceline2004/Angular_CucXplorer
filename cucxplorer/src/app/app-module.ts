import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login/login';
import { HomeComponent } from './components/home-page/home-page';
import { LoadingComponent } from './components/loading/loading';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro';
import { ReactiveFormsModule } from '@angular/forms';
import { CodigoConfirmacion } from './codigo-confirmacion/codigo-confirmacion';
import { Map } from './map/map';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    LoadingComponent,
    RegistroComponent,
    CodigoConfirmacion,
    Map,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
