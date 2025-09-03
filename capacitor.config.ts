import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.rentsafe.escrow",
  appName: "escrow-capacitor",
  server: {
    url: "https://escrow-3.vercel.app",
  },
};

export default config;
