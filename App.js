import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AccueilScreen from './src/screens/AccueilScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AccueilScreen />
    </SafeAreaProvider>
  );
}
