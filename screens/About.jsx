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
import { Linking } from "react-native";

const About = ({ navigation }) => {
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
   });

   if (!loaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <View style={{ flex: 0.6 }}>
            <StatusBar style="light" />
            <View
               style={{
                  width: "100%",
                  position: "relative",
                  top: 30,
                  padding: 10,
                  marginBottom:50,
               }}
            >
               <Text style={{ fontSize: 24, textAlign: "center" }}>
                  About
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
                        fontFamily: "AthleticsLight",
                     }}
                  >
                     Terms and Conditions
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
                        fontFamily: "AthleticsLight",
                     }}
                     onPress={() => navigation.navigate("Login")}
                  >
                     Privacy Policy
                  </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="#0667d0"
                     onPress={() => navigation.navigate("Login")}
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
                        fontFamily: "AthleticsLight",
                     }}
                  >
                     Acceptable Use Policy
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
                  <FontAwesome5 name={"book"} size={20} color="#0667d0" />
                  <Text
                     style={{
                        fontSize: 18,
                        marginLeft: 10,
                        color: "#a2a2a5",
                        fontFamily: "AthleticsLight",
                     }}
                  >
                     E-Sign Disclosure & Consent
                  </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="#0667d0"
                     onPress={() => navigation.navigate("About")}
                  />
               </View>
            </View>
         </View>

         <View>
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
               <View style={{ margin: 30 }}>
                  <FontAwesome5
                     name={"twitter"}
                     size={25}
                     color="#0667d0"
                     onPress={() =>
                        Linking.openURL("https://twitter.com/_halfcard/")
                     }
                  />
               </View>
               <View style={{ margin: 30 }}>
                  <FontAwesome5
                     name={"instagram"}
                     size={25}
                     color="#0667d0"
                     onPress={() =>
                        Linking.openURL(
                           "https://www.instagram.com/halfcardapp/"
                        )
                     }
                  />
               </View>
            </View>
            <View style={{ alignItems: "center" }}>
               <Text>Version beta</Text>
               <View style={{ flexDirection: "row" }}>
                  <Text
                     style={{
                        fontFamily: "AthleticsBold",
                        // marginLeft: 20,
                        marginRight: 20,
                     }}
                  >
                     &copy; 2 0 2 1
                  </Text>
                  <Text style={{ fontFamily: "AthleticsRegular" }}>
                     Halcard
                  </Text>
               </View>
            </View>
         </View>
      </View>
   );
};

export default About;

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
