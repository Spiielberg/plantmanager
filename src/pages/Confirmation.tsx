import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Confirmation: React.FC = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😁</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.buttonWrapper}>
          <Button title='Começar' />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    maxWidth: 540,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 56,
  },

  emoji: {
    fontSize: 64,
  },

  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 24,
    marginTop: 40,
  },

  subtitle: {
    color: colors.body,
    fontFamily: fonts.text,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
  },

  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default Confirmation;
