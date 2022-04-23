import { useFonts } from "expo-font";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button, Card } from "react-native-elements";

const MerchantCheckout = ({ navigation }) => {
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

   return (
      <View style={styles.container}>
         <View
            style={{
               width: "100%",
               position: "absolute",
               top: 30,
               padding: 10,
            }}
         >
            <Text
               style={{
                  fontSize: 24,
                  textAlign: "center",
               }}
            >
               My Sales
            </Text>
         </View>
         <View>
            <Text
               style={{
                  color: "black",
                  fontSize: 42,
                  fontFamily: "AthleticsRegular",
                  textAlign: "center",
                  marginTop: 10,
               }}
            >
               $1,505.22
            </Text>
            <Text
               style={{
                  fontSize: 18,
                  marginTop: 10,
                  fontFamily: "AthleticsRegular",
                  textAlign: "center",
                  color: "#a2a2a2",
               }}
            >
               Available
            </Text>
            <Button
               containerStyle={styles.button}
               title="Accept payments"
               type="Solid"
               onPress={() => navigation.navigate("Merchant Final")}
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
         <View>
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
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome5
                        name={"home"}
                        size={24}
                        color="black"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Home</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome
                        name={"credit-card"}
                        size={24}
                        color="black"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>  Card</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome
                        name={"tasks"}
                        size={24}
                        color="black"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Category</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     activeOpacity={0.3}
                     onPress={() => navigation.navigate("Make Payments")}
                  >
                     <FontAwesome
                        name={"gear"}
                        size={24}
                        color="black"
                        style={{ margin: 10 }}
                     />
                     <Text style={{ color: "#a2a2a2" }}>Settings</Text>
                  </TouchableOpacity>
               </View>
            </Card>
         </View>
      </View>
   );
};

export default MerchantCheckout;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-around",
      padding: 10,
   },

   button: {
      marginTop: 15,
      width: 250,
      alignSelf: "center",
   },
});
