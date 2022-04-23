import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useFonts } from "expo-font";

const PasswordConfirmation = ({ navigation }) => {
   const [code, setCode] = useState("");
   const [password, setPassword] = useState("");

   const [loaded] = useFonts({
      AthleticsRegular: require("../assets/fonts/AthleticsRegular.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
   });

   if (!loaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <View style={{ flex: 0.2 }}>
            <Text
               style={{
                  fontSize: 16,
                  color: "#393938",
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
               }}
            >
               Please enter the one-time verification code we just sent you
               followed by your new password.
            </Text>
         </View>
         <View style={styles.inputContainer}>
            <Input
               placeholder="Code"
               autofucos
               type="text"
               value={code}
               ChangeText={(text) => setCode(text)}
            />
            <Input
               placeholder="New Password"
               secureTextEntry
               type="password"
               value={password}
               onChangeText={(text) => setPassword(text)}
               onSubmitEditing={() => navigation.navigate("Login")}
            />
         </View>
         <View style={{ flex: 0.2 }}>
            <Button
               containerStyle={styles.button}
               onPress={() => navigation.navigate("Login")}
               title="Submit"
               titleStyle={{
                  fontFamily: "AthleticsRegular",
               }}
            />
         </View>
      </View>
   );
};

export default PasswordConfirmation;

const styles = StyleSheet.create({
   container: {
      flex: 1, //so it uses the entire height of the page
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white",
   },
   inputContainer: {
      width: 300,
      flex: 0.2,
   },
   button: {
      width: 210,
   },
});
