interface Window {
  AndroidBridge?: {
    setWebContentsDebuggingEnabled: (enabled: boolean) => void;
  };
  WebViewBridge?: {
    setWebContentsDebuggingEnabled: (enabled: boolean) => void;
  };
}

declare const Capacitor: {
  getPlatform(): string;
  getPlatformId(): string;
  isNativePlatform(): boolean;
  isPluginAvailable(name: string): boolean;
  isNative: boolean;
  platform: string;
};
