import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import BoutonAction from "./BoutonAction";

/**
 * Composant représentant une action.
 *
 * TODO modifier le code pour afficher le titre de l'action et les boutons associés.
 */
const UneAction = ({ action, terminerAction, supprimerAction }) => (
  <View style={styles.conteneurUneAction}>
    <Text style={styles.texteUneAction}>{action.title}</Text>
    <View style={styles.boutons}>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.bouton}
        onPress={terminerAction}
      >
        <Text
          style={[
            styles.terminer,
            action.finished ? styles.terminerFinished : {},
          ]}
        >
          Terminer
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.bouton}
        onPress={supprimerAction}
      >
        <Text style={[styles.supprimer]}>Supprimer</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const styles = StyleSheet.create({
  conteneurUneAction: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    alignItems: "center",
  },
  texteUneAction: {
    fontSize: 17,
  },
  boutons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bouton: {
    alignSelf: "flex-end",
    padding: 7,
    borderColor: "#ededed",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  terminer: {
    color: "#666666",
  },
  terminerFinished: {
    fontWeight: "bold",
    color: "green",
  },
  supprimer: {
    color: "red",
  },
});
export default UneAction;