import { StyleSheet, Image, TouchableOpacity } from 'react-native';

type PumpkinProps = {
  onPress: () => void;
};

export const pumpkinDimensions = {
  height: 150,
  width: 150,
};

export const Pumpkin = ({ onPress }: PumpkinProps) => (
  <TouchableOpacity style={styles.pumpkin} onPress={onPress}>
    <Image style={styles.pumpkin} source={require('../assets/images/pumpkin.png')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pumpkin: {
    width: pumpkinDimensions.width,
    height: pumpkinDimensions.height,
  },
});
