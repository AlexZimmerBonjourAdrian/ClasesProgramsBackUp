export interface CharacterCategory {
  key: string;
  accent: string;
  list: string[];
}

export interface AdvancedSelections {
  // Básicas
  tematica: boolean;
  especie: boolean;
  alineamiento: boolean;
  objeto: boolean;
  genero: boolean;
  orientacion: boolean;
  formato: boolean;
  
  // Estilos
  estiloAutor: boolean;
  tipoEstilo: boolean;
  
  // Características físicas
  edad: boolean;
  altura: boolean;
  complexion: boolean;
  caracteristicas: boolean;
  
  // Antecedentes
  claseSocial: boolean;
  origen: boolean;
  educacion: boolean;
  historiaFamiliar: boolean;
  
  // Motivaciones
  motivacion: boolean;
  objetivoCorto: boolean;
  sueno: boolean;
  
  // Relaciones
  estadoCivil: boolean;
  relacionFamiliar: boolean;
  conexionSocial: boolean;
  
  // Habilidades
  habilidadEspecial: boolean;
  talentoArtistico: boolean;
  conocimiento: boolean;
  
  // Debilidades
  miedo: boolean;
  vicio: boolean;
  trauma: boolean;
  
  // Entorno
  epoca: boolean;
  clima: boolean;
  entornoUrbano: boolean;
  
  // Elementos narrativos
  tipoConflicto: boolean;
  arcoPersonaje: boolean;
  funcionTrama: boolean;
  
  // Características únicas
  poder: boolean;
  condicion: boolean;
  marca: boolean;
  
  // Elementos culturales
  religion: boolean;
  cultura: boolean;
  valores: boolean;
}

export interface CharacterCard {
  key: string;
  value: string;
  accent: string;
  isSpinning: boolean;
}
