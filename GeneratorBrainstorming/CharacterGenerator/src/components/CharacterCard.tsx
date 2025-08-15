import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { CharacterCategory } from '../types';

interface CharacterCardProps {
  category: CharacterCategory;
  value: string;
  isSpinning: boolean;
  onPress: () => void;
  index: number;
}

const { width } = Dimensions.get('window');

const CharacterCard: React.FC<CharacterCardProps> = ({
  category,
  value,
  isSpinning,
  onPress,
  index,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Animación de giro
  useEffect(() => {
    if (isSpinning) {
      const spinAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.02,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true,
          }),
        ])
      );
      spinAnimation.start();

      return () => spinAnimation.stop();
    } else {
      scaleValue.setValue(1);
    }
  }, [isSpinning, scaleValue]);

  // Obtener colores basados en el accent
  const getColors = (accent: string) => {
    const colors: Record<string, { primary: string; secondary: string }> = {
      c1: { primary: '#ef4444', secondary: '#b91c1c' }, // Rol
      c2: { primary: '#f59e0b', secondary: '#b45309' }, // Profesión
      c3: { primary: '#10b981', secondary: '#065f46' }, // Interno
      c4: { primary: '#3b82f6', secondary: '#1e40af' }, // Externo
      c5: { primary: '#a855f7', secondary: '#6b21a8' }, // Temática
      c6: { primary: '#ec4899', secondary: '#9d174d' }, // Especie
      c7: { primary: '#14b8a6', secondary: '#0f766e' }, // Alineamiento moral
      c8: { primary: '#f43f5e', secondary: '#9f1239' }, // Objeto de interés
      c9: { primary: '#06b6d4', secondary: '#0e7490' }, // Características físicas
      c10: { primary: '#84cc16', secondary: '#65a30d' }, // Antecedentes
      c11: { primary: '#f97316', secondary: '#ea580c' }, // Motivaciones
      c12: { primary: '#8b5cf6', secondary: '#7c3aed' }, // Relaciones
      c13: { primary: '#06b6d4', secondary: '#0e7490' }, // Habilidades
      c14: { primary: '#dc2626', secondary: '#b91c1c' }, // Debilidades
      c15: { primary: '#059669', secondary: '#047857' }, // Entorno
      c16: { primary: '#7c3aed', secondary: '#6d28d9' }, // Elementos narrativos
      c17: { primary: '#0891b2', secondary: '#0e7490' }, // Características únicas
      c18: { primary: '#be185d', secondary: '#9d174d' }, // Elementos culturales
      c19: { primary: '#e11d48', secondary: '#be123c' }, // Orientación sexual
      c20: { primary: '#0d9488', secondary: '#0f766e' }, // Formato/Medio
      c21: { primary: '#f59e0b', secondary: '#d97706' }, // Estilo autor
      c22: { primary: '#10b981', secondary: '#059669' }, // Tipo de estilo
      c23: { primary: '#f472b6', secondary: '#db2777' }, // Género
    };

    return colors[accent] || colors.c1;
  };

  const colors = getColors(category.accent);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: colors.primary,
          transform: [{ scale: scaleValue }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.touchable}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.content}>
          <Text style={styles.label}>{category.key}</Text>
          <Text style={styles.value} numberOfLines={3}>
            {value}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
    minHeight: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 8,
  },
  touchable: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.85)',
    textTransform: 'uppercase',
    letterSpacing: 0.12,
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 0,
  },
  value: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.28)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 0,
  },
});

export default CharacterCard;
