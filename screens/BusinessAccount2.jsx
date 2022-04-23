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

let loginValidationSchema = yup.object().shape({
   organization: yup.string().required("Organization is required"),
   representative: yup.string().required("EIN is required"),

   ein: yup
      .number("Please enter a valid EIN")
      .required("Employee Identification number is required")
      .test(
         "maxDigits",
         "Phone field must have 4 digits ",
         (number) => String(number).length >= 4
      ),
});
const BusinessAccount2 = ({ navigation, route }) => {
   const [dateOfBirth] = useState(route.params.dateOfBirth);
   const [firstName] = useState(route.params.firstName);
   const [lastName] = useState(route.params.lastName);
   const [address] = useState(route.params.address);
   const [country] = useState(route.params.country);
   const [email] = useState(route.params.email);
   const [ssn] = useState(route.params.ssn);
   const [business] = useState(route.params.business);
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
      <StyledContainer>
         <StatusBar style="dark" />
         <Formik
            initialValues={{
               organization: "",
               ein: "",
               representative: "",
            }}
            onSubmit={(values) => {
               const { organization, ein, representative } = values;

               navigation.navigate("Merchant Customer Support2", {
                  organization,
                  ein,
                  representative,
                  firstName,
                  lastName,
                  dateOfBirth,
                  address,
                  ssn,
                  email,
                  country,
                  business,
               });
            }}
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
               setFieldTouched,
            }) => (
               <StyledFormArea>
                  <PageTitle style={styles.medium}>Sign Up</PageTitle>
                  <SubTitle style={styles.regular}>
                     Let's create your account
                  </SubTitle>
                  <SubTitle style={styles.regular}>
                     Tell us a little bit about yourself
                  </SubTitle>
                  <View>
                     <MyTextInput
                        style={styles.regular}
                        label="Organization"
                        placeholder="Name of organization"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("organization")}
                        onBlur={handleBlur("organization")}
                        value={values.organization}
                        maxLength={20}
                        icon="person"
                     />
                     {errors.organization && touched.organization && (
                        <Text style={styles.errors}>{errors.organization}</Text>
                     )}

                     <MyTextInput
                        style={styles.regular}
                        label="Employer Identification Number (EN)"
                        placeholder="9 digits"
                        placeholderTextColor={darkLight}
                        keyboardType="numeric"
                        onChangeText={handleChange("ein")}
                        onBlur={handleBlur("ein")}
                        value={values.ein}
                        maxLength={4}
                        icon="device-mobile"
                     />
                     {errors.ein && touched.ein && (
                        <Text style={styles.errors}>{errors.ein}</Text>
                     )}

                     <MyTextInput
                        style={styles.regular}
                        label="Business Representative"
                        placeholder="CEO, Manager, Partner, etc"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("representative")}
                        onBlur={handleBlur("representative")}
                        value={values.representative}
                        maxLength={20}
                        icon="person"
                     />
                     {errors.representative && touched.representative && (
                        <Text style={styles.errors}>
                           {errors.representative}
                        </Text>
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
   isDate,
   showDatePicker,
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
      </View>
   );
};

export default BusinessAccount2;

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
