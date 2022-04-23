import React, { useState, useEffect } from "react";
import {
   Button,
   Image,
   View,
   Platform,
   ActivityIndicator,
   TextInput,
   Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import firebase from "firebase";
import { Input } from "react-native-elements/dist/input/Input";
import { auth, db } from "../firebase";

const ImagePickerExample = ({ navigation }) => {
   const [image, setImage] = useState(null);
   const [uploading, setUploading] = useState(false);
   const [itemName, setItemName] = useState("");
   const [itemPrice, setItemPrcie] = useState("");

   useEffect(() => {
      (async () => {
         if (Platform.OS !== "web") {
            const { status } =
               await ImagePicker.getMediaLibraryPermissionsAsync;
            if (status !== "granted") {
               alert(
                  "Sorry, we need camera roll permissions to make this work!"
               );
            }
         }
      })();
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
                  navigation.navigate("Products");
               });
         }
      );
   };

   return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <Button title="Pick an image from camera roll" onPress={pickImage} />
         {/* <Button title="next" onPress={() => navigation.navigate("Trial")} /> */}
         {!uploading ? (
            <Button
               title="upload"
               onPress={uploadImage}
               disabled={!image || !itemPrice || !itemName}
            />
         ) : (
            <ActivityIndicator size="large" color="#0000ff" />
         )}
       
         <View style={{ width: 180 }}>
            <Input
               placeholder="Item name"
               autofucos
               type="text"
               value={itemName}
               onChangeText={(text) => setItemName(text)}
            />
         </View>
         <View style={{ width: 180 }}>
            <Input
               placeholder="Item Price"
               type="text"
               value={itemPrice}
               onChangeText={(text) => setItemPrcie(text)}
               keyboardType="numeric"
            />
         </View>
      </View>
   );
};

export default ImagePickerExample;
