import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

import colors from '../styles/colors';

import wateringImg from '../assets/watering.png';

import Button from '../components/Button';

const Welcome = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'} suas plantas de {'\n'} forma fácil
      </Text>

      <Image style={styles.image} source={wateringImg} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button title='>' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 40,
  },

  image: {
    width: 294,
    height: 285,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.heading,
  },
});

export default Welcome;
