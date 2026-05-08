/**
 * ============================================================
 * ENVIRONMENTS - Configuración de entornos
 * ============================================================
 * DEV:  Apunta a la API FastAPI local (Proxmox/Tailscale)
 * PROD: Apunta al servidor de producción
 *
 * Héctor Rodríguez - Tech Lead
 * Entorno de desarrollo: Proxmox → VM Ubuntu → FastAPI uvicorn
 * Acceso remoto: Tailscale VPN (100.x.x.x)
 * ============================================================
 */

export const environment = {
  production: false,

  /**
   * URL base de la API FastAPI.
   * En desarrollo, el servidor corre en la VM de Proxmox
   * accesible a través de Tailscale VPN.
   *
   * Endpoints principales:
   *   GET  /api/v1/auth/me          → Perfil del usuario
   *   POST /api/v1/contacto         → Envío de mensajes
   *   GET  /api/v1/skills           → Lista de habilidades
   *   GET  /api/v1/experience       → Experiencia laboral
   */
  apiUrl: 'http://localhost:8000',

  /**
   * URL de acceso remoto vía Tailscale (para testing en dispositivo)
   * Reemplazar con tu IP de Tailscale: hipótesis 100.x.x.x:8000
   */
  tailscaleApiUrl: 'http://100.x.x.x:8000',

  appName: 'HRDev Portfolio',
  version: '1.0.0'
};
