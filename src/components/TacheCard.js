import { StyleSheet, Text, View } from 'react-native';

import { COULEURS } from '../styles/couleurs';

export default function TacheCard({ titre, categorie, terminee }) {
  return (
    <View style={styles.carte}>
      <View style={styles.ligne}>
        <Text style={styles.titre} numberOfLines={2}>
          {titre}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeTexte}>{categorie}</Text>
        </View>
      </View>
      <Text style={[styles.statut, terminee ? styles.statutTermine : styles.statutAFaire]}>
        {terminee ? '✓ Terminée' : '○ À faire'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    backgroundColor: COULEURS.carte,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  ligne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  titre: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: COULEURS.texte,
  },
  badge: {
    backgroundColor: COULEURS.accent,
    borderRadius: 999,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  badgeTexte: {
    fontSize: 11,
    fontWeight: '600',
    color: COULEURS.primaire,
  },
  statut: {
    fontSize: 13,
  },
  statutTermine: {
    color: COULEURS.succes,
  },
  statutAFaire: {
    color: COULEURS.muted,
  },
});
