import { Pressable, StyleSheet, Text, View } from 'react-native';

import { COULEURS } from '../styles/couleurs';

export default function TacheCard({ titre, categorie, terminee, onPress, onBasculer, onSupprimer }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.carte, pressed && styles.cartePressee]}
    >
      <View style={styles.ligne}>
        <Text style={styles.titre} numberOfLines={2}>
          {titre}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeTexte}>{categorie}</Text>
        </View>
      </View>

      <View style={styles.ligne}>
        <Pressable onPress={onBasculer} hitSlop={8}>
          <Text style={[styles.statut, terminee ? styles.statutTermine : styles.statutAFaire]}>
            {terminee ? '✓ Terminée' : '○ À faire'}
          </Text>
        </Pressable>

        {onSupprimer && (
          <Pressable onPress={onSupprimer} hitSlop={8}>
            <Text style={styles.supprimer}>Supprimer</Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  carte: {
    backgroundColor: COULEURS.carte,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cartePressee: {
    opacity: 0.7,
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
  supprimer: {
    fontSize: 13,
    color: COULEURS.danger,
  },
});
