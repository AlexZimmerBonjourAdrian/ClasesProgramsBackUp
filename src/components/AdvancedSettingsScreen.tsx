import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { AdvancedSelections } from '../types';

interface AdvancedSettingsScreenProps {
  advancedSelections: AdvancedSelections;
  onAdvancedSelectionsChange: (selections: AdvancedSelections) => void;
  onClose: () => void;
}

const { width } = Dimensions.get('window');

const AdvancedSettingsScreen: React.FC<AdvancedSettingsScreenProps> = ({
  advancedSelections,
  onAdvancedSelectionsChange,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hideEmptySections, setHideEmptySections] = useState(false);
  const [localSelections, setLocalSelections] = useState<AdvancedSelections>(advancedSelections);

  // Secciones organizadas
  const sections = [
    {
      id: 'basicas',
      title: 'Básicas',
      keys: ['tematica', 'especie', 'alineamiento', 'objeto', 'genero', 'orientacion', 'formato'],
      labels: ['Temática', 'Especie', 'Alineamiento moral', 'Objeto de interés', 'Género', 'Orientación sexual', 'Formato/Medio']
    },
    {
      id: 'estilos',
      title: 'Estilos',
      keys: ['estiloAutor', 'tipoEstilo'],
      labels: ['Estilo de autor', 'Tipo de estilo']
    },
    {
      id: 'fisicas',
      title: 'Características físicas',
      keys: ['edad', 'altura', 'complexion', 'caracteristicas'],
      labels: ['Edad', 'Altura', 'Complexión', 'Características distintivas']
    },
    {
      id: 'antecedentes',
      title: 'Antecedentes',
      keys: ['claseSocial', 'origen', 'educacion', 'historiaFamiliar'],
      labels: ['Clase social', 'Lugar de origen', 'Educación', 'Historia familiar']
    },
    {
      id: 'motivaciones',
      title: 'Motivaciones',
      keys: ['motivacion', 'objetivoCorto', 'sueno'],
      labels: ['Motivación principal', 'Objetivo a corto plazo', 'Sueño/aspiración']
    },
    {
      id: 'relaciones',
      title: 'Relaciones',
      keys: ['estadoCivil', 'relacionFamiliar', 'conexionSocial'],
      labels: ['Estado civil', 'Relación familiar', 'Conexión social']
    },
    {
      id: 'habilidades',
      title: 'Habilidades',
      keys: ['habilidadEspecial', 'talentoArtistico', 'conocimiento'],
      labels: ['Habilidad especial', 'Talento artístico', 'Conocimiento especializado']
    },
    {
      id: 'debilidades',
      title: 'Debilidades',
      keys: ['miedo', 'vicio', 'trauma'],
      labels: ['Miedo', 'Vicio', 'Trauma']
    },
    {
      id: 'entorno',
      title: 'Entorno',
      keys: ['epoca', 'clima', 'entornoUrbano'],
      labels: ['Época', 'Clima', 'Entorno urbano']
    },
    {
      id: 'narrativos',
      title: 'Elementos narrativos',
      keys: ['tipoConflicto', 'arcoPersonaje', 'funcionTrama'],
      labels: ['Tipo de conflicto', 'Arco de personaje', 'Función en la trama']
    },
    {
      id: 'unicas',
      title: 'Características únicas',
      keys: ['poder', 'condicion', 'marca'],
      labels: ['Poder/Don', 'Condición especial', 'Marca distintiva']
    },
    {
      id: 'culturales',
      title: 'Elementos culturales',
      keys: ['religion', 'cultura', 'valores'],
      labels: ['Religión', 'Cultura', 'Valores']
    }
  ];

  // Funciones de control
  const updateSelection = (key: keyof AdvancedSelections, value: boolean) => {
    const newSelections = { ...localSelections, [key]: value };
    setLocalSelections(newSelections);
  };

  const selectAll = () => {
    const allTrue = Object.keys(localSelections).reduce((acc, key) => {
      acc[key as keyof AdvancedSelections] = true;
      return acc;
    }, {} as AdvancedSelections);
    setLocalSelections(allTrue);
  };

  const deselectAll = () => {
    const allFalse = Object.keys(localSelections).reduce((acc, key) => {
      acc[key as keyof AdvancedSelections] = false;
      return acc;
    }, {} as AdvancedSelections);
    setLocalSelections(allFalse);
  };

  const setModeQuick = () => {
    const quickMode = { ...localSelections };
    Object.keys(quickMode).forEach(key => {
      quickMode[key as keyof AdvancedSelections] = false;
    });
    ['tematica', 'especie', 'alineamiento', 'objeto', 'genero', 'orientacion', 'formato'].forEach(key => {
      quickMode[key as keyof AdvancedSelections] = true;
    });
    setLocalSelections(quickMode);
  };

  const setModeIntermediate = () => {
    const intermediateMode = { ...localSelections };
    Object.keys(intermediateMode).forEach(key => {
      intermediateMode[key as keyof AdvancedSelections] = false;
    });
    ['tematica', 'especie', 'alineamiento', 'objeto', 'genero', 'orientacion', 'formato', 'motivacion', 'objetivoCorto', 'sueno', 'tipoConflicto', 'arcoPersonaje', 'funcionTrama', 'estiloAutor', 'tipoEstilo'].forEach(key => {
      intermediateMode[key as keyof AdvancedSelections] = true;
    });
    setLocalSelections(intermediateMode);
  };

  const setModeFull = () => {
    selectAll();
  };

  const selectSection = (sectionKeys: string[]) => {
    const newSelections = { ...localSelections };
    Object.keys(newSelections).forEach(key => {
      newSelections[key as keyof AdvancedSelections] = false;
    });
    sectionKeys.forEach(key => {
      newSelections[key as keyof AdvancedSelections] = true;
    });
    setLocalSelections(newSelections);
  };

  // Contar elementos activos por sección
  const getSectionCount = (sectionKeys: string[]) => {
    return sectionKeys.reduce((count, key) => {
      return count + (localSelections[key as keyof AdvancedSelections] ? 1 : 0);
    }, 0);
  };

  // Filtrar secciones por búsqueda
  const filteredSections = sections.filter(section => {
    if (!searchQuery) return true;
    return section.labels.some(label => 
      label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Aplicar cambios
  const applyChanges = () => {
    onAdvancedSelectionsChange(localSelections);
    onClose();
  };

  // Cancelar cambios
  const cancelChanges = () => {
    setLocalSelections(advancedSelections);
    onClose();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Configuración Avanzada</Text>
        <TouchableOpacity onPress={cancelChanges} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Controles globales */}
        <View style={styles.globalControls}>
          <Text style={styles.sectionTitle}>Modos predefinidos</Text>
          <View style={styles.modeButtons}>
            <TouchableOpacity style={styles.modeButton} onPress={setModeQuick}>
              <Text style={styles.modeButtonText}>Rápido</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modeButton} onPress={setModeIntermediate}>
              <Text style={styles.modeButtonText}>Intermedio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modeButton} onPress={setModeFull}>
              <Text style={styles.modeButtonText}>Completo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton} onPress={selectAll}>
              <Text style={styles.actionButtonText}>Marcar todas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={deselectAll}>
              <Text style={styles.actionButtonText}>Desmarcar todas</Text>
            </TouchableOpacity>
          </View>

          {/* Búsqueda */}
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar categoría..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* Ocultar secciones vacías */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Ocultar secciones no activas</Text>
            <Switch
              value={hideEmptySections}
              onValueChange={setHideEmptySections}
              trackColor={{ false: '#374151', true: '#3b82f6' }}
              thumbColor={hideEmptySections ? '#ffffff' : '#9ca3af'}
            />
          </View>
        </View>

        {/* Secciones */}
        {filteredSections.map(section => {
          const activeCount = getSectionCount(section.keys);
          const shouldHide = hideEmptySections && activeCount === 0;
          
          if (shouldHide) return null;

          return (
            <View key={section.id} style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  {section.title} ({activeCount}/{section.keys.length})
                </Text>
                <TouchableOpacity 
                  style={styles.sectionButton}
                  onPress={() => selectSection(section.keys)}
                >
                  <Text style={styles.sectionButtonText}>Seleccionar</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.checkboxGrid}>
                {section.keys.map((key, index) => (
                  <View key={key} style={styles.checkboxItem}>
                    <Switch
                      value={localSelections[key as keyof AdvancedSelections]}
                      onValueChange={(value) => updateSelection(key as keyof AdvancedSelections, value)}
                      trackColor={{ false: '#374151', true: '#3b82f6' }}
                      thumbColor={localSelections[key as keyof AdvancedSelections] ? '#ffffff' : '#9ca3af'}
                    />
                    <Text style={styles.checkboxLabel}>{section.labels[index]}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Botones de acción */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton} onPress={cancelChanges}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applyChanges}>
          <Text style={styles.applyButtonText}>Aplicar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e5e7eb',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#e5e7eb',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  globalControls: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 12,
  },
  modeButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  modeButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modeButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#e5e7eb',
    fontSize: 14,
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchLabel: {
    color: '#94a3b8',
    fontSize: 14,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionButton: {
    backgroundColor: '#7c3aed',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  sectionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  checkboxGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    minWidth: width * 0.4,
  },
  checkboxLabel: {
    color: '#e5e7eb',
    fontSize: 14,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#374151',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#374151',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#e5e7eb',
    fontSize: 16,
    fontWeight: '600',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AdvancedSettingsScreen;
