import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeNav = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeNav;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, { toValue: 1, duration: 1600, useNativeDriver: true }),
        Animated.timing(floatAnim, { toValue: 0, duration: 1600, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [floatAnim]);

  const translateY = floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });

  const onPressIn = () => {
    Animated.spring(buttonScale, { toValue: 0.97, useNativeDriver: true, bounciness: 6 }).start();
  };
  const onPressOut = () => {
    Animated.spring(buttonScale, { toValue: 1, useNativeDriver: true, bounciness: 6 }).start();
  };

  const goToGenerator = () => navigation.navigate('Generator');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Archetype Lab</Text>
      </View>

      <View style={styles.body}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <Text style={styles.logoText}>Archetype Lab</Text>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity
            style={styles.cta}
            onPress={goToGenerator}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            activeOpacity={0.85}
          >
            <Text style={styles.ctaText}>Comenzar</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Toque para comenzar • transición con desvanecido</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
  },
  header: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1e3a8a',
    letterSpacing: 0.4,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: 0.6,
    marginBottom: 24,
  },
  cta: {
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 999,
  },
  ctaText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.6,
  },
  footer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default HomeScreen;


