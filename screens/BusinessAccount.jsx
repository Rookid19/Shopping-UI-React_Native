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

const BusinessAccount = ({ navigation, route }) => {
   const [business, setBusiness] = useState(route.params.business);
   const [selectedValue, setSelectedValue] = useState(
      route.params.selectedValue
   );
   const [email, setEmail] = useState(route.params.email);
   const [organization, setOrganization] = useState("");
   const [employeeIdentificationNumber, setEmployeeIdentificationNumber] =
      useState("");
   const [businessRepresentative, setBusinessRepresentative] = useState("");

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
         {/* <View> */}
         <Text
            style={{
               fontSize: 24,
               textAlign: "center",
               fontFamily: "AthleticsMedium",
               margin: 10,
            }}
         >
            Business details
         </Text>
         <Text
            style={{
               fontSize: 16,
               textAlign: "center",
               fontFamily: "AthleticsRegular",
               margin: 20,
            }}
         >
            Just few things about your business
           
         </Text>

         <View>
            <Text
               style={{
                  marginLeft: 12,
               }}
            >
               Organization
            </Text>
            <TextInput
               placeholder="Name of organization"
               style={styles.input}
               type="text"
               value={organization}
               onChangeText={(text) => setOrganization(text)}
               // maxLength={3}
            />
         </View>

         <View>
            <Text
               style={{
                  marginLeft: 12,
               }}
            >
               Employer Identification Number (EN)
            </Text>
            <TextInput
               placeholder="9 digits"
               style={styles.input}
               maxLength={9}
               type="text"
               value={employeeIdentificationNumber}
               onChangeText={(text) =>
                  setEmployeeIdentificationNumber(text)
               }
            />
         </View>
         <View>
            <Text
               style={{
                  marginLeft: 12,
               }}
            >
               Business Representative
            </Text>
            <TextInput
               placeholder="CEO, Manager, Patner, etc"
               style={styles.input}
               type="text"
               value={businessRepresentative}
               onChangeText={(text) => setBusinessRepresentative(text)}
               // maxLength={3}
            />
         </View>
         {/* </View> */}
         <View>
            <Button
               containerStyle={styles.button}
               title="Submit"
               type="Solid"
               onPress={() =>
                  navigation.navigate("Merchant Signup Personal Details", {
                     selectedValue: selectedValue,
                     email: email,
                     business: business,
                     organization: organization,
                     employeeIdentificationNumber: employeeIdentificationNumber,
                     businessRepresentative: businessRepresentative,
                  })
               }
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

export default BusinessAccount;

const styles = StyleSheet.create({
   container: {
      flex: 1, //so it uses the entire height of the page
      // alignItems: "center",
      justifyContent: "space-evenly",
      padding: 10,
      backgroundColor: "white",
   },
   input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      borderColor: "#a9a9a9",
      padding: 10,
      padding: 10,
      fontSize: 20,
      fontFamily: "AthleticsMedium",
   },
});
