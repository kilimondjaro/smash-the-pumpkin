import { TouchableOpacity, Image } from 'react-native';

type PumpkinProps = {
  onPress: () => void;
};

export const Pumpkin = ({ onPress }: PumpkinProps) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={require('../assets/images/pumpkin.png')} />
  </TouchableOpacity>
);

export const pumpkinDimensions = {
  width: 150,
  height: 150,
};
