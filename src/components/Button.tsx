import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }): React.ReactElement => {
  return (
    <RectButton style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.text,
    fontSize: 18,
  },
});

export default Button;
