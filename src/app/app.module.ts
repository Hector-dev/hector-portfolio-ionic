/**
 * ============================================================
 * APP MODULE - Módulo Raíz
 * ============================================================
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,   // Habilitado para futura integración con FastAPI
    IonicModule.forRoot({
      mode: 'md',       // Forzar Material Design como base; Ionic adapta a iOS automáticamente
      animated: true,
      backButtonText: 'Volver'
    }),
    AppRoutingModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
