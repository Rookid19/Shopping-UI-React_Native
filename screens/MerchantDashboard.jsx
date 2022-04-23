import { useFonts } from "expo-font";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Input, Button, Card, Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const MerchantDashboard = ({ navigation }) => {

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
               position: "relative",
               top: 0,
               padding: 10,
            }}
         >
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Make Payments")}
            >
               <FontAwesome5
                  name={"bars"}
                  size={24}
                  color="white"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
            <View>
               <Text
                  style={{
                     color: "white",
                     fontSize: 22,
                     fontFamily: "AthleticsLight",
                     marginTop: 10,
                  }}
               >
                  Lauren's Shop
               </Text>
            </View>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Make Payments")}
            >
               <FontAwesome5
                  name={"expand"}
                  size={24}
                  color="white"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
         </View>

         <View style={{ alignItems: "center" }}>
            <View>
               <Text
                  style={{
                     color: "white",
                     fontSize: 22,
                     fontFamily: "AthleticsLight",
                     textAlign: "center",
                  }}
               >
                  Total Sales
               </Text>
               <Text
                  style={{
                     color: "white",
                     fontSize: 42,
                     fontFamily: "AthleticsRegular",
                     textAlign: "center",
                     marginTop: 10,
                  }}
               >
                  $705.22
               </Text>
            </View>
            <View style={styles.buttonContainer}>
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
               <Button
                  containerStyle={styles.button}
                  type="clear"
                  title="Accept Money"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                     color: "white",
                     fontSize: 20,
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
            </View>
         </View>
         <View>
            <Text
               style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "AthleticsLight",
                  marginLeft: 20,
               }}
            >
               Action Items
            </Text>

            <View>
               <Button
                  containerStyle={styles.button2}
                  type="clear"
                  title="Pending Orders"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                     color: "white",
                     fontSize: 20,
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
               <Button
                  containerStyle={styles.button2}
                  type="clear"
                  title="Transaction Volume"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                     color: "white",
                     fontSize: 20,
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
            </View>
         </View>
         <View>
            <Text
               style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "AthleticsLight",
                  marginLeft: 20,
               }}
            >
               Your Growth
            </Text>

            <View>
               <Button
                  containerStyle={styles.button2}
                  type="clear"
                  title="Get Insight"
                  titleStyle={{
                     fontFamily: "AthleticsRegular",
                     color: "white",
                     fontSize: 20,
                  }}
                  onPress={() => navigation.navigate("Login")}
               />
            </View>
         </View>
         <View
            style={{
               flexDirection: "row",

               justifyContent: "space-between",
               backgroundColor: "#1e36d9",
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
               <FontAwesome5
                  name={"home"}
                  size={24}
                  color="white"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Make Payments")}
            >
               <FontAwesome5
                  name={"credit-card"}
                  size={24}
                  color="white"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Add Payment Method")}
            >
               <FontAwesome
                  name={"user-circle"}
                  size={24}
                  color="white"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("Add Payment Method")}
            >
               <FontAwesome
                  name={"list"}
                  size={24}
                  color="white"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default MerchantDashboard;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#001cdb",
      justifyContent: "space-evenly",
   },
   button: {
      width: "40%",
      margin: 20,
      backgroundColor: "#1e36d9",
      // padding:20,
      //   marginTop: 10,
      // fontFamily: 'AthleticsRegular'
   },
   button2: {
      width: "90%",
      margin: 20,
      backgroundColor: "#1e36d9",

      // padding:20,
      //   marginTop: 10,
      // fontFamily: 'AthleticsRegular'
   },
   buttonContainer: {
      flexDirection: "row",
      // backgroudColor:"red"
      // justifyContent: "space-around",
   },
});
