import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import CustomQRCodes from "./CustomQRCodes";

export default function App({ route }) {
   const [merchantEmail] = React.useState(route.params.merchantEmail);

   return (
      <View style={styles.container}>
         <CustomQRCodes merchantEmail={merchantEmail} />
         <Text>{merchantEmail}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-around",
      paddingTop: 20,
      alignItems: "center",
      backgroundColor: "#ecf0f1",
   },
});
