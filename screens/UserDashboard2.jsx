import { useFonts } from "expo-font";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Input, Button, Card, Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { auth } from "../firebase";
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";

const UserDashboard2 = ({ navigation }) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         title: "",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: { color: "black", textAlign: "center" },
         headerTintColor: "white",
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
         <StatusBar style="light" />

         <View
            style={{
               flexDirection: "row",
               justifyContent: "space-between",
               width: "100%",
               position: "absolute",
               top: 50,
               padding: 10,
            }}
         >
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Make Payments")}
            >
               <Ionicons
                  name="menu-outline"
                  size={30}
                  color="#000000b3"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>

            <View>
               <View style={{ flexDirection: "row" }}>
                  <Button
                     title="Welcome, "
                     type="clear"
                     titleStyle={{
                        color: "black",
                        fontFamily: "AthleticsRegular",
                        fontSize: 18,
                     }}
                     buttonStyle={{
                        padding: 15,
                     }}
                     onPress={() => navigation.navigate("Profile")}
                  />
                  <Button
                     title={auth?.currentUser?.displayName}
                     type="clear"
                     titleStyle={{
                        color: "black",
                        fontFamily: "AthleticsRegular",
                        fontSize: 18,
                     }}
                     buttonStyle={{
                        padding: 15,
                     }}
                     onPress={() => navigation.navigate("Profile")}
                  />
               </View>
            </View>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Make Payments")}
            >
               <Ionicons
                  name="scan-outline"
                  size={30}
                  color="#000000b3"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
         </View>
         <View
            style={{
               flex: 0,
               flexDirection: "column",
               justifyContent: "space-between",
            }}
         >
            <View>
               <Text
                  style={{
                     color: "black",
                     fontSize: 42,
                     fontFamily: "AthleticsLight",
                     textAlign: "center",
                     marginTop: 10,
                  }}
               >
                  $705.22
               </Text>
               <Text
                  style={{
                     marginTop: 10,
                     color: "#a2a2a2",
                     fontSize: 18,
                     fontFamily: "AthleticsLight",
                     textAlign: "center",
                  }}
               >
                  Available balance
               </Text>
            </View>
            <View style={styles.buttonContainer}>
               <Button
                  containerStyle={styles.button}
                  type="solid"
                  title="Deposit"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                  }}
                  buttonStyle={{
                     backgroundColor: "#0667d0cf",
                     padding: 15,
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
               <Button
                  containerStyle={styles.button2}
                  type="clear"
                  title="Cash out"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                  }}
                  buttonStyle={{
                     padding: 15,
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
            </View>
         </View>

         <View style={styles.transaction}>
            <View style={styles.transactionMenu}>
               <Text>Transactions</Text>
               <Text style={{ color: "#0667d0" }}> View all</Text>
            </View>
            <View style={styles.transactionMenu}>
               <View>
                  <Text>John</Text>
                  <Text>Jul 27,2021</Text>
               </View>
               <Text>$20.64</Text>
            </View>
            <View style={styles.transactionMenu}>
               <View>
                  <Text>Randy Odoom</Text>
                  <Text>Jul 27,2021</Text>
               </View>
               <Text style={{ color: "green" }}>+$20.64</Text>
            </View>
            <View style={styles.transactionMenu}>
               <View>
                  <Text>Accra Mall</Text>
                  <Text>Jul 27,2021</Text>
               </View>
               <Text>$20.64</Text>
            </View>
         </View>
         <View
            style={{
               flexDirection: "row",

               justifyContent: "space-between",
               //    backgroundColor: "#1e36d9",
               width: "100%",
               position: "absolute",
               bottom: 0,
               padding: 10,
               // flex: 0.07,
            }}
         >
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Make Payments")}
            >
               <Octicons name="pulse" size={30} color="#000000b3" />

               <Text>Banking</Text>
            </TouchableOpacity>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Halfcard")}
            >
               <Octicons name="arrow-both" size={30} color="#000000b3" />

               <Text>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Link Debit Card")}
            >
               <Octicons name="credit-card" size={30} color="#000000b3" />

               <Text>Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Profile")}
            >
               <Octicons name="history" size={30} color="#000000b3" />

               <Text>Explore</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default UserDashboard2;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white",
      justifyContent: "space-evenly",
   },
   button: {
      width: "40%",
      //   margin: 20,
      borderRadius: 20,
   },
   button2: {
      width: "40%",
      //   margin: 20,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#0667d0",
      borderRadius: 20,

      // padding:20,
      //   marginTop: 10,
      // fontFamily: 'AthleticsRegular'
   },
   buttonContainer: {
      flexDirection: "row",
      // backgroudColor:"red"
      justifyContent: "space-around",
   },
   transaction: {
      padding: 20,
      backgroundColor: "#a2a2a214",
      margin: 20,
   },
   transactionMenu: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 10,
   },
   buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 30,
   },
});
