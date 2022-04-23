import React, { useLayoutEffect } from "react";
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

const LinkDebitCard = ({ navigation }) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         headerTitleStyle: {
            color: "white",
            textAlign: "center",
            fontFamily: "AthleticsBold",
         },
   headerTintColor: "white", //changes any icon color in the header to white

      });
   });
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
               flexDirection: "row",
               margin: 30,
               justifyContent: "space-between",
            }}
         >
            <Text
               style={{
                  fontFamily: "AthleticsRegular",
               }}
            >
               Enter your card information
            </Text>
            <TouchableOpacity activeOpacity={0.5}>
               <AntDesign name="camerao" size={24} color="#0667d0" />
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
         <View style={{ alignItems: "center", marginTop: 60 }}>
            <Button
               containerStyle={styles.button}
               title="Add Card"
               type="Solid"
               onPress={() => navigation.navigate("Personal Details")}
               buttonStyle={{
                  backgroundColor: "#0667d0",
               }}
               titleStyle={{
                  color: "white",
                  fontFamily: "AthleticsRegular",
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
               <Text style={{color: "#0667d0",}}>credit/debit card terms.</Text>
            </Text>
         </View>
      </View>
   );
};

export default LinkDebitCard;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   input: {
      width: "85%",
      borderColor: "#a2a2a5",
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
   },
   inputSmall: {
      width: "40%",
      borderColor: "#a2a2a5",
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      flex: 0.48,
   },
   inputSmall2: {
      width: "40%",
      borderColor: "#a2a2a5",
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      flex: 0.48,
   },
   button: {
      width: 350,
      // padding:20,
      marginTop: 10,
      // fontFamily: 'AthleticsRegular'
   },
});
