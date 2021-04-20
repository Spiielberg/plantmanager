import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import colors from '../styles/colors';

interface LoadingProps {
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({
  color = colors.gray,
}): React.ReactElement => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default Loading;
