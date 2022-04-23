import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
// import VirtualKeyboard from "react-native-virtual-keyboard";
import { useState } from "react";
import { useFonts } from "expo-font";

const MakePayments = ({navigation}) => {
   const [text, setText] = useState("");

   useLayoutEffect(() => {
      navigation.setOptions({
         headerTitleStyle: {
            color: "white",
            textAlign: "center",
            fontFamily: "AthleticsBold",
         },
         headerTintColor: "white",
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
         <StatusBar style="light" />

         <View style={{ flex: 0.2, marginTop: 40, alignItems: "center" }}>
            <Text
               style={{
                  fontSize: 21,
                  color: "black",
                  fontFamily: "AthleticsRegular",
               }}
            >
               Select the amount
            </Text>
            <Text
               style={{
                  fontSize: 14,
                  color: "#a2a2a5",
                  fontFamily: "AthleticsRegular",
               }}
            >
               you'd like to send or request
            </Text>
         </View>
         <View style={{ flex: 1 }}></View>

         <View
            style={{
               flexDirection: "row",
               justifyContent: "center",
               flex: 0.3,
            }}
         >
            <View>
               <Text
                  style={{
                     fontSize: 50,
                     color: "#0667d0",
                     fontFamily: "AthleticsBold",
                  }}
               >
                  $ {text}
               </Text>
            </View>
            <View style={{ width: 200 }}>
               <Input keyboardType={"numeric"} style={{ fontSize: 40 }} />
            </View>
         </View>

         <View style={styles.buttonContainer}>
            <Button
               containerStyle={styles.button}
               type="clear"
               title="Request"
               titleStyle={{ color: "white", fontFamily: "AthleticsRegular" }}
               onPress={() => navigation.navigate("Login")}
            />
            <Button
               containerStyle={styles.button}
               type="clear"
               title="Send"
               titleStyle={{ color: "white", fontFamily: "AthleticsRegular"  }}
               onPress={() => navigation.navigate("Login")}
            />
         </View>
      </View>
   );
};

export default MakePayments;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   button: {
      width: 150,
      backgroundColor: "#0667d0",
      borderRadius: 20,
   },
   buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 15,
   },
   input: {
      width: "60%",
      borderColor: "#a2a2a5",
      borderWidth: 1,
      padding: 10,
      marginTop: 40,
   },
});
