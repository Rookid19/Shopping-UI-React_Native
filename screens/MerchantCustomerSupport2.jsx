import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
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
// import MerchantSignup from "./MerchantSignup";
import { Fragment } from "react";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";

let loginValidationSchema = yup.object().shape({
   website: yup.string().required("website or shop name is required"),
   phone: yup
      .number("Please enter a valid phone number")
      .required("Phone number is required")
      .test(
         "maxDigits",
         "Phone field must have 10 digits ",
         (number) => String(number).length >= 10
      ),
   //    color: yup.string().required("Color is required"),
   //    industry: yup.string().required("Industry is required"),
});
const MerchantCustomerSupport2 = ({ navigation, route }) => {
 
   const [dateOfBirth] = useState(route.params.dateOfBirth);
   const [firstName] = useState(route.params.firstName);
   const [lastName] = useState(route.params.lastName);
   const [address] = useState(route.params.address);
   const [country] = useState(route.params.country);
   const [email] = useState(route.params.email);
   const [ssn] = useState(route.params.ssn);
   const [individual] = useState(route.params.individual);
   const [business] = useState(route.params.business);
   const [ein] = useState(route.params.ein);
   const [organization] = useState(route.params.organization);
   const [representative] = useState(route.params.representative);




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
            initialValues={{
               industry: "",
               phone: "",
               website: "",
               color: "",
            }}
            onSubmit={(values) => {
               const { industry, phone, website, color } = values;
               navigation.navigate("Merchant Payout2", {
                  industry,
                  phone,
                  website,
                  color,
                  firstName,
                  lastName,
                  dateOfBirth,
                  address,
                  ssn,
                  email,
                  country,
                  individual,
                  organization,
                  ein,
                  representative,
                  business,

               });
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
               setFieldValue,
            }) => (
               <StyledFormArea>
                  <PageTitle style={styles.medium}>
                     Sign Up {organization}
                  </PageTitle>
                  <SubTitle style={styles.regular}>
                     Let's create your account
                  </SubTitle>
                  <View>
                     <Text>Select your Industry</Text>
                     <Fragment>
                        <View style={styles.picker}>
                           <Picker
                              selectedValue={values.industry}
                              onValueChange={handleChange("industry")}
                              onPress={() =>
                                 setFieldValue("industry", values.industry)
                              }
                           >
                              <Picker.Item
                                 label="Ecommerce"
                                 value="Ecommerce"
                              />
                              <Picker.Item label="Store" value="Store" />
                           </Picker>
                        </View>
                     </Fragment>
                     <MyTextInput
                        style={styles.regular}
                        label="Phone Number"
                        placeholder="+1 789 2547 544"
                        placeholderTextColor={darkLight}
                        keyboardType="numeric"
                        onChangeText={handleChange("phone")}
                        onBlur={handleBlur("phone")}
                        value={values.phone}
                        maxLength={10}
                        icon="device-mobile"
                     />
                     {errors.phone && touched.phone && (
                        <Text style={styles.errors}>{errors.phone}</Text>
                     )}
                     <MyTextInput
                        style={styles.regular}
                        label="Website"
                        placeholder="myshop.com or lauren's shop"
                        placeholderTextColor={darkLight}
                        // keyboardType="numeric"
                        onChangeText={handleChange("website")}
                        onBlur={handleBlur("website")}
                        value={values.website}
                        // maxLength={4}
                        icon="globe"
                     />

                     {errors.website && touched.website && (
                        <Text style={styles.errors}>{errors.website}</Text>
                     )}
                     <Text>Select you brand color</Text>
                     <Fragment>
                        <View style={styles.picker}>
                           <Picker
                              selectedValue={values.color}
                              onValueChange={handleChange("color")}
                              onPress={() =>
                                 setFieldValue("color", values.color)
                              }
                           >
                              <Picker.Item label="red" value="red" />
                              <Picker.Item label="blue" value="blue" />
                              <Picker.Item label="yellow" value="yellow" />
                              
                           </Picker>
                        </View>
                     </Fragment>
                  </View>
                  <MsgBox>...</MsgBox>
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

export default MerchantCustomerSupport2;

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
   picker: {
      borderWidth: 1,
      borderColor: "#a9a9a9",

      borderRadius: 5,
      fontSize: 16,
      height: 60,
      marginBottom: 10,
   },
});
