import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView, Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../firebase";
import Trial from "./Trial";
import { auth } from "../firebase";
import { TouchableOpacity } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Products = ({ navigation }) => {
   const [product, setProduct] = useState([]);
   const [show, setShow] = useState();

   const merchantEmail = auth?.currentUser?.email;

   useEffect(() => {
      const unsubscribe = db
         .collection("Merchants List(Products)")
         .doc(merchantEmail)
         .collection("Products")
         .orderBy("createdAt")
         .onSnapshot((snapshot) =>
            setProduct(
               snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
               }))
            )
         );
      return unsubscribe;
   }, [navigation]);

   useLayoutEffect(() => {
      navigation.setOptions({
         headerRight: () => (
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  // width: 80,
                  marginRight: 20,
               }}
            >
               <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                     navigation.navigate("QR Code", { merchantEmail })
                  }
               >
                  <AntDesign name="qrcode" size={24} color="black" />
               </TouchableOpacity>
            </View>
         ),
      });
   }, [navigation]);

   return (
      <View
         style={{
            marginTop: height / 10,
         }}
      >
         <ScrollView>
            {product.map(({ id, data: { ItemPrice, ItemName, ImageUrl } }) => (
               <Trial
                  // onPress={alert(ItemName)}
                  key={id}
                  id={id}
                  ItemName={ItemName}
                  ItemPrice={ItemPrice}
                  ImageUrl={ImageUrl}
               />
               // onPress={}
            ))}
         </ScrollView>
         {/* <Text>{merchantEmail}</Text> */}
      </View>
   );
};

export default Products;

const styles = StyleSheet.create({});
