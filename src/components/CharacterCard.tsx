import React, { useEffect, useMemo, useRef } from 'react';
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
  const pressScale = useRef(new Animated.Value(1)).current;
  const appearOpacity = useRef(new Animated.Value(0)).current;
  const appearTranslateY = useRef(new Animated.Value(12)).current;

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

  // Animación de aparición por tarjeta (stagger por índice)
  useEffect(() => {
    Animated.parallel([
      Animated.timing(appearOpacity, { toValue: 1, duration: 320, delay: index * 60, useNativeDriver: true }),
      Animated.timing(appearTranslateY, { toValue: 0, duration: 320, delay: index * 60, useNativeDriver: true }),
    ]).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePressIn = () => {
    Animated.spring(pressScale, { toValue: 0.985, useNativeDriver: true, bounciness: 6 }).start();
  };
  const handlePressOut = () => {
    Animated.spring(pressScale, { toValue: 1, useNativeDriver: true, bounciness: 6 }).start();
  };

  // Paleta por acento (sólida, minimalista)
  const getAccentColor = (accent: string) => {
    const colors: Record<string, string> = {
      c1: '#dc2626', // rojo (Rol)
      c2: '#f59e0b', // naranja (Profesión)
      c3: '#059669', // verde (Interno)
      c4: '#2563eb', // azul (Externo)
    };
    return colors[accent] || '#4b5563';
  };
  const accentColor = getAccentColor(category.accent);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          backgroundColor: accentColor,
          opacity: appearOpacity,
          transform: [
            { translateY: appearTranslateY },
            { scale: Animated.multiply(scaleValue, pressScale) },
          ],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.touchable}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
      >
        <View style={styles.content}>
          <Text style={styles.labelMinimal}>{category.key}</Text>
          <Text style={styles.value} numberOfLines={3}>{value}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    marginHorizontal: 8,
    marginVertical: 8,
    minHeight: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  touchable: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  labelMinimal: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: 28,
    textAlign: 'left',
  },
});

export default CharacterCard;
