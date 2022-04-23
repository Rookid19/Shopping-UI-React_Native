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

const MerchantPayout = ({ navigation }) => {
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
               Add account for payout
            </Text>
            <Text
               style={{
                  fontSize: 16,
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
                  margin: 20,
               }}
            >
               A payout is the transfer of funds from Halfcard to your Bank
               account. We recommend you use your checking account.
            </Text>
            <View>
               <Text
                  style={{
                     marginLeft: 12,
                  }}
               >
                  Acount Type
               </Text>
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
                     <Picker.Item label="Checking" value="Us" />
                     <Picker.Item label="Savings" value="gh" />
                  </Picker>
               </View>
               <Text
                  style={{
                     marginLeft: 12,
                  }}
               >
                  Rounting Number
               </Text>
               <TextInput
                  placeholder="000000000"
                  style={styles.input}
                  maxLength={3}
               />
               <Text
                  style={{
                     marginLeft: 12,
                  }}
               >
                  Account Number
               </Text>
               <TextInput
                  placeholder="00000000000000"
                  style={styles.input}
                  maxLength={14}
               />
               <Text
                  style={{
                     marginLeft: 12,
                  }}
               >
                  Re-enter Account Number
               </Text>
               <TextInput
                  placeholder="00000000000000"
                  style={styles.input}
                  maxLength={14}
               />
            </View>
         </View>
         <View>
            <Button
               containerStyle={styles.button}
               title="Submit"
               type="Solid"
               onPress={() => navigation.navigate("Merchant Final")}
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

export default MerchantPayout;

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
