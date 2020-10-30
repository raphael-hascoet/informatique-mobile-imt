import React from "react";
import { View, StyleSheet } from "react-native";
import OptionMenu from "./OptionMenu";

/**
 * Composant Menu.
 */
const Menu = ({ setActionsDisplayState, selectedDiplayState }) => (
  <View style={styles.menu}>
    <OptionMenu
      title="Toutes"
      onSelect={setActionsDisplayState("all")}
      selected={selectedDiplayState === "all"}
    />
    <OptionMenu
      title="Actives"
      onSelect={setActionsDisplayState("in-progress")}
      selected={selectedDiplayState === "in-progress"}
    />
    <OptionMenu
      title="Terminées"
      onSelect={setActionsDisplayState("finished")}
      selected={selectedDiplayState === "finished"}
    />
  </View>
);

const styles = StyleSheet.create({
  menu: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
});
export default Menu;
