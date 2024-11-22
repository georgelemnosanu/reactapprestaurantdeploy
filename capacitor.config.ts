import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'reactapprestaurant',
  webDir: 'build',
  server: {
    cleartext: true  // Permite cereri HTTP nesecurizate pe emulator
  }
};

export default config;