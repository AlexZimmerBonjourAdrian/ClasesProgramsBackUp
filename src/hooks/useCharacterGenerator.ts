import { useState, useEffect, useCallback, useMemo } from 'react';
import { CharacterCategory, AdvancedSelections, CharacterCard } from '../types';
import { BASE_DATA, ADVANCED_DATA } from '../data/characterData';

export const useCharacterGenerator = () => {
  const [activeBlocks, setActiveBlocks] = useState<CharacterCategory[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean[]>([]);
  const [lastIndexByKey, setLastIndexByKey] = useState<Record<string, number>>({});
  // const [advancedSelections, setAdvancedSelections] = useState<AdvancedSelections>({
  //   // Básicas
  //   tematica: false, especie: false, alineamiento: false, objeto: false, genero: false, orientacion: false, formato: false,
  //   // Estilos
  //   estiloAutor: false, tipoEstilo: false,
  //   // Características físicas
  //   edad: false, altura: false, complexion: false, caracteristicas: false,
  //   // Antecedentes
  //   claseSocial: false, origen: false, educacion: false, historiaFamiliar: false,
  //   // Motivaciones
  //   motivacion: false, objetivoCorto: false, sueno: false,
  //   // Relaciones
  //   estadoCivil: false, relacionFamiliar: false, conexionSocial: false,
  //   // Habilidades
  //   habilidadEspecial: false, talentoArtistico: false, conocimiento: false,
  //   // Debilidades
  //   miedo: false, vicio: false, trauma: false,
  //   // Entorno
  //   epoca: false, clima: false, entornoUrbano: false,
  //   // Elementos narrativos
  //   tipoConflicto: false, arcoPersonaje: false, funcionTrama: false,
  //   // Características únicas
  //   poder: false, condicion: false, marca: false,
  //   // Elementos culturales
  //   religion: false, cultura: false, valores: false
  // });

  // Función para generar índice aleatorio evitando repetición inmediata
  const randomIndex = useCallback((size: number, avoidIndex: number = -1): number => {
    if (size <= 1) return 0;
    let idx = Math.floor(Math.random() * size);
    if (idx === avoidIndex) idx = (idx + 1) % size;
    return idx;
  }, []);

  // Función para obtener valor aleatorio de una categoría
  const pickAndSet = useCallback((cardIndex: number): string => {
    if (!activeBlocks[cardIndex]) return '';
    const { key, list } = activeBlocks[cardIndex];
    const prev = lastIndexByKey[key] ?? -1;
    const idx = randomIndex(list.length, prev);
    setLastIndexByKey(prev => ({ ...prev, [key]: idx }));
    return list[idx];
  }, [activeBlocks, lastIndexByKey, randomIndex]);

  // Función para obtener bloques activos: solo las 4 básicas (Rol, Profesión, Interno, Externo)
  const getActiveBlocks = useMemo((): CharacterCategory[] => {
    const blocks = [...BASE_DATA];
    // Comentado: categorías avanzadas deshabilitadas
    // if (advancedSelections.tematica) blocks.push(ADVANCED_DATA.tematica);
    // ... (resto de categorías avanzadas)
    return blocks;
  }, []);

  // Función para iniciar el giro de una carta
  const startSpinningCard = useCallback((cardIndex: number) => {
    setIsSpinning(prev => {
      if (prev[cardIndex]) return prev; // ya girando
      const newSpinning = [...prev];
      newSpinning[cardIndex] = true;
      return newSpinning;
    });
  }, []);

  // Función para detener el giro de una carta
  const stopSpinningCard = useCallback((cardIndex: number) => {
    setIsSpinning(prev => {
      if (!prev[cardIndex]) return prev; // ya detenido
      const newSpinning = [...prev];
      newSpinning[cardIndex] = false;
      return newSpinning;
    });
  }, []);

  // Función para iniciar el giro de todas las cartas
  const startSpinningAll = useCallback(() => {
    setIsSpinning(new Array(activeBlocks.length).fill(true));
  }, [activeBlocks.length]);

  // Función para detener el giro de todas las cartas
  const stopSpinningAll = useCallback(() => {
    setIsSpinning(new Array(activeBlocks.length).fill(false));
  }, [activeBlocks.length]);

  // Función para alternar el giro de una carta
  const toggleSpinningCard = useCallback((cardIndex: number) => {
    setIsSpinning(prev => {
      const newSpinning = [...prev];
      newSpinning[cardIndex] = !newSpinning[cardIndex];
      return newSpinning;
    });
  }, []);

  // Función para alternar el giro de todas las cartas
  const toggleSpinningAll = useCallback(() => {
    setIsSpinning(prev => {
      const anySpinning = prev.some(Boolean);
      return new Array(activeBlocks.length).fill(!anySpinning);
    });
  }, [activeBlocks.length]);

  // const updateAdvancedSelections = useCallback((key: keyof AdvancedSelections, value: boolean) => {
  //   setAdvancedSelections(prev => ({
  //     ...prev,
  //     [key]: value
  //   }));
  // }, []);

  // Función para seleccionar todas las categorías
  // const selectAllAdvanced = useCallback(() => {
  //   const allTrue = Object.keys(advancedSelections).reduce((acc, key) => {
  //     acc[key as keyof AdvancedSelections] = true;
  //     return acc;
  //   }, {} as AdvancedSelections);
  //   setAdvancedSelections(allTrue);
  // }, []);

  // Función para deseleccionar todas las categorías
  // const deselectAllAdvanced = useCallback(() => {
  //   const allFalse = Object.keys(advancedSelections).reduce((acc, key) => {
  //     acc[key as keyof AdvancedSelections] = false;
  //     return acc;
  //   }, {} as AdvancedSelections);
  //   setAdvancedSelections(allFalse);
  // }, []);

  // Función para establecer modo rápido
  // const setModeQuick = useCallback(() => {
  //   setAdvancedSelections({
  //     tematica: true,
  //     especie: true,
  //     alineamiento: true,
  //     objeto: true,
  //     genero: true,
  //     orientacion: true,
  //     formato: true,
  //     // Resto en false
  //     estiloAutor: false, tipoEstilo: false, edad: false, altura: false, complexion: false, caracteristicas: false,
  //     claseSocial: false, origen: false, educacion: false, historiaFamiliar: false, motivacion: false, objetivoCorto: false, sueno: false,
  //     estadoCivil: false, relacionFamiliar: false, conexionSocial: false, habilidadEspecial: false, talentoArtistico: false, conocimiento: false,
  //     miedo: false, vicio: false, trauma: false, epoca: false, clima: false, entornoUrbano: false, tipoConflicto: false, arcoPersonaje: false, funcionTrama: false,
  //     poder: false, condicion: false, marca: false, religion: false, cultura: false, valores: false
  //   });
  // }, []);

  // Función para establecer modo intermedio
  // const setModeIntermediate = useCallback(() => {
  //   setAdvancedSelections({
  //     tematica: true, especie: true, alineamiento: true, objeto: true, genero: true, orientacion: true, formato: true,
  //     motivacion: true, objetivoCorto: true, sueno: true, tipoConflicto: true, arcoPersonaje: true, funcionTrama: true,
  //     estiloAutor: true, tipoEstilo: true,
  //     // Resto en false
  //     edad: false, altura: false, complexion: false, caracteristicas: false, claseSocial: false, origen: false, educacion: false, historiaFamiliar: false,
  //     estadoCivil: false, relacionFamiliar: false, conexionSocial: false, habilidadEspecial: false, talentoArtistico: false, conocimiento: false,
  //     miedo: false, vicio: false, trauma: false, epoca: false, clima: false, entornoUrbano: false, poder: false, condicion: false, marca: false,
  //     religion: false, cultura: false, valores: false
  //   });
  // }, []);

  // Función para establecer modo completo
  // const setModeFull = useCallback(() => {
  //   const allTrue = Object.keys(advancedSelections).reduce((acc, key) => {
  //     acc[key as keyof AdvancedSelections] = true;
  //     return acc;
  //   }, {} as AdvancedSelections);
  //   setAdvancedSelections(allTrue);
  // }, []);

  // Actualizar bloques activos cuando cambien las selecciones
  useEffect(() => {
    setActiveBlocks(getActiveBlocks);
    setIsSpinning(new Array(getActiveBlocks.length).fill(false));
  }, [getActiveBlocks]);

  return {
    activeBlocks,
    isSpinning,
    // advancedSelections,
    pickAndSet,
    startSpinningCard,
    stopSpinningCard,
    startSpinningAll,
    stopSpinningAll,
    toggleSpinningCard,
    toggleSpinningAll,
    // updateAdvancedSelections,
    // selectAllAdvanced,
    // deselectAllAdvanced,
    // setModeQuick,
    // setModeIntermediate,
    // setModeFull
  };
};
