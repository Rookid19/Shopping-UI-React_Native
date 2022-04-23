import { useFonts } from "expo-font";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Card, Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const WidthrawalCash = ({ navigation }) => {
   const [text, setText] = useState("");

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
      AthleticsLight: require("../assets/fonts/AthleticsLight.ttf"),
      AthleticsMedium: require("../assets/fonts/AthleticsMedium.ttf"),
   });

   if (!loaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <StatusBar style="auto" />

         <View
            style={{
               // flex: 0.5,
               justifyContent: "space-around",
               alignItems: "center",
            }}
         >
            <Text style={{ fontSize: 24, fontFamily: "AthleticsLight" }}>
               Withdrawable Cash
            </Text>
            <Text
               style={{
                  fontSize: 22,
                  color: "#888888",
                  fontFamily: "AthleticsLight",
               }}
            >
               $705.22
            </Text>
            <View style={{ flexDirection: "row",marginTop:40 }}>
               {/* <Text
                  style={{
                     fontSize: 39,
                     fontFamily: "AthleticsRegular",
                     marginTop: 20,
                  }}
               >
                  $
               </Text>
               <Input placeholder=""/> */}
               <View>
                  <Text
                     style={{
                        fontSize: 39,

                        fontFamily: "AthleticsRegular",
                     }}
                  >
                     $ {text}
                  </Text>
               </View>
               <View style={{ width: 200, }}>
                  <Input keyboardType={"numeric"} style={{ fontSize: 40 }} />
               </View>
            </View>
         </View>
         <View
            style={{
               //    justifyContent: "center",
               // flex: 0.5,
               width: "90%",
               margin: 100,
            }}
         >
            <Button
               containerStyle={styles.button}
               type="clear"
               title="Deposit to bank"
               titleStyle={{
                  fontFamily: "AthleticsRegular",
                  color: "white",
                  fontSize: 20,
               }}
               onPress={() => navigation.navigate("Withdrawal Cash")}
            />
         </View>
      </View>
   );
};

export default WidthrawalCash;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent:"space-evenly"
   },
   button: {
      //   width: "90%",
      //   margin: 100,
      backgroundColor: "#1e36d9",
   },
});
