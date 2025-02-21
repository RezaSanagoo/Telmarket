import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mojfinance.app',
  appName: 'Moj Finance',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    ScreenCapture: {
      enable: true
    }
  }
};

export default config;