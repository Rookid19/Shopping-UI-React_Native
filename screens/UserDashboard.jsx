import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Input, Text, Button, Card, Avatar } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { auth, db } from "../firebase";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const UserDashboard = ({ navigation }) => {
   useLayoutEffect(() => {
      navigation.setOptions({
         title: "",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: { color: "black", textAlign: "center" },
         headerTintColor: "white",
         // headerLeft: () => null,
      });
   });

   const [loaded] = useFonts({
      AthleticsRegular: require("../assets/fonts/AthleticsRegular.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
   });

   if (!loaded) {
      return null;
   }
   return (
      <View style={styles.container}>
         <StatusBar style="light" />
         <View style={{ flex: 0.7, marginTop: 40 }}>
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  position: "relative",
                  top: 30,
                  padding: 10,
                  // margin:20
               }}
            >
               <View style={{ marginLeft: 20 }}>
                  <TouchableOpacity activeOpacity={0.5}>
                     <View style={{ flexDirection: "row" }}>
                        <Button
                           title="Welcome, "
                           type="clear"
                           titleStyle={{
                              color: "white",
                              fontFamily: "AthleticsRegular",
                           }}
                           onPress={() => navigation.navigate("Profile")}
                        />
                        <Button
                           title={auth?.currentUser?.displayName}
                           type="clear"
                           titleStyle={{
                              color: "white",
                              fontFamily: "AthleticsRegular",
                           }}
                           onPress={() => navigation.navigate("Profile")}
                        />
                     </View>
                  </TouchableOpacity>
               </View>
               <FontAwesome5
                  name={"user-circle"}
                  size={30}
                  color="white"
                  onPress={() => navigation.navigate("Profile")}
               />
            </View>

            <View style={{ flex: 0.6 }}>
               <Card containerStyle={{ borderRadius: 20, marginTop: 40 }}>
                  <Card.Title
                  // wrapperStyle={{
                  //    fontFamily: "AthleticsRegular",
                  // }}
                  >
                     Status of your Account
                  </Card.Title>
                  <View style={styles.card}>
                     <View>
                        <View>
                           <Text
                              style={{
                                 fontSize: 50,
                                 fontFamily: "AthleticsRegular",
                              }}
                           >
                              $ 0.00
                           </Text>
                        </View>
                        <View
                           style={{
                              fontSize: 50,
                              alignItems: "center",
                           }}
                        >
                           <Text
                              style={{
                                 fontSize: 20,
                                 alignItems: "center",
                                 marginBottom: 20,
                                 fontFamily: "AthleticsRegular",
                              }}
                           >
                              Available
                           </Text>
                        </View>
                     </View>
                     <View
                        style={{
                           flexDirection: "row",
                           // justifyContent: "space-between",
                        }}
                     >
                        <View
                           style={{
                              // flexDirection: "row",
                              flex: 0.6,
                           }}
                        >
                           <Text>
                              <FontAwesome5 name={"expand"} size={24} />;
                           </Text>

                           <Text
                              style={{
                                 color: "#2089dc",
                                 marginLeft: -20,
                                 fontFamily: "AthleticsRegular",
                              }}
                              onPress={() =>
                                 Linking.openURL("https://roodev19.web.app/")
                              }
                           >
                              Scan to Pay
                           </Text>
                        </View>
                        <View>
                           <Text>
                              <FontAwesome5 name={"history"} size={24} />
                           </Text>
                           <Text
                              style={{
                                 color: "#2089dc",
                                 marginLeft: -25,
                                 fontFamily: "AthleticsRegular",
                              }}
                              onPress={() =>
                                 Linking.openURL("https://roodev19.web.app/")
                              }
                           >
                              Transactions
                           </Text>
                        </View>
                     </View>
                     <View>
                        <Text style={{}}></Text>
                     </View>
                  </View>
               </Card>
            </View>
         </View>
         <View
            style={{
               bottom: 0,
               position: "absolute",
               width: "100%",
            }}
         >
            <View style={styles.buttonContainer}>
               <Button
                  containerStyle={styles.button}
                  type="clear"
                  title="Add money"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
               <Button
                  containerStyle={styles.button}
                  type="clear"
                  title="Withdraw"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
            </View>
            <View style={{ backgroundColor: "#f3f3f3" }}>
               <Card
                  containerStyle={{ borderRadius: 20, marginTop: 30 }}
                  wrapperStyle={{ flexDirection: "row", padding: 20 }}
               >
                  <View style={{ flex: 0.8 }}>
                     <Text
                        style={{
                           fontFamily: "AthleticsRegular",
                        }}
                     >
                        Let your friends pay you by just showing QR code
                     </Text>
                  </View>
                  <View>
                     <Text style={{ marginLeft: 70 }}>
                        <FontAwesome name={"qrcode"} size={50} />;
                     </Text>
                     <Text
                        style={{
                           color: "#2089dc",
                           marginLeft: 50,
                           fontFamily: "AthleticsRegular",
                        }}
                        onPress={() =>
                           Linking.openURL("https://roodev19.web.app/")
                        }
                     >
                        My QRCode
                     </Text>
                  </View>
               </Card>
            </View>
            <View
               style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  width: "100%",
                  position: "relative",
                  bottom: 0,
                  // flex: 0.07,
               }}
            >
               <FontAwesome5
                  name={"home"}
                  size={24}
                  color="#0667d0"
                  style={{ margin: 10 }}
               />
               <TouchableOpacity
                  activeOpacity={0.3}
                  onPress={() => navigation.navigate("Make Payments")}
               >
                  <FontAwesome5
                     name={"dollar-sign"}
                     size={24}
                     color="#0667d0"
                     style={{ margin: 10 }}
                  />
               </TouchableOpacity>
               <TouchableOpacity
                  activeOpacity={0.3}
                  onPress={() => navigation.navigate("Add Payment Method")}
               >
                  <FontAwesome
                     name={"plus-circle"}
                     size={24}
                     color="#0667d0"
                     style={{ margin: 10 }}
                  />
               </TouchableOpacity>
            </View>
         </View>
         <View></View>
      </View>
   );
};

export default UserDashboard;

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#0667d0",
      flex: 1,
   },
   card: {
      justifyContent: "center",
      alignItems: "center",
   },
   button: {
      width: 180,
      marginBottom: 40,
      backgroundColor: "white",
      borderRadius: 20,
   },
   buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#f3f3f3",
   },
});
