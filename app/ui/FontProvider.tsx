import React from 'react';
import { useFonts } from 'expo-font';

type FontProviderProps = {
  children: React.ReactNode;
};

export const FontProvider = ({ children }: FontProviderProps) => {
  const [isFontLoaded] = useFonts({
    Margarine: require('../assets/fonts/Margarine.ttf'),
  });

  if (!isFontLoaded) {
    return null;
  }

  return <>{children}</>;
};
