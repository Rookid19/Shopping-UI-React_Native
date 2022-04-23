import { useFonts } from "expo-font";
import * as React from "react";
import { useState } from "react";

import { StyleSheet, View, Image } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useLayoutEffect } from "react";
import logo from "../images/HalfCardWhite.jpeg";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const GetStarted = ({ navigation }) => {

   const [loaded] = useFonts({
      AthleticsRegular: require("../assets/fonts/AthleticsRegular.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
   });

   if (!loaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <StatusBar style="auto" />

         <View
            style={{
               flex: 0.7,
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            {/* <StatusBar style="light" /> */}
            <Image source={logo} style={{ width: 305, height: 159 }} />

            <Text style={styles.textcolorseamless}>
               Design in-house to eliminate payment traffic and save you time.
            </Text>
         </View>
         <View style={{ flex: 0.3 }}>
            <Button
               containerStyle={styles.button}
               title="Create Account"
               type="Solid"
               onPress={() => navigation.navigate("Account Type")}
               buttonStyle={{
                  backgroundColor: "#0667d0",
                  padding: 20,
               }}
               titleStyle={{
                  color: "white",
                  fontFamily: "AthleticsRegular",
                  fontSize: 20,
               }}
            />
            <Button
               containerStyle={styles.button}
               type="clear"
               title="Login"
               onPress={() => navigation.navigate("Login")}
               titleStyle={{
                  color: "#0667d0",
                  fontFamily: "AthleticsRegular",
                  fontSize: 20,
               }}
            />
         </View>
         <View>
            <Text
               style={{ fontFamily: "AthleticsRegular", textAlign: "center" }}
            >
               By signing up, you agree to our Terms of Use and Privacy Policy
            </Text>
         </View>
      </View>
   );
};

export default GetStarted;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      // justifyContent: "space-evenly",
      padding: 10,
      backgroundColor: "#ffffff",
   },
   textcolor: {
      color: "black",
      fontSize: 30,
      textAlign: "center",
   },
   textcolorseamless: {
      color: "black",
      fontSize: 20,
      textAlign: "center",
      marginTop: 20,
      fontFamily: "AthleticsRegular",
   },
   button: {
      width: 320,
      // padding:20,
      marginTop: 10,
      // fontFamily: 'AthleticsRegular'
   },
});
