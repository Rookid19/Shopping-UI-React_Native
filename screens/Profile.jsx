import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { auth, db } from "../firebase";
import { useFonts } from "expo-font";

const Profile = ({ navigation }) => {
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
   });

   if (!loaded) {
      return null;
   }
   const signOutUser = () => {
      auth
         .signOut()
         .then(() => {
            navigation.replace("Login");
         })
         .catch((error) => alert(error.message));
   };
   return (
      <View style={styles.container}>
         <View style={{}}>
            <StatusBar style="light" />
            <View
               style={{
                  width: "100%",
                  position: "relative",
                  top: 30,
                  padding: 10,
               }}
            >
               <Text style={{ fontSize: 24, textAlign: "center" }}>
                  Profile
               </Text>
            </View>
            <View style={{ margin: 50, alignItems: "center" }}>
               <Text
                  style={{
                     fontSize: 18,
                     color: "black",
                     fontFamily: "AthleticsRegular",
                  }}
               >
                  John Doe
               </Text>
               <Text
                  style={{
                     fontSize: 14,
                     color: "#a2a2a5",
                     fontFamily: "AthleticsRegular",
                  }}
               >
                  Haldcard ID HC5252110330
               </Text>
            </View>
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <FontAwesome5 name={"user-plus"} size={25} color="#0667d0" />
                  <Text
                     style={{
                        fontSize: 18,
                        marginLeft: 10,
                        color: "#a2a2a5",
                        fontFamily: "AthleticsRegular",
                     }}
                  >
                     My details
                  </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="#0667d0"
                  />
               </View>
            </View>
            <Divider orientation="horizontal" />
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <FontAwesome5
                     name={"info-circle"}
                     size={25}
                     color="#0667d0"
                  />
                  <Text
                     style={{
                        fontSize: 18,
                        marginLeft: 10,
                        color: "#a2a2a5",
                        fontFamily: "AthleticsRegular",
                     }}
                  >
                     Help and support
                  </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="#0667d0"
                  />
               </View>
            </View>
            <Divider orientation="horizontal" />
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <FontAwesome5 name={"cog"} size={25} color="#0667d0" />
                  <Text
                     style={{
                        fontSize: 18,
                        marginLeft: 10,
                        color: "#a2a2a5",
                        fontFamily: "AthleticsRegular",
                     }}
                  >
                     Settings
                  </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="#0667d0"
                  />
               </View>
            </View>
            <Divider orientation="horizontal" />
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <FontAwesome5 name={"book"} size={25} color="#0667d0" />

                  <Text
                     style={{
                        fontSize: 18,
                        marginLeft: 10,
                        color: "#a2a2a5",
                        fontFamily: "AthleticsRegular",
                     }}
                     onPress={() => navigation.navigate("About")}
                  >
                     About
                  </Text>
               </View>
               <View>
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("About")}
                  >
                     <FontAwesome5
                        name={"chevron-right"}
                        size={20}
                        color="#0667d0"
                     />
                  </TouchableOpacity>
               </View>
            </View>
            <Divider orientation="horizontal" />
            <View style={{ alignItems: "center" }}>
               <Button
                  containerStyle={styles.button}
                  type="clear"
                  title="Log out"
                  onPress={signOutUser}
                  titleStyle={{
                     color: "#0667d0",
                     fontSize: 20,
                     fontFamily: "AthleticsRegular",
                  }}
               />
            </View>
         </View>
         <View
            style={{
             
               backgroundColor: "white",
               width: "100%",
               position: "absolute",
               bottom: 50,
            }}
         >
            <Divider orientation="horizontal" />
         </View>

         <View
            style={{
               flexDirection: "row",
               backgroundColor: "white",
               justifyContent: "space-between",
               backgroundColor: "white",
               width: "100%",
               position: "absolute",
               bottom: 0,
            }}
         >
            <TouchableOpacity
               activeOpacity={0.3}
               onPress={() => navigation.navigate("User Dashboard")}
            >
               <FontAwesome5
                  name={"home"}
                  size={24}
                  color="#0667d0"
                  style={{ margin: 10 }}
               />
            </TouchableOpacity>
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
   );
};

export default Profile;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // justifyContent: "space-evenly",
      padding: 10,
      backgroundColor: "#ffffff",
   },
   profileNames: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 25,
   },
   button: {
      width: 320,
      marginTop: 10,
   },
});
