import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { useTaches } from '../context/TachesContext';
import { COULEURS } from '../styles/couleurs';

export default function AjouterScreen({ navigation }) {
  const { ajouterTache } = useTaches();
  const [titre, setTitre] = useState('');
  const [categorie, setCategorie] = useState('');

  const titreValide = titre.trim().length > 0;

  function valider() {
    if (!titreValide) return;
    ajouterTache(titre.trim(), categorie.trim() || 'Général');
    navigation.goBack();
  }

  return (
    <View style={styles.ecran}>
      <TextInput
        style={styles.champ}
        value={titre}
        onChangeText={setTitre}
        placeholder="Titre de la tâche"
        placeholderTextColor={COULEURS.muted}
        autoFocus
        returnKeyType="next"
      />
      <TextInput
        style={styles.champ}
        value={categorie}
        onChangeText={setCategorie}
        placeholder="Catégorie (ex : Dev)"
        placeholderTextColor={COULEURS.muted}
        returnKeyType="done"
        onSubmitEditing={valider}
      />
      <Pressable
        onPress={valider}
        disabled={!titreValide}
        style={({ pressed }) => [
          styles.bouton,
          !titreValide && styles.boutonDesactive,
          pressed && styles.boutonPresse,
        ]}
      >
        <Text style={styles.boutonTexte}>Ajouter la tâche</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
    padding: 20,
    gap: 12,
  },
  champ: {
    backgroundColor: COULEURS.carte,
    borderWidth: 1,
    borderColor: COULEURS.bordure,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: COULEURS.texte,
  },
  bouton: {
    backgroundColor: COULEURS.primaire,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  boutonDesactive: {
    opacity: 0.4,
  },
  boutonPresse: {
    opacity: 0.8,
  },
  boutonTexte: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
