import { useFonts } from "expo-font";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { add } from "react-native-reanimated";

const MerchantSignupGetStarted = ({ navigation, route }) => {
   const [dateOfBirth] = useState(route.params.dateOfBirth);
   const [firstName] = useState(route.params.firstName);
   const [lastName] = useState(route.params.lastName);
   const [address] = useState(route.params.address);
   const [ssn] = useState(route.params.ssn);
   const [email] = useState(route.params.email);
   const [country] = useState(route.params.country);
   const [individual] = useState("Individual (Sole Proprietor)");
   const [business] = useState("Business (LLC, Corporation, etc)");

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
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
      AthleticsMedium: require("../assets/fonts/AthleticsMedium.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
   });

   if (!loaded) {
      return null;
   }
   return (
      <View style={styles.container}>
         <View
            style={{
               width: "100%",
               position: "absolute",
               top: 50,
               // padding: 10,
            }}
         >
            <Text
               style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
               }}
            >
               Sign Up
            </Text>
         </View>
         <View style={{ flex: 0.5 }}>
            <Text
               style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
               }}
            >
               Let's get started {ssn}
            </Text>
            <Text
               style={{
                  color: "#a2a2a2",
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
                  marginTop: 50,
                  marginBottom: 50,
                  fontSize: 18,
               }}
            >
               Which type of merchant best describes you ?
            </Text>
            <Button
               containerStyle={styles.button}
               title="Individual (Sole Proprietor)"
               type="Solid"
               onPress={() =>
                  navigation.navigate("Merchant Customer Support2", {
                     firstName,
                     lastName,
                     address,
                     dateOfBirth,
                     ssn,
                     email,
                     country,
                     individual,
                  })
               }
               buttonStyle={{
                  backgroundColor: "#0900ff",
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
               title="Business (LLC, Corporation, etc)"
               type="clear"
               onPress={() =>
                  navigation.navigate("Business Account2", {
                     firstName,
                     lastName,
                     address,
                     dateOfBirth,
                     ssn,
                     email,
                     country,
                     business,
                  })
               }
               buttonStyle={{
                  backgroundColor: "white",
                  padding: 20,
               }}
               titleStyle={{
                  color: "#0900ff",
                  fontFamily: "AthleticsRegular",
                  fontSize: 18,
               }}
            />
         </View>
      </View>
   );
};

export default MerchantSignupGetStarted;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      justifyContent: "center",
   },
   button: {
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 50,
   },
});
