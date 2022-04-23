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

const MerchantSignup = ({ navigation }) => {
   const [selectedValue, setSelectedValue] = useState("United States");

   const [isSelected, setSelection] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [password1, setPassword1] = useState("");

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
                  fontFamily: "AthleticsRegular",
                  margin: 10,
               }}
            >
            </Text>
            <View>
               <TextInput
                  placeholder="Email address"
                  type="email"
                  style={styles.input}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
               />
               <TextInput
                  placeholder="Password"
                  style={styles.input}
                  type="password"
                  secureTextEntry
                  value={password}
                  onChangeText={(text) => setPassword(text)}
               />
               <TextInput
                  placeholder="Confirm Password"
                  style={styles.input}
                  type="password"
                  secureTextEntry
                  value={password1}
                  onChangeText={(text) => setPassword1(text)}
               />
               <View
                  style={{
                     borderWidth: 1,
                     margin: 14,
                     borderColor: "#a9a9a9",
                  }}
               >
                  <Picker
                     selectedValue={selectedValue}
                     style={{
                        height: 50,
                        marginLeft: 8,
                        marginRight: 8,
                     }}
                     onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                     }
                  >
                     <Picker.Item label="United States" value="United States" />
                     <Picker.Item label="Ghana" value="Ghana" />
                  </Picker>
               </View>
               <View style={{ flexDirection: "row", margin: 20 }}>
                  <View>
                     <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ color: "red" }}
                     />
                  </View>
                  {/* <Text>Is CheckBox selected: {isSelected ?  "red" : "👎"}</Text> */}
                  <View>
                     <Text>
                        I agree, on behalf on my company, to the{" "}
                        <Text
                           style={{
                              color: "#0900ff",
                              fontFamily: "AthleticsRegular",
                           }}
                           onPress={() =>
                              Linking.openURL("https://roodev19.web.app/")
                           }
                        >
                           Halfcard for Business Terms and Conditions,
                        </Text>
                        <Text> and I agree to Halfcard's </Text>
                        <Text
                           style={{
                              color: "#0900ff",
                              fontFamily: "AthleticsRegular",
                           }}
                           onPress={() =>
                              Linking.openURL("https://roodev19.web.app/")
                           }
                        >
                           Terms of Use
                        </Text>
                        <Text> and </Text>
                        <Text
                           style={{
                              color: "#0900ff",
                              fontFamily: "AthleticsRegular",
                           }}
                           onPress={() =>
                              Linking.openURL("https://roodev19.web.app/")
                           }
                        >
                           Privacy Policy.
                        </Text>
                     </Text>
                  </View>
               </View>
            </View>
         </View>
         <View>
            <Button
               containerStyle={styles.button}
               title="Create Account"
               type="Solid"
               onPress={() =>
                  navigation.navigate("Merchant Signup Get Started", {
                     email: email,
                     selectedValue: selectedValue,
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
         </View>
      </View>
   );
};

export default MerchantSignup;

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
