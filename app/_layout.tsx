import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, Text, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { RootSiblingParent } from 'react-native-root-siblings';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const headerStyle = {
    backgroundColor: '#7209b7'
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <RootSiblingParent>
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          title: '', headerStyle: headerStyle, headerTintColor: '#fff', headerTitle: () => <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 30, height: 30 }} source={require('./../assets/images/brand.png')} />
            <Text style={{ fontSize: 10, lineHeight: 28, marginLeft: 5, color: '#fff', fontWeight: 600 }}>
              Smartcity
            </Text>
          </View>
        }} />
        <Stack.Screen name="card" options={{ title: 'Identificación Municipal', headerStyle: headerStyle, headerTintColor: '#fff' }} />
        <Stack.Screen name="neighborAttention" options={{ title: 'Atención al Vecino', headerStyle: headerStyle, headerTintColor: '#fff' }} />
        <Stack.Screen name="security" options={{ title: 'Seguridad', headerStyle: headerStyle, headerTintColor: '#fff' }} />
        <Stack.Screen name="turnRequest" options={{ title: 'Turnos', headerStyle: headerStyle, headerTintColor: '#fff' }} />
        <Stack.Screen name="navbar" options={{ title: '', headerStyle: headerStyle, headerTintColor: '#fff' }} />
        <Stack.Screen name="signin" options={{ title: 'Ingresá a tu cuenta', headerStyle: headerStyle, headerTintColor: '#fff' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </RootSiblingParent>
  );
}
