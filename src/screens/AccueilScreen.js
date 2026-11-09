import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TacheCard from '../components/TacheCard';
import { COULEURS } from '../styles/couleurs';

const TACHES = [
  { id: 1, titre: 'Créer la maquette', categorie: 'Design', terminee: true },
  { id: 2, titre: 'Installer Expo', categorie: 'Setup', terminee: true },
  { id: 3, titre: 'Composant TacheCard', categorie: 'Dev', terminee: false },
  { id: 4, titre: "Écran d'accueil", categorie: 'Dev', terminee: false },
  { id: 5, titre: 'Tester sur téléphone', categorie: 'QA', terminee: false },
];

export default function AccueilScreen() {
  return (
    <SafeAreaView style={styles.ecran}>
      <ScrollView contentContainerStyle={styles.contenu}>
        <View style={styles.entete}>
          <Text style={styles.titre}>TaskFlow</Text>
          <Text style={styles.sousTitre}>Vos tâches du moment</Text>
        </View>

        <View style={styles.liste}>
          {TACHES.map((tache) => (
            <TacheCard
              key={tache.id}
              titre={tache.titre}
              categorie={tache.categorie}
              terminee={tache.terminee}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
  },
  contenu: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 20,
  },
  entete: {
    gap: 2,
  },
  titre: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COULEURS.primaire,
  },
  sousTitre: {
    fontSize: 14,
    color: COULEURS.muted,
  },
  liste: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 12,
  },
});
