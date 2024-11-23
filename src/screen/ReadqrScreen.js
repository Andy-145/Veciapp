import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ReadqrScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aquí va lo de read QR jeje</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
  },
  text: {
    fontSize: 18,
    color: '#3a5a9f',
  },
});

export default ReadqrScreen;
