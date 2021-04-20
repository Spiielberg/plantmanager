import React, { useCallback } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import wateringImg from '../assets/watering.png';

const Welcome: React.FC = (): React.ReactElement => {
  const navigation = useNavigation();

  const handleStart = useCallback(() => {
    navigation.navigate('UserIdentification');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>

        <Image style={styles.image} source={wateringImg} resizeMode='contain' />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <RectButton style={styles.button} onPress={handleStart}>
          <Feather name='chevron-right' style={styles.buttonIcon} />
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },

  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 40,
  },

  image: {
    height: Dimensions.get('window').width * 0.7,
  },

  subtitle: {
    color: colors.body,
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 40,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});

export default Welcome;
