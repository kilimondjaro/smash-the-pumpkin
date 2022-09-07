import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';

export const Background = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Image
        style={{ height: '100%', width: '100%' }}
        source={require('../assets/images/graveyard.png')}
      />
    </View>
  );
};
