import React from "react";
import { View, Text } from "react-native";
import UneAction from "./UneAction";

const ListeActions = ({ actions, terminerAction, supprimerAction }) => {
  return (
    <View>
      {actions.map((action) => (
        <UneAction
          key={action.id}
          action={action}
          terminerAction={terminerAction(action.id)}
          supprimerAction={supprimerAction(action.id)}
        />
      ))}
    </View>
  );
};

export default ListeActions;
