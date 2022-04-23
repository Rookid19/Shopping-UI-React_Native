import { useFonts } from "expo-font";
import * as React from "react";
import { useState } from "react";

import { StyleSheet, View, Image } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import logo from "../images/HalfCardWhite.jpeg";

const MerchantGetStarted = ({ navigation }) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         title: "",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: { color: "black", textAlign: "center" },
         headerTintColor: "black",
      });
   });

   const [loaded] = useFonts({
      AthleticsRegular: require("../assets/fonts/AthleticsRegular.ttf"),
      AthleticsLight: require("../assets/fonts/AthleticsLight.ttf"),
      AthleticsMedium: require("../assets/fonts/AthleticsMedium.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
   });

   if (!loaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <StatusBar style="auto" />
         <View></View>
         <View
            style={{
               //    flex: 0.7,
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <Text style={styles.textcolorseamless1}>
               Designed with you in mind
            </Text>
            <Text style={styles.textcolorseamless}>
               No need to let your customers wait in line. Halfcard is the
               easiest and fastest way of making payments.
            </Text>
         </View>
         <View style={{ flex: 0.3 }}>
            <Button
               containerStyle={styles.button}
               title="Create Account"
               type="Solid"
               onPress={() =>
                  navigation.navigate("Merchant Personal Details2")
               }
               buttonStyle={{
                  backgroundColor: "#0667d0",
               }}
               titleStyle={{
                  color: "white",
                  fontFamily: "AthleticsRegular",
               }}
            />
            <Button
               containerStyle={styles.button}
               type="clear"
               title="Login"
               onPress={() => navigation.navigate("Merchant Login")}
               titleStyle={{
                  color: "#0667d0",
                  fontFamily: "AthleticsRegular",
               }}
            />
         </View>
      </View>
   );
};

export default MerchantGetStarted;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-around",
      padding: 10,
      backgroundColor: "#ffffff",
   },
   textcolor: {
      color: "black",
      fontSize: 30,
      textAlign: "center",
   },
   textcolorseamless1: {
      color: "black",
      fontSize: 50,
      textAlign: "center",
      marginTop: 20,
      fontFamily: "AthleticsMedium",
   },
   textcolorseamless: {
      color: "black",
      fontSize: 20,
      textAlign: "center",
      margin: 30,
      fontFamily: "AthleticsRegular",
   },
   button: {
      width: 380,
      marginTop: 10,
   },
});
