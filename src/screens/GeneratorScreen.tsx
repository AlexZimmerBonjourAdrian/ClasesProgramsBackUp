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
  Modal,
  Platform,
} from 'react-native';
import { useCharacterGenerator } from '../hooks/useCharacterGenerator';
import CharacterCard from '../components/CharacterCard';
// import AdvancedSettingsScreen from '../components/AdvancedSettingsScreen';
// import CharacterStats from '../components/CharacterStats';
// import { adService } from '../services/adService'; // Desactivado temporalmente

const { width, height } = Dimensions.get('window');

interface GeneratorScreenProps {
  mode?: 'concept' | 'writer';
}

const GeneratorScreen: React.FC<GeneratorScreenProps> = ({ mode = 'concept' }) => {
  const {
    activeBlocks,
    isSpinning,
    pickAndSet,
    toggleSpinningCard,
    toggleSpinningAll,
    startSpinningAll,
  } = useCharacterGenerator();

  const [cardValues, setCardValues] = useState<string[]>([]);
  // const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const intervalRefs = useRef<NodeJS.Timeout[]>([]);

  // Aplicar preset según modo al montar
  // useEffect(() => {
  //   if (mode === 'concept') {
  //     // Básico (equivale a setModeQuick)
  //     Object.entries(advancedSelections).forEach(([key]) => updateAdvancedSelections(key as any, false));
  //     ['tematica','especie','alineamiento','objeto','genero','orientacion','formato'].forEach(k => updateAdvancedSelections(k as any, true));
  //   } else if (mode === 'writer') {
  //     // Completo
  //     Object.entries(advancedSelections).forEach(([key]) => updateAdvancedSelections(key as any, true));
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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

  // Iniciar todas al entrar
  useEffect(() => {
    // Esperar a que existan bloques activos
    if (activeBlocks.length > 0 && !isSpinning.some(Boolean)) {
      startSpinningAll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBlocks.length]);

  const handleCardPress = (index: number) => {
    toggleSpinningCard(index);
  };

  const handleToggleAll = () => {
    toggleSpinningAll();
  };

  const handleStartAll = () => {
    startSpinningAll();
  };

  // Reiniciar el giro de todas cuando ya están detenidas
  const handleTryAgain = () => {
    if (isSpinning.some(Boolean)) return;
    startSpinningAll();
  };

  // const handleAdvancedSettingsChange = (newSelections: any) => {
  //   // Actualizar cada selección individualmente
  //   Object.entries(newSelections).forEach(([key, value]) => {
  //     updateAdvancedSelections(key as any, value as boolean);
  //   });
  // };

  const getToggleButtonText = () => {
    const anySpinning = isSpinning.some(Boolean);
    return anySpinning ? 'Detener todas' : 'Volver a girar';
  };

  // const getActiveCategoriesCount = () => {
  //   return Object.values(advancedSelections).filter(Boolean).length;
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Diseño de personajes</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* <CharacterStats ...comentado para simplificar a las 4 básicas... /> */}

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

      {isSpinning.length > 0 && isSpinning.every(v => !v) && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.tryButton} onPress={handleTryAgain} activeOpacity={0.85}>
            <Text style={styles.tryButtonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal de configuración avanzada comentado */}
      {/* <Modal visible={showAdvancedSettings} animationType="slide" presentationStyle="pageSheet">
        <AdvancedSettingsScreen
          advancedSelections={advancedSelections}
          onAdvancedSelectionsChange={handleAdvancedSettingsChange}
          onClose={() => setShowAdvancedSettings(false)}
        />
      </Modal> */}

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
    backgroundColor: '#e6f0ff', // AliceBlue-like
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(15, 23, 42, 0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 8,
    letterSpacing: 0.4,
  },
  subtitle: { display: 'none' as any },
  advancedButton: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderWidth: 1,
    borderColor: '#3b82f6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  advancedButtonText: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
    paddingTop: 12,
  },
  cardsContainer: {
    paddingHorizontal: 12,
    maxWidth: 920,
    alignSelf: 'center',
    width: '100%',
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: Platform.OS === 'android' ? 20 : 16,
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: 'rgba(15, 23, 42, 0.08)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  tryButton: {
    backgroundColor: '#d4af37',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#b68c1a',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  tryButtonDisabled: {
    backgroundColor: '#e8ce72',
    shadowOpacity: 0.12,
  },
  tryButtonText: {
    color: '#0f172a',
    fontWeight: '900',
    fontSize: 18,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  tryButtonTextDisabled: {
    color: 'rgba(31, 41, 55, 0.7)',
  },
  bannerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default GeneratorScreen;
