import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { TachesProvider } from './src/context/TachesContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <TachesProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <AppNavigator />
      </NavigationContainer>
    </TachesProvider>
  );
}
