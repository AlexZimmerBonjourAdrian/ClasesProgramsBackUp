import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeNav = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeNav;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Selecciona un generador</Text>
      <View style={styles.cards}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#22c55e' }]}
          onPress={() => navigation.navigate('Tabs', { initialTab: 'Concept' })}
          activeOpacity={0.9}
        >
          <Text style={styles.cardTitle}>Character Concept Art</Text>
          <Text style={styles.cardSubtitle}>Opciones básicas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#3b82f6' }]}
          onPress={() => navigation.navigate('Tabs', { initialTab: 'Writer' })}
          activeOpacity={0.9}
        >
          <Text style={styles.cardTitle}>Writer Character</Text>
          <Text style={styles.cardSubtitle}>Todas las opciones</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
    padding: 24,
  },
  title: {
    color: '#e5e7eb',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 16,
  },
  cards: {
    gap: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
  },
  cardTitle: {
    color: '#001018',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: 'rgba(0, 16, 24, 0.8)',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HomeScreen;


