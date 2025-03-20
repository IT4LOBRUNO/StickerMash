import { Text, View, StyleSheet, Image, Linking, ScrollView } from 'react-native';
import React from 'react';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://docs.expo.dev/static/images/tutorial/logo.png' }} style={styles.image} />
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>Esse aplicativo deu uma dor de cabeça.</Text>
      <Text style={styles.text}></Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://docs.expo.dev/tutorial/introduction/')}>Tutorial: Usando React Native e Expo</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1e1e2e',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'justify',
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});
