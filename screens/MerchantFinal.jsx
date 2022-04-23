import { useFonts } from "expo-font";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { db } from "../firebase";

const MerchantFinal = ({ navigation, route }) => {
   const [firstName] = useState(route.params.firstName);

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

   const createMerchantInfo = async () => {
      await db
         .collection("MerchantInfo")
         .add({
            FirstName: route.params.firstName,
            LastName: route.params.lastName,
            Email: route.params.email,
            Phone: route.params.phone,
            Country: route.params.country,
            HomeAddress: route.params.address,
            SSN: route.params.ssn,
            Industry: route.params.industry,
            Color: route.params.color,
            Website: route.params.website,
            AccountType: route.params.individual || route.params.business,
            Organization: route.params.organization || "",
            EmployeeIdentificationNumber:
               route.params.ein || "",
            BusinessRepresentative: route.params.representative || "",
      
         })
         .then(() => {
            navigation.replace("Merchant Dashboard2");
         })
         .catch((error) => alert(error));
   };

   return (
      <View style={styles.container}>
         <View style={{ marginTop: 20 }}>
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
                  fontSize: 30,
               }}
            >
               You're all set! 
            </Text>
            <Text
               style={{
                  textAlign: "center",
                  fontFamily: "AthleticsRegular",
                  fontSize: 18,
               }}
            >
               Your account is now activated. You may start accepting payments
            </Text>
         </View>
         <View>
            <View style={styles.row}>
               <FontAwesome5
                  name={"check"}
                  size={30}
                  color="green"
                  style={{ marginRight: 15 }}
               />
               <Text
                  style={{
                     fontFamily: "AthleticsRegular",
                     fontSize: 20,
                     //  textAlign: "center",
                  }}
               >
                  Accept payment while orders are still pending
               </Text>
            </View>
            <View style={styles.row}>
               <FontAwesome5
                  name={"check"}
                  size={30}
                  color="green"
                  style={{ marginRight: 15 }}
               />
               <Text
                  style={{
                     fontFamily: "AthleticsRegular",
                     fontSize: 20,
                     //  textAlign: "center",
                  }}
               >
                  No POS hardware needed. Just internet and ipad.
               </Text>
            </View>
            <View style={styles.row}>
               <FontAwesome5
                  name={"check"}
                  size={30}
                  color="green"
                  style={{ marginRight: 15 }}
               />
               <Text
                  style={{
                     fontFamily: "AthleticsRegular",
                     fontSize: 20,
                     textAlign: "center",
                  }}
               >
                  No hidden, set-up or monthly fees
               </Text>
            </View>
            <View style={styles.row}>
               <FontAwesome5
                  name={"check"}
                  size={30}
                  color="green"
                  style={{ marginRight: 15 }}
               />
               <Text
                  style={{
                     fontFamily: "AthleticsRegular",
                     fontSize: 20,
                     //  textAlign: "center",
                  }}
               >
                  Check out our pricing page
               </Text>
            </View>
         </View>
         <View>
            <Button
               containerStyle={styles.button}
               title="Continue"
               type="Solid"
               onPress={createMerchantInfo}
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

export default MerchantFinal;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 10,
      justifyContent: "space-around",
   },
   row: {
      flexDirection: "row",
      margin: 30,
   },
});
