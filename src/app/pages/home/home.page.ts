/**
 * ============================================================
 * HOME PAGE - Página de Bienvenida
 * ============================================================
 * Presenta el hero section del portfolio con animación de entrada
 * y accesos rápidos a las secciones principales.
 *
 * INTEGRACIÓN FUTURA (FastAPI):
 *   GET /api/v1/stats → métricas de proyectos completados
 *   WebSocket /ws/status → estado en tiempo real del servidor
 * ============================================================
 */

import { Component, OnInit } from '@angular/core';
import { MenuController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  /** Estadísticas rápidas del perfil (futuro: API FastAPI) */
  public stats = [
    { value: '4+', label: 'Años de Experiencia', icon: 'time-outline' },
    { value: '10+', label: 'Proyectos Completados', icon: 'rocket-outline' },
    { value: '3', label: 'Tecnologías Principales', icon: 'code-slash-outline' }
  ];

  /** Accesos rápidos para la página de inicio */
  public quickLinks = [
    { title: 'Ver Perfil',   subtitle: 'CV completo y experiencia', url: '/perfil',   icon: 'person-circle-outline',  color: 'primary' },
    { title: 'Contactame',   subtitle: 'Envía un mensaje directo',   url: '/contacto', icon: 'mail-outline',           color: 'secondary' }
  ];

  constructor(
    private menuCtrl: MenuController,
    private animCtrl: AnimationController
  ) {}

  ngOnInit(): void {}

  /** Abre el menú lateral desde el botón hamburguesa */
  openMenu(): void {
    this.menuCtrl.open('main-menu');
  }
}
