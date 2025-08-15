import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AdvancedSelections } from '../types';

interface CharacterStatsProps {
  advancedSelections: AdvancedSelections;
  activeBlocksCount: number;
  onShowAdvancedSettings: () => void;
}

const CharacterStats: React.FC<CharacterStatsProps> = ({
  advancedSelections,
  activeBlocksCount,
  onShowAdvancedSettings,
}) => {
  // Contar categorías por sección
  const getSectionStats = () => {
    const sections = [
      {
        name: 'Básicas',
        keys: ['tematica', 'especie', 'alineamiento', 'objeto', 'genero', 'orientacion', 'formato'],
        color: '#ef4444'
      },
      {
        name: 'Estilos',
        keys: ['estiloAutor', 'tipoEstilo'],
        color: '#f59e0b'
      },
      {
        name: 'Físicas',
        keys: ['edad', 'altura', 'complexion', 'caracteristicas'],
        color: '#10b981'
      },
      {
        name: 'Antecedentes',
        keys: ['claseSocial', 'origen', 'educacion', 'historiaFamiliar'],
        color: '#3b82f6'
      },
      {
        name: 'Motivaciones',
        keys: ['motivacion', 'objetivoCorto', 'sueno'],
        color: '#a855f7'
      },
      {
        name: 'Relaciones',
        keys: ['estadoCivil', 'relacionFamiliar', 'conexionSocial'],
        color: '#ec4899'
      },
      {
        name: 'Habilidades',
        keys: ['habilidadEspecial', 'talentoArtistico', 'conocimiento'],
        color: '#14b8a6'
      },
      {
        name: 'Debilidades',
        keys: ['miedo', 'vicio', 'trauma'],
        color: '#f43f5e'
      },
      {
        name: 'Entorno',
        keys: ['epoca', 'clima', 'entornoUrbano'],
        color: '#06b6d4'
      },
      {
        name: 'Narrativos',
        keys: ['tipoConflicto', 'arcoPersonaje', 'funcionTrama'],
        color: '#84cc16'
      },
      {
        name: 'Únicas',
        keys: ['poder', 'condicion', 'marca'],
        color: '#f97316'
      },
      {
        name: 'Culturales',
        keys: ['religion', 'cultura', 'valores'],
        color: '#8b5cf6'
      }
    ];

    return sections.map(section => {
      const activeCount = section.keys.reduce((count, key) => {
        return count + (advancedSelections[key as keyof AdvancedSelections] ? 1 : 0);
      }, 0);
      
      return {
        ...section,
        activeCount,
        totalCount: section.keys.length,
        percentage: Math.round((activeCount / section.keys.length) * 100)
      };
    }).filter(section => section.activeCount > 0);
  };

  const sectionStats = getSectionStats();
  const totalActive = Object.values(advancedSelections).filter(Boolean).length;
  const totalPossible = Object.keys(advancedSelections).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Estadísticas</Text>
        <TouchableOpacity onPress={onShowAdvancedSettings} style={styles.configButton}>
          <Text style={styles.configButtonText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          {totalActive} de {totalPossible} categorías activas ({Math.round((totalActive / totalPossible) * 100)}%)
        </Text>
        <Text style={styles.blocksText}>
          {activeBlocksCount} bloques generando
        </Text>
      </View>

      {sectionStats.length > 0 && (
        <View style={styles.sectionsContainer}>
          <Text style={styles.sectionsTitle}>Categorías por sección:</Text>
          {sectionStats.map((section, index) => (
            <View key={section.name} style={styles.sectionRow}>
              <View style={styles.sectionInfo}>
                <View style={[styles.colorDot, { backgroundColor: section.color }]} />
                <Text style={styles.sectionName}>{section.name}</Text>
              </View>
              <View style={styles.sectionStats}>
                <Text style={styles.sectionCount}>
                  {section.activeCount}/{section.totalCount}
                </Text>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill, 
                      { 
                        width: `${section.percentage}%`,
                        backgroundColor: section.color 
                      }
                    ]} 
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      )}

      {totalActive === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>
            No hay categorías avanzadas activas
          </Text>
          <TouchableOpacity onPress={onShowAdvancedSettings} style={styles.emptyStateButton}>
            <Text style={styles.emptyStateButtonText}>Configurar categorías</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e5e7eb',
  },
  configButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  configButtonText: {
    fontSize: 16,
  },
  summary: {
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 16,
    color: '#e5e7eb',
    fontWeight: '600',
    marginBottom: 4,
  },
  blocksText: {
    fontSize: 14,
    color: '#94a3b8',
  },
  sectionsContainer: {
    marginTop: 8,
  },
  sectionsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 8,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  colorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  sectionName: {
    fontSize: 14,
    color: '#e5e7eb',
    flex: 1,
  },
  sectionStats: {
    alignItems: 'flex-end',
    minWidth: 80,
  },
  sectionCount: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 2,
  },
  progressBar: {
    width: 60,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#94a3b8',
    marginBottom: 12,
  },
  emptyStateButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  emptyStateButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CharacterStats;
