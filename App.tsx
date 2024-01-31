import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Bem-vindo ao Desafio To-Do List App!
        </Text>
        <Text style={styles.sectionDescription}>
          Este é um aplicativo exemplo para iniciar o desafio. Sua tarefa é
          implementar as funcionalidades descritas no README.md e tornar este
          aplicativo funcional.
        </Text>
        <Text style={styles.sectionDescription}>
          Boa sorte e divirta-se codificando!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
  },
});

export default App;
