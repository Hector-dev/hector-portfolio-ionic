# 🚀 Hector-dev Portfolio | Ionic & Angular

<p align="center">
  <img src="src/assets/icon/favicon.svg" width="100" height="100" alt="HeDev Logo">
</p>

<p align="center">
  <strong>Héctor Rodríguez</strong><br>
  <em>Tech Lead | Backend Python Specialist | TSU en Informática</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Ionic-7.0-blue?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic">
  <img src="https://img.shields.io/badge/Angular-17.0-red?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/Python-3.11-yellow?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/FastAPI-v0.100-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
</p>

---

## 🌟 Descripción

Este es mi portfolio profesional interactivo, desarrollado como una aplicación híbrida utilizando el framework **Ionic** y **Angular**. El proyecto destaca mi trayectoria profesional, habilidades técnicas y mi infraestructura de desarrollo avanzada basada en virtualización y streaming de baja latencia.

## ✨ Características Principales

- 🌑 **Dark Mode Premium**: Interfaz elegante y descansada para la vista.
- 📱 **Diseño Responsive**: Optimizado para móviles, tablets y escritorios utilizando `ion-grid`.
- ⚡ **Lazy Loading**: Carga perezosa de módulos para un rendimiento ultra-rápido.
- 📂 **Arquitectura Desacoplada**: El CV se gestiona dinámicamente mediante archivos JSON (`assets/data/perfil.json`).
- 📧 **Contacto Directo**: Formulario reactivo listo para integrar con backend.

## 🏗️ Infraestructura de Desarrollo (The Home Lab)

Este proyecto fue desarrollado bajo una infraestructura profesional personalizada:

- **Hypervisor**: Proxmox VE (Gestión de VMs y Contenedores).
- **Red**: Tailscale Mesh VPN para acceso remoto seguro desde cualquier lugar.
- **Streaming**: Sunshine/Moonlight alojado en un servidor **Xeon E5 2690 v4** con **RTX 3060**.
- **Dev Env**: VS Code sobre Ubuntu VM, accesible vía streaming de baja latencia.

## 🛠️ Stack Tecnológico

- **Frontend**: Ionic v7, Angular v17, SCSS.
- **Backend (Futuro)**: FastAPI, PostgreSQL.
- **Tools**: Capacitor, Git, GitHub Actions.

## 🚀 Instalación y Uso

```bash
# 1. Clonar el repositorio
git clone https://github.com/Hector-dev/hector-portfolio-ionic.git

# 2. Entrar al directorio
cd hector-portfolio-ionic

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm start
```

## 📂 Estructura del Proyecto

```text
hector-portfolio-ionic/
├── src/
│   ├── app/
│   │   ├── pages/         # Home, Perfil, Contacto
│   │   └── components/    # Componentes compartidos
│   ├── assets/
│   │   ├── data/          # CV Data (JSON)
│   │   └── icon/          # Assets visuales
│   └── theme/             # Variables de diseño (Global Dark Mode)
├── capacitor.config.ts    # Configuración nativa
└── package.json           # Dependencias
```

---

<p align="center">
  Desarrollado con ❤️ por Héctor Rodríguez
</p>
