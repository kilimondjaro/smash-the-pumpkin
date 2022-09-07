import { useFonts } from 'expo-font';

export const useFont = () => {
  const [fontsLoaded] = useFonts({
    Margarine: require('../assets/fonts/Margarine-Regular.ttf'),
  });

  return fontsLoaded;
};
