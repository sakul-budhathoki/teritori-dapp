import { ExpoConfig } from "expo/config";

export default (): { expo: ExpoConfig } => {
  console.log("process.env.isMini", process.env.isMini);
  if (process.env.isMini) {
    return {
      expo: {
        name: "teritori-mini",
        slug: "teritori-mini",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
          image: "./assets/splash.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
        updates: {
          fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
          supportsTablet: true,
          bundleIdentifier: "com.teritori.mini",
        },
        android: {
          adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#FFFFFF",
          },
        },
        web: {
          favicon: "./assets/favicon.png",
          bundler: "webpack",
        },

        extra: {
          env: process.env,
          eas: {
            projectId: "9ce165de-0199-478c-b3bd-8688e5ce03eb",
          },
        },
      },
    };
  } else {
    return {
      expo: {
        name: "teritori-dapp",
        slug: "teritori-dapp",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
          image: "./assets/splash.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
        updates: {
          fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
          supportsTablet: true,
        },
        android: {
          adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#FFFFFF",
          },
        },
        web: {
          favicon: "./assets/favicon.png",
          bundler: "webpack",
        },
      },
    };
  }
};
