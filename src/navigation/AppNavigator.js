import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import ProfilScreen from '../screens/ProfilScreen';
import { COULEURS } from '../styles/couleurs';
import AccueilStack from './AccueilStack';

const Tab = createBottomTabNavigator();

function IconeOnglet({ symbole, color }) {
  return <Text style={{ fontSize: 20, color }}>{symbole}</Text>;
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COULEURS.primaire,
        tabBarInactiveTintColor: COULEURS.muted,
      }}
    >
      <Tab.Screen
        name="Taches"
        component={AccueilStack}
        options={{
          title: 'Tâches',
          headerShown: false,
          tabBarIcon: ({ color }) => <IconeOnglet symbole="☰" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <IconeOnglet symbole="👤" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
