declare module '@capacitor/core' {
  interface PluginRegistry {
    SecureScreen: {
      enable(): Promise<void>;
      disable(): Promise<void>;
    };
  }
}