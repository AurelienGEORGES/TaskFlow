import { StyleSheet, Text, View } from 'react-native';

import { useTaches } from '../context/TachesContext';
import { COULEURS } from '../styles/couleurs';

// Remplacez par vos propres informations.
const UTILISATEUR = {
  prenom: 'Aurélien',
  nom: 'Georges',
};

export default function ProfilScreen() {
  const { taches } = useTaches();
  const nbTerminees = taches.filter((tache) => tache.terminee).length;
  const initiales = `${UTILISATEUR.prenom[0]}${UTILISATEUR.nom[0]}`.toUpperCase();

  return (
    <View style={styles.ecran}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexte}>{initiales}</Text>
      </View>
      <Text style={styles.nom}>
        {UTILISATEUR.prenom} {UTILISATEUR.nom}
      </Text>
      <Text style={styles.stats}>
        {nbTerminees} {nbTerminees > 1 ? 'tâches terminées' : 'tâche terminée'} sur {taches.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
    alignItems: 'center',
    paddingTop: 40,
    gap: 6,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COULEURS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarTexte: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COULEURS.primaire,
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COULEURS.texte,
  },
  stats: {
    fontSize: 14,
    color: COULEURS.muted,
  },
});
