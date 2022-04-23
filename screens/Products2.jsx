import React, { useEffect } from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { db } from "../firebase";
import Trial from "./Trial";

const { height, width } = Dimensions.get("window");
const Products2 = ({ route, navigation }) => {
   const [merchantEmail] = useState(route.params.merchantEmail);
   const [product, setProduct] = useState([]);

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
   }, []);
   return (
      <View style={styles.container}>
         {/* <Text>{merchantEmail}</Text> */}

         <ScrollView>
            {product.map(({ id, data: { ItemPrice, ItemName, ImageUrl } }) => (
               <Trial
                  key={id}
                  id={id}
                  ItemName={ItemName}
                  ItemPrice={ItemPrice}
                  ImageUrl={ImageUrl}
               />
            ))}
         </ScrollView>
      </View>
   );
};

export default Products2;

const styles = StyleSheet.create({
   container: {
      marginTop: height / 10,
   },
});
