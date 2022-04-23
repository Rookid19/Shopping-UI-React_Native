import React, { useLayoutEffect, useState } from "react";
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { useFonts } from "expo-font";

const MerchantPayout2 = ({ navigation, route }) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         title: "",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: { color: "black", textAlign: "center" },
         headerTintColor: "black",
      });
   });

   const [dateOfBirth] = useState(route.params.dateOfBirth);
   const [firstName] = useState(route.params.firstName);
   const [lastName] = useState(route.params.lastName);
   const [address] = useState(route.params.address);
   const [ssn] = useState(route.params.ssn);
   const [color] = useState(route.params.color);
   const [website] = useState(route.params.website);
   const [industry] = useState(route.params.industry);
   const [phone] = useState(route.params.phone);
   const [country] = useState(route.params.country);
   const [email] = useState(route.params.email);
   const [individual] = useState(route.params.individual);
   const [business] = useState(route.params.business);
   const [ein] = useState(route.params.ein);
   const [organization] = useState(route.params.organization);
   const [representative] = useState(route.params.representative);






   const [loaded] = useFonts({
      AthleticsRegular: require("../assets/fonts/AthleticsRegular.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
      AthleticsLight: require("../assets/fonts/AthleticsLight.ttf"),
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
               Sign Up {lastName}
            </Text>
         </View>
         <View>
            <View
               style={{
                  flexDirection: "row",
                  margin: 30,
                  justifyContent: "space-between",
               }}
            >
               <Text
                  style={{
                     fontFamily: "AthleticsRegular",
                     fontSize: 20,
                  }}
               >
                  Enter your card information
               </Text>
               <TouchableOpacity activeOpacity={0.5}>
                  <AntDesign name="camerao" size={24} color="#0900ff" />
               </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
               <TextInput placeholder="Name on card" style={styles.input} />
            </View>
            <View style={{ alignItems: "center", marginTop: 30 }}>
               <TextInput placeholder="Card number" style={styles.input} />
            </View>
            <View
               style={{
                  flexDirection: "row",
                  margin: 30,
                  justifyContent: "space-between",
               }}
            >
               <TextInput placeholder="MM/YY" style={styles.inputSmall} />
               <TextInput placeholder="CVC" style={styles.inputSmall2} />
            </View>
            <View style={{ alignItems: "center" }}>
               <TextInput placeholder="Postal code" style={styles.input} />
            </View>
         </View>
         <View>
            <View style={{ alignItems: "center", marginTop: 60 }}>
               <Button
                  containerStyle={styles.button}
                  title="Add Card"
                  type="Solid"
                  onPress={() =>
                     navigation.navigate("Merchant Final", {
                        industry,
                        phone,
                        website,
                        color,
                        firstName,
                        lastName,
                        dateOfBirth,
                        address,
                        ssn,
                        email,
                        country,
                        individual,
                        organization,
                        ein,
                        representative,
                        business,
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
            <View>
               <Text
                  style={{
                     textAlign: "center",
                     margin: 30,
                     fontFamily: "AthleticsRegular",
                  }}
               >
                  By adding a new card, you agree to the
                  <Text style={{ color: "#0900ff" }}>
                     credit/debit card terms.
                  </Text>
               </Text>
            </View>
         </View>
      </View>
   );
};

export default MerchantPayout2;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-evenly",
   },
   input: {
      width: "85%",
      borderColor: "#a2a2a5",
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      fontSize: 20,
      fontFamily: "AthleticsMedium",
   },
   inputSmall: {
      width: "40%",
      borderColor: "#a2a2a5",
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      flex: 0.48,
      fontSize: 20,
      fontFamily: "AthleticsMedium",
   },
   inputSmall2: {
      width: "40%",
      borderColor: "#a2a2a5",
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      flex: 0.48,
      fontSize: 20,
      fontFamily: "AthleticsMedium",
   },
   button: {
      width: 350,
      // padding:20,
      marginTop: 10,
      // fontFamily: 'AthleticsRegular'
   },
});
