import mobileAds, { 
  BannerAd, 
  BannerAdSize, 
  TestIds, 
  InterstitialAd, 
  AdEventType 
} from 'react-native-google-mobile-ads';

// IDs de prueba - Cambiar por IDs reales en producción
const BANNER_AD_UNIT_ID = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxx/yyy';
const INTERSTITIAL_AD_UNIT_ID = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxx/zzz';

class AdService {
  private interstitial: InterstitialAd | null = null;
  private spinCount = 0;
  private readonly AD_FREQUENCY = 3; // Mostrar anuncio cada 3 tiradas

  constructor() {
    this.initialize();
  }

  private initialize() {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log('AdMob initialization complete!');
        this.loadInterstitial();
      })
      .catch(error => {
        console.error('AdMob initialization failed:', error);
      });
  }

  private loadInterstitial() {
    this.interstitial = InterstitialAd.createForAdRequest(INTERSTITIAL_AD_UNIT_ID, {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['writing', 'creativity', 'storytelling', 'character', 'fiction'],
    });

    this.interstitial.addAdEventListener(AdEventType.LOADED, () => {
      console.log('Interstitial ad loaded');
    });

    this.interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
      console.error('Interstitial ad error:', error);
    });

    this.interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      console.log('Interstitial ad closed');
      this.loadInterstitial(); // Recargar para el próximo uso
    });

    this.interstitial.load();
  }

  // Incrementar contador de tiradas y mostrar anuncio si es necesario
  public incrementSpinCount(): boolean {
    this.spinCount++;
    
    if (this.spinCount >= this.AD_FREQUENCY) {
      this.showInterstitial();
      this.spinCount = 0;
      return true; // Se mostró un anuncio
    }
    
    return false; // No se mostró anuncio
  }

  // Mostrar anuncio intersticial
  public showInterstitial(): void {
    if (this.interstitial) {
      this.interstitial.show();
    } else {
      console.log('Interstitial not ready, loading...');
      this.loadInterstitial();
    }
  }

  // Obtener componente de banner
  public getBannerAd() {
    return (
      <BannerAd
        unitId={BANNER_AD_UNIT_ID}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
          keywords: ['writing', 'creativity', 'storytelling', 'character', 'fiction'],
        }}
      />
    );
  }

  // Resetear contador (útil para testing)
  public resetSpinCount(): void {
    this.spinCount = 0;
  }

  // Obtener contador actual
  public getSpinCount(): number {
    return this.spinCount;
  }

  // Cambiar frecuencia de anuncios
  public setAdFrequency(frequency: number): void {
    this.AD_FREQUENCY = frequency;
  }
}

// Exportar instancia singleton
export const adService = new AdService();
export default adService;
