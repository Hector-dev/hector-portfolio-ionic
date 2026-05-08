/**
 * ============================================================
 * PERFIL PAGE - Módulo de Información Personal
 * ============================================================
 * Datos extraídos del CV de Héctor Rodríguez (Mayo 2026)
 * Fuente: Documentacion_Maestra_Héctor_V3.pdf
 *
 * ARQUITECTURA DE DATOS:
 *   Los objetos son tipados con interfaces para garantizar
 *   consistencia. En producción, estos datos se cargarían desde:
 *   GET /api/v1/profile  →  FastAPI + PostgreSQL
 *
 * NOTA TÉCNICA:
 *   La presentación adaptativa Android/iOS es gestionada
 *   automáticamente por Ionic componentes (ion-card, ion-badge).
 * ============================================================
 */

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

export interface ExperienciaLaboral {
  empresa: string;
  cargo: string;
  periodo: string;
  ubicacion: string;
  descripcion: string[];
  tecnologias: string[];
  colorAccent: string;
  icon: string;
}

export interface EducacionItem {
  institucion: string;
  titulo: string;
  periodo: string;
  estado: string;
  icon: string;
}

export interface GrupoHabilidades {
  categoria: string;
  icon: string;
  items: { nombre: string; nivel: number }[];
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage implements OnInit {

  public persona: any = {};
  public experiencias: ExperienciaLaboral[] = [];
  public educacion: EducacionItem[] = [];
  public habilidades: GrupoHabilidades[] = [];
  public activeTab: 'resumen' | 'experiencia' | 'educacion' | 'habilidades' = 'resumen';

  constructor(
    private menuCtrl: MenuController,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.http.get('assets/data/perfil.json').subscribe((data: any) => {
      this.persona = data.persona;
      this.experiencias = data.experiencias;
      this.educacion = data.educacion;
      this.habilidades = data.habilidades;
    });
  }

  setTab(tab: 'resumen' | 'experiencia' | 'educacion' | 'habilidades'): void {
    this.activeTab = tab;
  }

  openMenu(): void {
    this.menuCtrl.open('main-menu');
  }

  /**
   * Retorna la clase CSS del badge según el estado educativo.
   * Usado en el template con [color]="getBadgeColor(edu.estado)"
   */
  getBadgeColor(estado: string): string {
    return estado === 'Graduado' ? 'success' : 'warning';
  }
}
