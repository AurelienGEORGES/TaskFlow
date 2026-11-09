import { FlatList, StyleSheet, Text, View } from 'react-native';

import TacheCard from '../components/TacheCard';
import { useTaches } from '../context/TachesContext';
import { COULEURS } from '../styles/couleurs';

function Separateur() {
  return <View style={styles.separateur} />;
}

export default function AccueilScreen({ navigation }) {
  const { taches, basculerTache, supprimerTache } = useTaches();

  return (
    <FlatList
      style={styles.ecran}
      contentContainerStyle={styles.contenu}
      data={taches}
      keyExtractor={(tache) => tache.id}
      renderItem={({ item }) => (
        <TacheCard
          titre={item.titre}
          categorie={item.categorie}
          terminee={item.terminee}
          onPress={() => navigation.navigate('Detail', { id: item.id, titre: item.titre })}
          onBasculer={() => basculerTache(item.id)}
          onSupprimer={() => supprimerTache(item.id)}
        />
      )}
      ItemSeparatorComponent={Separateur}
      ListEmptyComponent={
        <View style={styles.vide}>
          <Text style={styles.videTitre}>Aucune tâche pour le moment</Text>
          <Text style={styles.videTexte}>Appuyez sur « + Ajouter » pour en créer une.</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
  },
  contenu: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  separateur: {
    height: 12,
  },
  vide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  videTitre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COULEURS.primaire,
  },
  videTexte: {
    fontSize: 14,
    color: COULEURS.muted,
  },
});
