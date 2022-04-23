import React, { useState } from "react";
import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
const { width, height } = Dimensions.get("window");

const Trial = ({ route, navigation, id, ItemName, ItemPrice, ImageUrl }) => {
   // const [image] = useState(route.params.image);
   // const [item] = useState(route.params.item);

   return (
      <ListItem
         key={id}
         bottomDivider
         style={styles.container}
         onPress={() => alert(ItemName)}
      >
         <ListItem.Content
            style={{
               flexDirection: "row",
               justifyContent: "flex-start",
               // backgroundColor:"blue"
            }}
         >
            <View>
               <Image
                  source={{
                     uri: ImageUrl,
                  }}
                  style={{ width: 50, height: 50, marginTop: 0, top: 0 }}
               />
            </View>
            <View>
               <ListItem.Title style={{ fontWeight: "800" }}>
                  {ItemName}
               </ListItem.Title>
               <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                  $ {ItemPrice}
               </ListItem.Subtitle>
            </View>
         </ListItem.Content>
      </ListItem>
   );
};

export default Trial;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      // backgroundColor: "blue",
   },
});
