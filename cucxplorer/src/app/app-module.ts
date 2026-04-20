import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LoginComponent } from './components/login/login';
import { HomeComponent } from './components/home-page/home-page';
import { LoadingComponent } from './components/loading/loading';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    LoginComponent,
    LoadingComponent // <-- MUY IMPORTANTE que esté aquí
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
