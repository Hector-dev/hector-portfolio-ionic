/**
 * ============================================================
 * APP ROUTING MODULE - Héctor Rodríguez Portfolio
 * ============================================================
 * Proyecto: Aplicación Híbrida Ionic/Angular
 * Backend:  FastAPI + PostgreSQL (conexión vía: api.hectordev.local)
 * Infra:    Proxmox (Hipervisor) > VM Ubuntu > Ionic Dev Server
 *           Tailscale VPN para acceso remoto seguro
 *           Sunshine/Moonlight para streaming desde Xeon E5 2690 v4
 * Autor:    Héctor Rodríguez - TSU Informática / Tech Lead
 * ============================================================
 *
 * PATRÓN: Lazy Loading en todas las rutas para optimizar el
 * bundle inicial (crítico en entornos con ancho de banda limitado).
 */

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /**
   * Ruta raíz → redirige a /home
   * El ion-router-outlet renderiza el contenido dentro del ion-menu
   */
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  /**
   * RUTA: HOME
   * Página de bienvenida con animación de entrada y
   * resumen del stack tecnológico (Python/FastAPI/Ionic).
   */
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },

  /**
   * RUTA: PERFIL
   * Módulo de información personal completo basado en el CV de
   * Héctor Rodríguez. Incluye experiencia laboral (UNETI/CICPC),
   * habilidades técnicas y formación académica presentadas
   * mediante ion-card con diseño adaptativo Android/iOS.
   */
  {
    path: 'perfil',
    loadChildren: () =>
      import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },

  /**
   * RUTA: CONTACTO
   * Formulario funcional con ReactiveFormsModule.
   * Futura integración con endpoint FastAPI:
   *   POST /api/v1/contacto → envío de mensaje vía correo/PostgreSQL
   */
  {
    path: 'contacto',
    loadChildren: () =>
      import('./pages/contacto/contacto.module').then(m => m.ContactoPageModule)
  },

  /**
   * Wildcard: cualquier ruta no definida redirige a /home
   */
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // Precarga progresiva post-inicial
      useHash: false                          // HTML5 History API (requerido para Capacitor)
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
