import { ExpoConfig } from "expo/config";

export default (): { expo: ExpoConfig } => {
  if (process.env.isMini) {
    return {
      expo: {
        name: "Teritori Mini",
        slug: "teritori-mini",
        version: "1.0.0",
        owner: "teritori",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
          image: "./assets/splash.png",
          resizeMode: "contain",
          backgroundColor: "#000000",
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
            foregroundImage: "./assets/icon.png",
            backgroundColor: "#FFFFFF",
          },
          package: "com.teritori.mini",
        },
        web: {
          favicon: "./assets/favicon.png",
          bundler: "webpack",
        },
        extra: {
          env: process.env,
        },
      },
    };
  } else {
    return {
      expo: {
        name: "Teritori",
        slug: "teritori",
        version: "1.0.0",
        owner: "teritori",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
          image: "./assets/splash.png",
          resizeMode: "contain",
          backgroundColor: "#000000",
        },
        updates: {
          fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
          supportsTablet: true,
          bundleIdentifier: "com.teritori",
        },
        android: {
          adaptiveIcon: {
            foregroundImage: "./assets/icon.png",
            backgroundColor: "#FFFFFF",
          },
          package: "com.teritori",
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
  }
};
