import { Platform } from 'react-native';
import Config from 'react-native-config';
console.log(Config);

export default {
  DEEPAR: {
    API_KEY: Platform.select({
      android: "0b54e89f6c8275043c9734ff15a998ae71579fd727bc9f20c8c6f5d54783be66c63f3a6132b26770",
      ios: Config.DEEPAR_IOS_API_KEY,
    }) as string,
  },
  TEST: {
    REMOTE_EFFECT_URL: 'http://betacoins.magix.net/public/deepar-filters/',
    EFFECTS: ['8bitHearts'],
  },
};
