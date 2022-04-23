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

const MerchantCustomerSupport = ({ navigation, route }) => {
   const [selectedValue, setSelectedValue] = useState(
      route.params.selectedValue
   );
   const [dateOfBirth] = useState(route.params.dateOfBirth);
   const [firstName] = useState(route.params.firstName);
   const [lastName] = useState(route.params.lastName);
   const [address] = useState(route.params.address);
   const [ssn] = useState(route.params.ssn);
   const [email] = useState(route.params.email);
   const [language] = useState(route.params.language);
   const [selectedValueIndustry, setSelectedValueIndustry] =
      useState("Education");
   const [selectedValueColor, setSelectedValueColor] = useState("red");
   const [phone, setPhone] = useState("");
   const [website, setWebsite] = useState("");

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
               Customer support
            </Text>
            <Text
               style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
                  margin: 10,
               }}
            >
               We use this information to identify your business.
            </Text>
            <View>
               <View
                  style={{
                     borderWidth: 1,
                     margin: 14,
                     borderColor: "#a9a9a9",
                  }}
               >
                  <Picker
                     selectedValue={selectedValueIndustry}
                     style={{
                        height: 50,
                        marginLeft: 8,
                        marginRight: 8,
                     }}
                     onValueChange={(itemValue, itemIndex) =>
                        setSelectedValueIndustry(itemValue)
                     }
                  >
                     <Picker.Item label="Select your industry" />
                     <Picker.Item label="Ecormmence" value="Ecormmence" />
                     <Picker.Item label="Store" value="Store" />
                  </Picker>
               </View>
               <TextInput
                  placeholder="Phone number"
                  style={styles.input}
                  type="text"
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
               />
               <TextInput
                  placeholder="Business Website"
                  style={styles.input}
                  type="text"
                  value={website}
                  onChangeText={(text) => setWebsite(text)}
               />
               <View
                  style={{
                     borderWidth: 1,
                     margin: 14,
                     borderColor: "#a9a9a9",
                  }}
               >
                  <Picker
                     selectedValue={selectedValueColor}
                     style={{
                        height: 50,
                        marginLeft: 8,
                        marginRight: 8,
                     }}
                     onValueChange={(itemValue, itemIndex) =>
                        setSelectedValueColor(itemValue)
                     }
                  >
                     <Picker.Item label="Brand Color" />
                     <Picker.Item label="red" value="red" />
                     <Picker.Item label="blue" value="blue" />
                     <Picker.Item label="yellow" value="yellow" />
                  </Picker>
               </View>
               <Text
                  style={{
                     fontSize: 15,
                     textAlign: "center",
                     fontFamily: "AthleticsLight",
                     margin: 10,
                  }}
               >
                  No website? You can share an app store link or a business
                  social media profile.
               </Text>
            </View>
         </View>
         <View>
            <Button
               containerStyle={styles.button}
               title="Continue"
               type="Solid"
               onPress={() =>
                  navigation.navigate("Merchant Payout2", {
                
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

export default MerchantCustomerSupport;

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
