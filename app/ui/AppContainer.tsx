import React from 'react';
import { View } from 'react-native';

import { useFont } from '../utils/useFont';

type AppContainer = {
  children: React.ReactNode;
};

export const AppContainer = ({ children }: AppContainer) => {
  const isFontLoaded = useFont();

  if (!isFontLoaded) {
    return null;
  }

  return <View style={{ flex: 1 }}>{children}</View>;
};
