import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../styles/colors';

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
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 40,
  },

  buttonText: {
    fontSize: 24,
    color: colors.white,
  },
});

export default Button;
