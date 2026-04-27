import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourname.myapp',
  appName: 'My App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;