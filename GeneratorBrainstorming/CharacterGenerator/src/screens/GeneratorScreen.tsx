import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import { useCharacterGenerator } from '../hooks/useCharacterGenerator';
import CharacterCard from '../components/CharacterCard';
// import { adService } from '../services/adService'; // Desactivado temporalmente

const { width, height } = Dimensions.get('window');

const GeneratorScreen: React.FC = () => {
  const {
    activeBlocks,
    isSpinning,
    pickAndSet,
    toggleSpinningCard,
    toggleSpinningAll,
    startSpinningAll,
  } = useCharacterGenerator();

  const [cardValues, setCardValues] = useState<string[]>([]);
  const intervalRefs = useRef<NodeJS.Timeout[]>([]);

  // Generar valores iniciales solo una vez cuando cambian los bloques activos
  useEffect(() => {
    if (activeBlocks.length > 0) {
      const initialValues = activeBlocks.map((_, index) => {
        try {
          return pickAndSet(index);
        } catch (error) {
          console.error('Error generating initial value for index:', index, error);
          return '';
        }
      });
      setCardValues(initialValues);
    }
  }, [activeBlocks.length]); // Solo depende de la longitud, no de activeBlocks completo

  // Manejar animaciones de giro
  useEffect(() => {
    // Limpiar intervalos anteriores
    intervalRefs.current.forEach(clearInterval);
    intervalRefs.current = [];

    // Crear nuevos intervalos para las cartas que están girando
    isSpinning.forEach((spinning, index) => {
      if (spinning) {
        const interval = setInterval(() => {
          try {
            const newValue = pickAndSet(index);
            setCardValues(prev => {
              const newValues = [...prev];
              newValues[index] = newValue;
              return newValues;
            });
          } catch (error) {
            console.error('Error in spinning animation for index:', index, error);
          }

                     // Incrementar contador de anuncios (desactivado temporalmente)
           // const adShown = adService.incrementSpinCount();
           // if (adShown) {
           //   console.log('Anuncio mostrado después de 3 tiradas');
           // }
        }, 120);

        intervalRefs.current.push(interval);
      }
    });

    return () => {
      intervalRefs.current.forEach(clearInterval);
    };
  }, [isSpinning]); // Solo depende de isSpinning, no de pickAndSet

  const handleCardPress = (index: number) => {
    toggleSpinningCard(index);
  };

  const handleToggleAll = () => {
    toggleSpinningAll();
  };

  const handleStartAll = () => {
    startSpinningAll();
  };

  const getToggleButtonText = () => {
    const anySpinning = isSpinning.some(Boolean);
    return anySpinning ? 'Detener todas' : 'Volver a girar';
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Personaje</Text>
        <Text style={styles.subtitle}>
          Genera un personaje con rol, profesión y rasgos internos/externos.
        </Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardsContainer}>
          {activeBlocks.map((category, index) => (
            <CharacterCard
              key={`${category.key}-${index}`}
              category={category}
              value={cardValues[index] || ''}
              isSpinning={isSpinning[index] || false}
              onPress={() => handleCardPress(index)}
              index={index}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={handleToggleAll}
          activeOpacity={0.8}
        >
          <Text style={styles.toggleButtonText}>{getToggleButtonText()}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.startButton}
          onPress={handleStartAll}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Iniciar todas</Text>
        </TouchableOpacity>
      </View>

             {/* Banner de anuncios (desactivado temporalmente) */}
       {/* <View style={styles.bannerContainer}>
         {adService.getBannerAd()}
       </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e5e7eb',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  cardsContainer: {
    paddingHorizontal: 12,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  toggleButton: {
    flex: 1,
    backgroundColor: '#22d3ee',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 8,
  },
  toggleButtonText: {
    color: '#001018',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.2,
  },
  startButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 8,
  },
  startButtonText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.2,
  },
  bannerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default GeneratorScreen;
