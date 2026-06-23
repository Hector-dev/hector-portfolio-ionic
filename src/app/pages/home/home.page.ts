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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

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

  /** Tecnologías con descripción expandible */
  public techs = [
    {
      name: 'Python',
      icon: 'logo-python',
      desc: 'Lenguaje principal para backend. Desarrollo APIs con FastAPI/Flask, scripts de automatización y procesamiento de datos.'
    },
    {
      name: 'FastAPI',
      icon: 'flash-outline',
      desc: 'Framework moderno para APIs RESTful. Validación con Pydantic, documentación automática con Swagger y alto rendimiento asíncrono.'
    },
    {
      name: 'PostgreSQL',
      icon: 'server-outline',
      desc: 'Base de datos relacional principal. Diseño de esquemas, consultas optimizadas, migraciones con Alembic y administración de bases.'
    },
    {
      name: 'Angular',
      icon: 'logo-angular',
      desc: 'Framework frontend para aplicaciones web modulares. Componentes reactivos, routing lazy-loading e inyección de dependencias.'
    },
    {
      name: 'Ionic',
      icon: 'phone-portrait-outline',
      desc: 'Framework cross-platform para apps móviles y PWA. UI adaptativa con componentes nativos y soporte offline.'
    },
    {
      name: 'TypeScript',
      icon: 'code-slash-outline',
      desc: 'Tipado estático para JavaScript. Interfaces, genéricos, decoradores y herramientas de desarrollo avanzadas.'
    },
    {
      name: 'Docker',
      icon: 'cube-outline',
      desc: 'Contenedores para entornos reproducibles. Docker Compose para desarrollo local y despliegue en producción.'
    },
    {
      name: 'Proxmox',
      icon: 'cloud-outline',
      desc: 'Hipervisor open-source para virtualización. Gestión de VMs, contenedores LXC, backups y redes definidas por software.'
    },
    {
      name: 'Tailscale',
      icon: 'shield-checkmark-outline',
      desc: 'Mesh VPN zero-config. Acceso seguro a dispositivos en red privada con autenticación SSO y cifrado punto a punto.'
    },
    {
      name: 'Linux',
      icon: 'terminal-outline',
      desc: 'Administración de servidores Ubuntu/Debian. Automatización con bash, systemd, monitoreo y hardening de seguridad.'
    }
  ];

  /** Carrusel: índice actual */
  public currentIndex = 0;
  /** Estado de volteo de cada tarjeta */
  public flippedStates: boolean[] = [];
  private autoSlideTimer: any;

  constructor(
    private menuCtrl: MenuController,
    private animCtrl: AnimationController
  ) {}

  ngOnInit(): void {
    this.flippedStates = this.techs.map(() => false);
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  /** Inicia el avance automático del carrusel */
  startAutoSlide(): void {
    this.autoSlideTimer = setInterval(() => {
      if (this.flippedStates.some(f => f)) return; // pausa si hay alguna volteada
      this.currentIndex = (this.currentIndex + 1) % this.techs.length;
    }, 3500);
  }

  /** Detiene el avance automático */
  stopAutoSlide(): void {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }

  /** Voltea / devuelve la tarjeta */
  toggleFlip(index: number): void {
    this.stopAutoSlide();
    this.flippedStates[index] = !this.flippedStates[index];
  }

  /** Navega a la tecnología anterior */
  prevSlide(): void {
    this.stopAutoSlide();
    this.currentIndex = this.currentIndex === 0 ? this.techs.length - 1 : this.currentIndex - 1;
    this.startAutoSlide();
  }

  /** Navega a la siguiente tecnología */
  nextSlide(): void {
    this.stopAutoSlide();
    this.currentIndex = (this.currentIndex + 1) % this.techs.length;
    this.startAutoSlide();
  }

  /** Navega a un slide específico */
  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  /** Abre el menú lateral desde el botón hamburguesa */
  openMenu(): void {
    this.menuCtrl.open('main-menu');
  }

}
