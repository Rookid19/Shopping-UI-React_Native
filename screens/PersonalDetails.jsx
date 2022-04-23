import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Image, Input } from "react-native-elements";
import { auth } from "../firebase";
import { useFonts } from "expo-font";
import { TextInput } from "react-native";

import { Formik } from "formik";

import {
   StyledContainer,
   PageLogo,
   PageTitle,
   SubTitle,
   StyledInputLabel,
   StyledFormArea,
   StyledButton,
   StyledTextInput,
   LeftIcon,
   RightIcon,
   InnerContainer,
   ButtonText,
   MsgBox,
   Line,
   ExtraView,
   ExtraText,
   TextLink,
   TextLinkContent,
   Colors,
} from "../components/styles";

import * as yup from "yup";
//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";

let loginValidationSchema = yup.object().shape({
   firstName: yup.string().required("Legal first name is required"),
   lastName: yup.string().required("Legal last name is required"),
  

   // .number("Please enter a valid phone number")
   // .test(
   //    "maxDigits",
   //    "Phone field must have 10 digits ",
   //    (number) => String(number).length >= 10
   // ),
});

const PersonalDetails = ({ navigation, route }) => {
   const [phone] = useState(route.params.phone);
   const [verifyPhone] = useState(route.params.verifyPhone);

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
      AthleticsLight: require("../assets/fonts/AthleticsLight.ttf"),
   });

   if (!loaded) {
      return null;
   }

   return (
      // KeyboardAvoidingView behavior="padding"
      // <View style={styles.container}>

      <StyledContainer>
         <StatusBar style="dark" />

         <Formik
            initialValues={{ firstName: "", lastName: "" }}
            onSubmit={(values) => {
               const { firstName, lastName } = values;
               navigation.navigate("Email", {
                  phone,
                  verifyPhone,
                  firstName,
                  lastName,
               });
               // const { email } = values;
            }}
            // onSubmit={auth.signInWithEmailAndPassword(email,password).catch((error) => alert(error.message));}
            // onSubmit={signIn}
            validationSchema={loginValidationSchema}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
               isSubmitting,
               isValid,
            }) => (
               <StyledFormArea>
                  <PageTitle style={styles.medium}>
                     Personal Details {verifyPhone} {phone}
                  </PageTitle>
                  <SubTitle style={styles.regular}>
                     Halfcard is required by law to collect this information.
                  </SubTitle>

                  <View>
                     <MyTextInput
                        style={styles.regular}
                        label="Legal First Name"
                        placeholder="Eric"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("firstName")}
                        onBlur={handleBlur("firstName")}
                        value={values.firstName}
                        // keyboardType="numeric"
                        maxLength={20}
                        icon="person"
                     />

                     {errors.firstName && touched.firstName && (
                        <Text style={styles.errors}>{errors.firstName}</Text>
                     )}
                  </View>
                  <View>
                     <MyTextInput
                        style={styles.regular}
                        label="Legal Last Name"
                        placeholder="Aidoo"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("lastName")}
                        onBlur={handleBlur("lastName")}
                        value={values.lastName}
                        maxLength={20}
                        icon="person"
                     />

                     {errors.lastName && touched.lastName && (
                        <Text style={styles.errors}>{errors.lastName}</Text>
                     )}
                  </View>

                  <StyledButton
                     onPress={handleSubmit}
                     disabled={!isValid}
                     style={{
                        shadowColor: "#00acee",
                        backgroundColor: !isValid ? "#CACFD2" : "#0667d0",
                        width: "100%",
                        position: "absolute",
                        bottom: 0,
                        padding: 10,
                     }}
                  >
                     <ButtonText style={styles.regular}>Continue</ButtonText>
                  </StyledButton>
               </StyledFormArea>
            )}
         </Formik>
      </StyledContainer>
   );
};

const MyTextInput = ({
   label,
   icon,
   isPassword,
   hidePassword,
   setHidePassword,
   ...props
}) => {
   return (
      <View>
         <LeftIcon>
            <Octicons name={icon} size={30} color={brand} />
         </LeftIcon>
         <StyledInputLabel style={styles.medium}>{label}</StyledInputLabel>
         <StyledTextInput {...props} />
         {isPassword && (
            <RightIcon
               onPress={() => {
                  setHidePassword(!hidePassword);
               }}
            >
               <Ionicons
                  name={hidePassword ? "md-eye-off" : "md-eye"}
                  size={30}
                  color={darkLight}
               />
            </RightIcon>
         )}
         {isPassword && (
            <RightIcon
               onPress={() => {
                  setHidePassword(!hidePassword);
               }}
            >
               <Ionicons
                  name={hidePassword ? "md-eye-off" : "md-eye"}
                  size={30}
                  color={darkLight}
               />
            </RightIcon>
         )}
      </View>
   );
};

export default PersonalDetails;

const styles = StyleSheet.create({
   errors: {
      fontSize: 14,
      color: "red",
      fontFamily: "AthleticsLight",

      // marginTop: 2,
   },
   regular: {
      fontFamily: "AthleticsRegular",
   },
   bold: {
      fontFamily: "AthleticsBold",
   },
   medium: {
      fontFamily: "AthleticsMedium",
   },
   light: {
      fontFamily: "AthleticsLight",
   },
});
