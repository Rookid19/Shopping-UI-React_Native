import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import {
   StyleSheet,
   View,
   Linking,
   TextInput,
   Picker,
   CheckBox,
} from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { auth } from "../firebase";
import { useFonts } from "expo-font";
// import { RadioButton } from 'react-native-paper';

const MerchantMobileVerification = ({ navigation }) => {
   const [selectedValue, setSelectedValue] = useState("United States");
   // const [checked, setChecked] = React.useState("first");
   const [isSelected, setSelection] = useState(false);

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
         <View>
            <Text
               style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontFamily: "AthleticsMedium",
                  margin: 10,
               }}
            >
               Let's verify your account
            </Text>
            <Text
               style={{
                  fontSize: 16,
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
                  margin: 20,
               }}
            >
               We'll send you an SMS to verify your phone number to create and
               secure your account.
            </Text>
            <View>
               <TextInput
                  placeholder="000000000"
                  style={styles.input}
                  maxLength={13}
               />
            </View>
         </View>
         <View>
            <Button
               containerStyle={styles.button}
               title="Submit"
               type="Solid"
               onPress={() => navigation.navigate("Merchant Signup Get Started")}
               buttonStyle={{
                  backgroundColor: "#0900ff",
                  padding: 15,
               }}
               titleStyle={{
                  color: "white",
                  fontFamily: "AthleticsRegular",
                  fontSize: 20,
               }}
            />
         </View>
      </View>
   );
};

export default MerchantMobileVerification;

const styles = StyleSheet.create({
   container: {
      flex: 1, //so it uses the entire height of the page
      // alignItems: "center",
      justifyContent: "space-evenly",
      padding: 10,
      backgroundColor: "white",
   },
   input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: "#a9a9a9",
      padding: 10,
   },
});
