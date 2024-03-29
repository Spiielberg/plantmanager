import React, { useCallback, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const UserIdentification: React.FC = (): React.ReactElement => {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const navigation = useNavigation();

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!name);
    setIsFocused(false);
  }, [name]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputChange = useCallback((value: string) => {
    setIsFilled(!!value);
    setName(value);
  }, []);

  const handleSubmit = useCallback(() => {
    navigation.navigate('Confirmation');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ android: undefined, ios: 'padding' })}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>{isFilled ? '😄' : '😃'}</Text>

                <Text style={styles.title}>
                  Como podemos {'\n'} chamar você?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder='Digite um nome'
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.buttonWrapper}>
                <Button title='Confirmar' onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    padding: 56,
  },

  form: {
    flex: 1,
    maxWidth: 540,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
  },

  emoji: {
    fontSize: 40,
  },

  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    marginTop: 24,
  },

  input: {
    width: '100%',
    color: colors.body,
    fontFamily: fonts.text,
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 40,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },

  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default UserIdentification;
