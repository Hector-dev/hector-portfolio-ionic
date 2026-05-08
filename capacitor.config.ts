import { CapacitorConfig } from '@capacitor/cli';

/**
 * ============================================================
 * CAPACITOR CONFIG - Configuración para Android e iOS
 * ============================================================
 * Autor: Héctor Rodríguez
 *
 * androidScheme: 'https' → requerido para Capacitor 5
 * loggingBehavior: debug en dev, production en prod
 * ============================================================
 */
const config: CapacitorConfig = {
  appId: 'com.hectordev.portfolio',
  appName: 'HRDev Portfolio',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    StatusBar: {
      style: 'dark',
      backgroundColor: '#161b27'
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0d1117',
      showSpinner: false,
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP'
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    }
  },
  loggingBehavior: 'debug'
};

export default config;
