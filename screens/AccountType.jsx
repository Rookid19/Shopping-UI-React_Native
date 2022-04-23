import { useFonts } from "expo-font";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const AccountType = ({ navigation,route }) => {
   useLayoutEffect(() => {
      // const [description, setDescription] = useState(route.params.description);


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
         <View >
            <Text
               style={{
                  textAlign: "center",
                  fontSize: 30,
                  marginLeft: 10,
                  //    color: "#00000",
                  fontFamily: "AthleticsMedium",
               }}
            >
               Choose the account type. 
            </Text>
            <Text
               style={{
                  textAlign: "center",
                  fontSize: 18,
                  marginLeft: 10,
                  //    color: "#00000",
                  fontFamily: "AthleticsLight",
               }}
            >
               Select the account type.
            </Text>
         </View>
         <View>
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <Text
                     style={{
                        fontSize: 25,
                        marginLeft: 10,
                        color: "#0667d0",
                        fontFamily: "AthleticsLight",
                     }}
                     onPress={() => navigation.navigate("Phone")}
                  >
                     Personal Account
                  </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="black"
                     onPress={() => navigation.navigate("Phone")}
                  />
               </View>
            </View>
            <View style={styles.profileNames}>
               <View style={{ flexDirection: "row" }}>
                  <Text
                     style={{
                        fontSize: 25,
                        marginLeft: 10,
                        color: "#0667d0",
                        fontFamily: "AthleticsLight",
                     }}
                     onPress={() => navigation.navigate("Merchant GetStarted")}
                  >
                     Merchant Account
                  </Text>
               </View>
               <View>
                  <FontAwesome5
                     name={"chevron-right"}
                     size={20}
                     color="black"
                     onPress={() => navigation.navigate("Merchant Signup")}
                  />
               </View>
            </View>
         </View>
      </View>
   );
};

export default AccountType;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-evenly",
   },
   profileNames: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 40,
   },
});
