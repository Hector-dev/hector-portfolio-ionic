/**
 * ============================================================
 * APP COMPONENT - Héctor Rodríguez Portfolio
 * ============================================================
 * Maneja el ion-menu lateral dinámico generado desde un arreglo
 * de objetos TypeScript (appPages). Esta arquitectura permite
 * escalar la navegación sin modificar el template HTML.
 *
 * INTEGRACIÓN FUTURA con FastAPI:
 *   GET /api/v1/user/profile → datos dinámicos del usuario
 *   Autenticación: JWT Bearer Token (Python-jose)
 *
 * ENTORNO DE DESARROLLO:
 *   Servidor:  Xeon E5 2690 v4 | 16GB RAM | RTX 3060
 *   Hipervisor: Proxmox VE
 *   Red Privada: Tailscale Mesh VPN
 *   Streaming: Sunshine → Moonlight (baja latencia)
 * ============================================================
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Interfaz que tipifica cada elemento del menú lateral.
 * Extiende fácilmente para añadir roles/permisos en el futuro.
 */
export interface AppPage {
  title: string;
  url: string;
  icon: string;
  badge?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * Datos del usuario mostrados en la cabecera del menú.
   * En producción estos datos se cargarán desde el endpoint
   * FastAPI: GET /api/v1/auth/me
   */
  public userProfile = {
    name: 'Héctor Rodríguez',
    title: 'Tech Lead | Backend Python',
    institution: 'UNETI',
    avatar: 'assets/avatar.png',
    email: 'hector@hectordev.local'
  };

  /**
   * Arreglo central de navegación.
   * Al centralizar aquí los datos, cualquier cambio en las rutas
   * o íconos se propaga automáticamente al DOM sin tocar el HTML.
   *
   * PATRÓN: Data-Driven Navigation (escalable para roles distintos)
   */
  public appPages: AppPage[] = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'Perfil Profesional',
      url: '/perfil',
      icon: 'person-circle-outline'
    },
    {
      title: 'Contacto',
      url: '/contacto',
      icon: 'mail-outline'
    }
  ];

  /**
   * Habilidades técnicas mostradas como chips en la sección
   * inferior del menú (sidebar quick-skills).
   */
  public techStack: string[] = [
    'Python', 'FastAPI', 'Angular', 'Ionic', 'PostgreSQL',
    'Docker', 'Proxmox', 'Linux', 'Git'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Punto de extensión: aquí se inicializaría el servicio
    // de autenticación y la carga del perfil desde FastAPI.
    console.log('[AppComponent] Menú lateral inicializado.');
  }

  /**
   * Navega programáticamente a una ruta y cierra el menú.
   * Llamado desde el template cuando el usuario toca un item.
   */
  navigateTo(url: string): void {
    this.router.navigateByUrl(url, { replaceUrl: true });
  }

  /**
   * Determina si la ruta actual coincide con el item del menú
   * para aplicar la clase `selected` visualmente.
   */
  isSelected(url: string): boolean {
    return this.router.url.startsWith(url);
  }
}
