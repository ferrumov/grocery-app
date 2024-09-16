const IS_DEV = process.env.APP_VARIANT === 'development';

const getUniqueIdentifier = () => {
  return IS_DEV ? 'com.ferrumov.grocery-list-app.dev' : 'com.ferrumov.grocery-list-app';
};

const getAppName = () => {
  return IS_DEV ? 'Grocery List (Dev)' : 'Grocery List';
};

export default {
  name: getAppName(),
  slug: 'expo-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',

  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    package: getUniqueIdentifier(),
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  experiments: {
    tsconfigPaths: true,
  },
};

// {
//   "expo": {
//     "name": "expo-app",
//     "slug": "expo-app",
//     "version": "1.0.0",
//     "orientation": "portrait",
//     "icon": "./assets/icon.png",
//     "userInterfaceStyle": "light",

//     "splash": {
//       "image": "./assets/splash.png",
//       "resizeMode": "contain",
//       "backgroundColor": "#ffffff"
//     },
//     "assetBundlePatterns": ["**/*"],
//     "ios": {
//       "supportsTablet": false,
//       "bundleIdentifier": "com.zheleznov.grocery-list-app"
//     },
//     "android": {
//       "package": "com.zheleznov.grocery-list-app",
//       "adaptiveIcon": {
//         "foregroundImage": "./assets/adaptive-icon.png",
//         "backgroundColor": "#ffffff"
//       }
//     },
//     "web": {
//       "favicon": "./assets/favicon.png"
//     },
//     "experiments": {
//       "tsconfigPaths": true
//     }
//   }
// }
