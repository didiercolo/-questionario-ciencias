import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.didiercolo.questionario',
  appName: 'Cuestionario Ciencias',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
    cleartext: true,
    hostname: 'localhost',
    url: 'file:///android_asset/public/index.html',
    allowNavigation: ['*']
  },
  // Configure Android to use the file protocol for assets
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'key0',
      keystorePassword: process.env.ANDROID_KEYSTORE_PASSWORD,
      keystoreAliasPassword: process.env.ANDROID_KEY_PASSWORD,
    },
    // Use the server configuration from the root level
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    }
  }
};

export default config;
