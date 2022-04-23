import { useFonts } from "expo-font";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Input, Button, Card, Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { auth } from "../firebase";

const MerchantDashboard2 = ({ navigation }) => {
   const [text, setText] = useState("pause orders");
   const [password, setPassword] = useState("");
   const [text1, setText1] = useState(setText);
   useLayoutEffect(() => {
      navigation.setOptions({
         title: "",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: { color: "black", textAlign: "center" },
         headerTintColor: "white",
      });
   });

   const signOutMerchant = () => {
      auth
         .signOut()
         .then(() => {
            navigation.replace("Merchant Login");
         })
         .catch((error) => alert(error.message));
   };

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
               width: "100%",
               position: "absolute",
               top: 40,
               padding: 10,
            }}
         >
            <View>
               <Text
                  style={{
                     color: "white",
                     fontSize: 22,
                     fontFamily: "AthleticsLight",
                     textAlign: "center",
                  }}
               >
                  {auth?.currentUser?.displayName}'s Shop
               </Text>
            </View>
         </View>

         <View style={{}}>
            <Card
               containerStyle={{ borderRadius: 20 }}
               //   wrapperStyle={{ padding: 60 }}
            >
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     margin: 15,
                  }}
               >
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Merchant Checkout")}
                  >
                     <FontAwesome5
                        name={"shopping-cart"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Checkout</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome5
                        name={"tag"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>View orders</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Barcode Scanner")}
                  >
                     <FontAwesome5
                        name={"history"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Transactions</Text>
                  </TouchableOpacity>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     margin: 15,
                  }}
               >
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome5
                        name={"calendar"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Payout</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome
                        name={"gear"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Settings</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome5
                        name={"user-friends"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Customers</Text>
                  </TouchableOpacity>
               </View>
               <View
                  style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     margin: 15,
                  }}
               >
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Create Item")}
                  >
                     <FontAwesome
                        name={"list"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Items</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Products")}
                  >
                     <FontAwesome5
                        name={"database"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Insight</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={signOutMerchant}
                  >
                     <FontAwesome5
                        name={"question-circle"}
                        size={24}
                        color="#a2a2a2"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Support</Text>
                  </TouchableOpacity>
               </View>
               <Button
                  containerStyle={styles.button}
                  type="clear"
                  title={text}
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                  }}
                  onPress={() => setText("Resume orders")}
                  // onPress={() => setText1("pause orders")}
               />
            </Card>
         </View>
      </View>
   );
};

export default MerchantDashboard2;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#0667d0",
      justifyContent: "space-evenly",
   },
   button: {
      // width: 80,
      // marginBottom: 40,
      // backgroundColor: "green",
      borderRadius: 20,
   },
});
