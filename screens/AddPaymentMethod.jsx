import { useFonts } from "expo-font";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";


const AddPaymentMethod = ({ navigation }) => {

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
         <StatusBar style="light" />

         <View style={{ margin: 40 }}>
            <Text
               style={{
                  textAlign: "center",
                  fontSize: 18,
                  marginLeft: 10,
                  //    color: "#00000",
                  fontFamily: "AthleticsLight",
               }}
            >
               Add the card or bank that you want to use when making payments
               with Halfcard.
            </Text>
         </View>
         <View>
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <Text
                     style={{
                        fontSize: 25,
                        marginLeft: 10,

                        fontFamily: "AthleticsLight",
                     }}
                     onPress={() => navigation.navigate("Login")}
                  >
                     Bank Account
               </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="#a2a2a5"
                     onPress={() => navigation.navigate("Login")}
                  />
               </View>
            </View>
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <Text
                     style={{
                        fontSize: 25,
                        marginLeft: 10,

                        fontFamily: "AthleticsLight",
                     }}
                     onPress={() => navigation.navigate("Link Debit Card")}
                  >
                     Debit Card
               </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="#a2a2a5"
                     onPress={() => navigation.navigate("Link Debit Card")}
                  />
               </View>
            </View>
         </View>


      </View>
   );
};

export default AddPaymentMethod;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-around"
   },
   profileNames: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 40,
   },
});
