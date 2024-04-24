import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "Epicus",
  webDir: "dist",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  server: {
    hostname: "http://localhost:8100",
    androidScheme: "https",
    url: "http://192.168.10.3:8100",
    cleartext: true,
  },
};

export default config;
