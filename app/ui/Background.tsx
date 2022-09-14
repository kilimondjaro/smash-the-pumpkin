import { Image, View, StyleSheet } from 'react-native';

export const Background = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Image
        style={{ width: '100%', height: '100%' }}
        source={require('../assets/images/graveyard.png')}
      />
    </View>
  );
};
