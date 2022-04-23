import { useFonts } from "expo-font";
import React, { useLayoutEffect, useEffect, useState } from "react";
import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   TextInput,
   TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { ActivityIndicator } from "react-native";
const { width, height } = Dimensions.get("window");
import { auth, db } from "../firebase";
import firebase from "firebase";

const CreateItem = ({ navigation }) => {
   const [itemName, setItemName] = useState("");
   const [itemPrice, setItemPrice] = useState("");
   const [itemDiscount, setItemDiscount] = useState("");
   const [image, setImage] = useState(null);
   const [uploading, setUploading] = useState(false);

   useLayoutEffect(() => {
      navigation.setOptions({
         // title: "Signal",
         // headerStyle: { backgroundColor: "white" },
         // headerTitleStyle: { color: "black", textAlign: "center" },
         // headerTintColor: "black",

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
                  onPress={() => navigation.navigate("Products")}
               >
                  <Text
                     style={{
                        color: "#0667d0",
                        fontFamily: "AthleticsRegular",
                     }}
                  >
                     View Products
                  </Text>
               </TouchableOpacity>
            </View>
         ),
      });
   }, [navigation]);

   useEffect(() => {
      // (async () => {
      //    if (Platform.OS !== "web") {
      //       const { status } =
      //          await ImagePicker.getMediaLibraryPermissionsAsync;
      //       if (status !== "granted") {
      //          alert(
      //             "Sorry, we need camera roll permissions to make this work!"
      //          );
      //       }
      //    }
      // })();
   }, []);

   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
         setImage(result.uri);
      }
   };

   const takePhoto = async () => {
      let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
         setImage(result.uri);
      }
   };

   useLayoutEffect(() => {
      navigation.setOptions({
         // title: "",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: {
            color: "black",
            textAlign: "center",
            fontFamily: "AthleticsMedium",
         },
         headerTintColor: "black",
      });
   });

   const uploadImage = async () => {
      const blob = await new Promise((resolve, reject) => {
         const xhr = new XMLHttpRequest();
         xhr.onload = function () {
            resolve(xhr.response);
         };
         xhr.onerror = function () {
            reject(new TypeError("Network request failed"));
         };
         xhr.responseType = "blob";
         xhr.open("GET", image, true);
         xhr.send(null);
      });

      const ref = firebase.storage().ref().child(new Date().toISOString());
      const snapshot = ref.put(blob);

      snapshot.on(
         firebase.storage.TaskEvent.STATE_CHANGED,
         () => {
            setUploading(true);
         },
         (error) => {
            setUploading(false);
            console.log(error);
            blob.close();
            return;
         },
         () => {
            snapshot.snapshot.ref
               .getDownloadURL()
               .then((url) => {
                  db.collection("Merchants List(Products)")
                     .doc(auth?.currentUser?.email)
                     .collection("Products")
                     // .orderBy("name", "asc")

                     // .collection(auth?.currentUser?.email)
                     // .collection("Products")
                     .add({
                        ItemName: itemName,
                        ImageUrl: url,
                        ItemPrice: itemPrice,
                        createdAt:
                           firebase.firestore.FieldValue.serverTimestamp(),
                     })
                     .catch((error) => alert(error));
                  setUploading(false);
                  console.log("download url : ", url);
                  blob.close();
                  return url;
               })
               .then(() => {
                  // navigation.navigate("Products");
                  alert("Products Added");
               });
         }
      );
   };

   const [loaded] = useFonts({
      AthleticsRegular: require("../assets/fonts/AthleticsRegular.ttf"),
      AthleticsBold: require("../assets/fonts/AthleticsBold.ttf"),
      AthleticsMedium: require("../assets/fonts/AthleticsMedium.ttf"),
      AthleticsLight: require("../assets/fonts/AthleticsLight.ttf"),
   });

   if (!loaded) {
      return null;
   }

   return (
      <View style={styles.container}>
         <Text style={{ textAlign: "center", fontFamily: "AthleticsRegular" }}>
            Add new item to your list of products
         </Text>

         <TextInput
            placeholder="Item name"
            placeholderTextColor="#000000ce"
            type="text"
            style={styles.input}
            value={itemName}
            onChangeText={(text) => setItemName(text)}
         />
         <TextInput
            placeholder="Price"
            placeholderTextColor="#000000ce"
            type="text"
            keyboardType="numeric"
            style={styles.input}
            value={itemPrice}
            onChangeText={(text) => setItemPrice(text)}
         />
         <TextInput
            placeholder="Add discount %"
            placeholderTextColor="#000000ce"
            type="text"
            style={styles.input}
            value={itemDiscount}
            onChangeText={(text) => setItemDiscount(text)}
         />
         <Button
            containerStyle={styles.button}
            title="Attach Image"
            type="Solid"
            onPress={pickImage}
            buttonStyle={{
               backgroundColor: "#ddd",
               padding: 20,
            }}
            titleStyle={{
               color: "#0667d0",
               fontFamily: "AthleticsRegular",
               fontSize: 20,
            }}
         />
         <Button
            containerStyle={styles.button}
            type="clear"
            title="Take Photo"
            onPress={takePhoto}
            titleStyle={{
               color: "#0667d0",
               fontFamily: "AthleticsRegular",
               fontSize: 20,
            }}
         />
         {!uploading ? (
            <Button
               containerStyle={styles.button}
               title="Save"
               type="Solid"
               onPress={uploadImage}
               buttonStyle={{
                  backgroundColor: "#ddd",
                  padding: 20,
               }}
               titleStyle={{
                  color: "#0667d0",
                  fontFamily: "AthleticsRegular",
                  fontSize: 20,
               }}
               disabled={!image || !itemPrice || !itemName}
            />
         ) : (
            <ActivityIndicator size="large" color="#0000ff" />
         )}
         {/* <Image
            source={{
               uri: image,
            }}
            style={{ width: 50, height: 50, marginTop: 0, top: 0 }}
         /> */}
      </View>
   );
};

export default CreateItem;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: height / 10,
      padding: 10,
   },
   input: {
      height: 70,
      margin: 12,
      // borderWidth: 1,
      borderColor: "#a9a9a9",
      padding: 15,
      fontSize: 20,
      fontFamily: "AthleticsRegular",
      backgroundColor: "white",
   },
   button: {
      width: width,
      paddingLeft: 10,
      paddingRight: 30,
      marginTop: 10,
      fontFamily: "AthleticsRegular",
   },
   buttonSave: {
      width: width,
      paddingLeft: 10,
      paddingRight: 30,
      marginTop: 10,
      fontFamily: "AthleticsRegular",
      marginTop: height / 3,
      // marginBottom: 20,
   },
});
