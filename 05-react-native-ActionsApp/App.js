import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Entete from "./src/Entete";
import Saisie from "./src/Saisie";
import BoutonCreer from "./src/BoutonCreer";
import ListeActions from "./src/action/ListeActions";
import Menu from "./src/menu/Menu";

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {
  // état global de l'application
  // il y aura probalement d'autres informations à stocker
  state = {
    texteSaisie: "",
    actions: [],
    currentDisplayState: "all",
    actionCurrentId: 0,
  };

  /**
   * Méthode invoquée lorsque que la saisie change.
   *
   * @param nouvelleSaisie la valeur saisie
   */
  quandLaSaisieChange(nouvelleSaisie) {
    console.log("la saisie à changée", nouvelleSaisie);
    this.setState({ texteSaisie: nouvelleSaisie });
  }

  /**
   * Méthode invoquée lors du clic sur le bouton `Valider`.
   */
  validerNouvelleAction() {
    console.log("Vous avez cliqué sur Valider !");

    const { texteSaisie, actions, actionCurrentId } = this.state;

    const newActions = actions.concat({
      id: actionCurrentId,
      title: texteSaisie,
      finished: false,
    });

    this.setState({
      actions: newActions,
      actionCurrentId: actionCurrentId + 1,
    });
  }

  terminerAction = (id) => () => {
    const { actions } = this.state;
    const newActions = actions;
    newActions[id].finished = !newActions[id].finished;
    this.setState({ actions: newActions });
  };

  supprimerAction = (id) => () => {
    const { actions } = this.state;

    const newActions = actions;
    newActions.splice(id, 1);
    this.setState({ actions: newActions });
  };

  setActionsDisplayState = (displayState) => () => {
    this.setState({ currentDisplayState: displayState });
  };

  render() {
    const { texteSaisie, actions, currentDisplayState } = this.state;

    let displayedActions = [];

    console.log(currentDisplayState);

    switch (currentDisplayState) {
      case "all":
        displayedActions = actions;
        break;
      case "in-progress":
        displayedActions = actions.filter((a) => !a.finished);
        break;
      case "finished":
        displayedActions = actions.filter((a) => a.finished);
        break;
    }

    console.log(displayedActions);

    return (
      <View style={styles.conteneur}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Entete />
          <Saisie
            texteSaisie={texteSaisie}
            evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}
          />
          <ListeActions
            actions={displayedActions}
            terminerAction={this.terminerAction}
            supprimerAction={this.supprimerAction}
          />
          <BoutonCreer onValider={() => this.validerNouvelleAction()} />
        </ScrollView>
        <Menu setActionsDisplayState={this.setActionsDisplayState} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
