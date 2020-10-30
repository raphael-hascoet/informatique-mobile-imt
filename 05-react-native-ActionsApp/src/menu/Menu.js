import React from "react";
import { View, StyleSheet } from "react-native";
import OptionMenu from "./OptionMenu";

/**
 * Composant Menu.
 */
const Menu = ({ setActionsDisplayState }) => (
  <View style={styles.menu}>
    <OptionMenu title="Toutes" onSelect={setActionsDisplayState("all")} />
    <OptionMenu
      title="Actives"
      onSelect={setActionsDisplayState("in-progress")}
    />
    <OptionMenu
      title="Terminées"
      onSelect={setActionsDisplayState("finished")}
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
