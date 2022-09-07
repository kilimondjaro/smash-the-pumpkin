import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
};

export const Button = ({ text, onPress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 70,
    backgroundColor: 'hsla(36, 100%, 41%, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(55, 33, 0, 0.79)',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  text: {
    fontFamily: 'Margarine',
    fontSize: 35,
    color: 'white',
  },
});
