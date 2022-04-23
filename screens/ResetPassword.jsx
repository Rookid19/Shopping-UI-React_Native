import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useFonts } from "expo-font";

const ResetPassword = ({navigation}) => {
   const [email, setEmail] = useState("");

   useLayoutEffect(() => {
      navigation.setOptions({
         headerTitleStyle: {
            color: "white",
            textAlign: "center",
            fontFamily: "AthleticsBold",
         },
      });
   });
   
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
               Enter your email address to begin your passwrod reset. We will
               send you a one-time verfication.
            </Text>
         </View>
         <View style={styles.inputContainer}>
            <Input
               placeholder="Email"
               autofucos
               type="email"
               value={email}
               onChangeText={(text) => setEmail(text)}
            />
         </View>
         <View style={{ flex: 0.2 }}>
            <Button
               containerStyle={styles.button}
                  onPress={() => navigation.navigate("Password Confirmation")}
               title="Continue"
               titleStyle={{
                  fontFamily: "AthleticsRegular",
               }}
            />
         </View>
      </View>
   );
};

export default ResetPassword;

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
