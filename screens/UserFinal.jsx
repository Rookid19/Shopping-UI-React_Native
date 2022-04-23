import { useFonts } from "expo-font";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { db } from "../firebase";

const UserFinal = ({ navigation, route }) => {
   const [loaded] = useFonts({
      AthleticsRegular: require("../assets/fonts/AthleticsRegular.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
      AthleticsMedium: require("../assets/fonts/AthleticsMedium.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
   });

   if (!loaded) {
      return null;
   }

   const createUserInfo = async () => {
      await db
         .collection("UserInfo")
         .add({
            FirstName: route.params.firstName,
            LastName: route.params.lastName,
            Email: route.params.email,
            Phone: route.params.phone,
         })
         .then(() => {
            navigation.replace("User Dashboard2");
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
               One app, all things money
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
                  Pay and get paid hassle-free
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
                  Pay for things in-store at any Halfcard supported checkout
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
                  Spend with confidence
               </Text>
            </View>
         </View>
         <View>
            <Button
               containerStyle={styles.button}
               title="Continue"
               type="Solid"
               onPress={createUserInfo}
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

export default UserFinal;

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
