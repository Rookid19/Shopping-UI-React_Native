import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";

const Password = ({ navigation }) => {
   const [password, setPassword] = useState("");

   return (
      <View style={styles.container}>
         <View style={{ flex: 0.9, alignItems:"center"}}>
            <Text style={styles.text}>
               Passwrod must contain a capital letter, a lowercase letter, a
               number and a minimum of 8 characters.
            </Text>
            <View style={styles.inputContainer}>
            <Input
               placeholder="Password"
               type="password"
               secureTextEntry
               value={password}
               onChangeText={(text) => setPassword(text)}
            />
            </View>
         </View>
         <View style={{ flex: 0.1 }}>
            <Button
               containerStyle={styles.button}
               title="Continue"
               onPress={() => navigation.navigate("Personal Details")}
            />
         </View>
      </View>
   );
};

export default Password;

const styles = StyleSheet.create({
   container: {
      flex: 1, //so it uses the entire height of the page
      alignItems: "center",
      padding: 10,
      backgroundColor: "white",
   },
   inputContainer: {
      width: 300,
      marginTop: 40,
   },
   button: {
      width: 380,
      marginTop: 10,
   },
   text: {
      fontSize: 20,
      textAlign: "center",
      color: "#a2a2a5",
      marginTop: 40,
   },
});
