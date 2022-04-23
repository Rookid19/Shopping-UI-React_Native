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
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { SafeAreaView } from "react-native";

const MerchantPersonalDetails = ({ navigation, route }) => {
   // const [selectedValue, setSelectedValue] = useState(
   //    route.params.selectedValue
   // );
   // const [email, setEmail] = useState(route.params.email);
   // const [individual, setIndividual] = useState(route.params.individual);
   // const [business, setBusiness] = useState(route.params.business);
   // const [organization, setOrganization] = useState(route.params.organization);
   // const [employeeIdentificationNumber, setEmployeeIdentificationNumber] =
   //    useState(route.params.employeeIdentificationNumber);
   // const [businessRepresentative, setBusinessRepresentative] = useState(
   //    route.params.businessRepresentative
   // );
   // const [firstName, setFirstName] = useState("");
   // const [lastName, setLastName] = useState("");
   // const [homeAddress, setHomeAddress] = useState("");
   // const [ssn, setSSN] = useState("");
   // const [place, setPlace] = useState("");


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
      <SafeAreaView style={styles.container}>
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
               Let's create your account
            </Text>
            <Text
               style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
                  margin: 10,
               }}
            >
               Tell us a little bit about yourself
            </Text>
            <View>
               <TextInput
                  placeholder="First name"
                  style={styles.input}
                  autoFocus
                  type="text"
                  // value={firstName}
                  onChangeText={(text) => setFirstName(text)}
               />
               <TextInput
                  placeholder="Last name"
                  style={styles.input}
                  type="text"
                  // value={lastName}
                  onChangeText={(text) => setLastName(text)}
               />

               <GooglePlacesAutocomplete
                  styles={{
                     container: {
                        flex: 0,
                        borderWidth: 1,
                        margin: 14,
                        borderColor: "#a9a9a9",
                     },
                     textInput: {
                        fontSize: 18,
                     },
                  }}
                  query={{
                     key: "AIzaSyC3xFUCmxy2eEjYbrIB9-e1R2uMmTpgyPk",
                     language: "en",
                  }}
                  placeholder="Address"
                  nearbyPlacesAPI="GooglePlacesSearch"
                  debounce={400}
                  onPress={(data, details = null) => {
                     setPlace(data.description);
                  }}
                  fetchDetails={true}
                  returnKeyType={"search"}
                  enablePoweredByContainer={false} 
                  minLength={2}
               />
               <TextInput
                  placeholder="Date of birth (MM/DD/YYY)"
                  style={styles.input}
                  autoFocus
                  // type="date"
                  // value={dob}
                  // onChangeText={(text) => setDob(text)}
               />

               <TextInput
                  placeholder="Last 4 digits of SSN"
                  style={styles.input}
                  type="text"
                  // value={ssn}
                  onChangeText={(text) => setSSN(text)}
               />
            </View>
         </View>
         <View>
            <Button
               containerStyle={styles.button}
               title="Continue"
               type="Solid"
               onPress={() =>
                  navigation.navigate("Merchant Customer Support", {
                     // firstName: firstName,
                     // lastName: lastName,
                     // email: email,
                     // selectedValue: selectedValue,
                     // homeAddress: homeAddress,
                     // ssn: ssn,
                     // individual: individual,
                     // business: business,
                     // organization: organization,
                     // employeeIdentificationNumber: employeeIdentificationNumber,
                     // businessRepresentative: businessRepresentative,
                     // place:place
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
      </SafeAreaView>
   );
};

export default MerchantPersonalDetails;

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
      fontSize: 20,
      fontFamily: "AthleticsMedium",
   },
});
