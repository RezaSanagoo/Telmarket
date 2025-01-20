import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.telmarket.app',
  appName: 'TelMarket',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;