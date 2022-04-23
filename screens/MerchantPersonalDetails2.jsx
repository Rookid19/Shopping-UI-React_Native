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

import DateTimePicker from "@react-native-community/datetimepicker";

// icon
import { Octicons, Fontisto, Ionicons } from "@expo/vector-icons";
import MerchantSignup from "./MerchantSignup";
import { Fragment } from "react";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

let loginValidationSchema = yup.object().shape({
   firstName: yup.string().required("Legal first name is required"),
   lastName: yup.string().required("Legal last name is required"),
   // dateOfBirth: yup.string().required("Date of birth is required"),
   address: yup.string().required("Address is required"),
   ssn: yup
      .number("Please enter a valid phone number")
      .required("SSN is required")
      .test(
         "maxDigits",
         "Phone field must have 4 digits ",
         (number) => String(number).length >= 4
      ),
});
const MerchantPersonalDetails = ({ navigation, route }) => {
   const [hidePassword, setHidePassword] = useState(true);
   // Actual value to be sent
   const [dob, setDob] = useState();
   const [show, setShow] = useState(false);
   const [date, setDate] = useState(new Date(2000, 0, 1));

   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      setDob(currentDate);
   };

   const showDatePicker = () => {
      setShow("date");
   };

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
         {show && (
            <DateTimePicker
               testID="dateTimePicker"
               value={date}
               mode="date"
               is24Hour={true}
               display="default"
               onChange={onChange}
               style={{
                  backgroundColor: "yellow",
               }}
            />
         )}
         <Formik
            initialValues={{
               firstName: "",
               lastName: "",
               dateOfBirth: "",
               address: "",
               ssn: "",
            }}
            onSubmit={(values) => {
               //    const { email, password, dateOfBirth: dob } = values;
               values = {...values, dateOfBirth: dob };
               const { firstName, lastName, dateOfBirth, address, ssn } =
                  values;
               // console.log(dateOfBirth);
               ;
               navigation.navigate("Merchant Signup2", {
                  firstName,
                  lastName,
                  dateOfBirth,
                  address,
                  ssn,
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
                        label="Legal First Name"
                        placeholder="John"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("firstName")}
                        onBlur={handleBlur("firstName")}
                        value={values.firstName}
                        maxLength={20}
                        icon="person"
                     />
                     {errors.firstName && touched.firstName && (
                        <Text style={styles.errors}>{errors.firstName}</Text>
                     )}
                     <MyTextInput
                        style={styles.regular}
                        label="Legal Last Name"
                        placeholder="Doe"
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
                     <MyTextInput
                        label="Date of Birth"
                        placeholder="Date of birth (MM/DD/YY)"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("dateOfBirth")}
                        onBlur={handleBlur("dateOfBirth")}
                        value={dob ? dob.toDateString() : ""}
                        // value={values.dateOfBirth}
                        icon="calendar"
                        editable={false}
                        isDate={true}
                        showDatePicker={showDatePicker}
                     />
                     {/* {errors.dateOfBirth && touched.dateOfBirth && (
                        <Text style={styles.errors}>{errors.dateOfBirth}</Text>
                     )} */}
                     <Text>Address</Text>
                     <GooglePlacesAutocomplete
                        styles={{
                           container: {
                              flex: 0,
                              borderWidth: 1,
                              borderColor: "#a9a9a9",
                              borderRadius: 5,
                              fontSize: 16,
                              //   height: 60,
                              marginBottom: 10,
                           },
                           textInput: {
                              fontSize: 14,
                           },
                        }}
                        query={{
                           key: "AIzaSyBMF1byRguGpEy6bWq-d_GzZzfOT4MAwVk",
                           language: "en",
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        placeholder="  Search your location"
                        onPress={(data, details = null) =>
                           setFieldValue("address", data.description)
                        }
                        // value={values.address}
                        // onChangeText={handleChange("address")}
                        // onBlur={handleBlur("address")}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        enablePoweredByContainer={false}
                        minLength={2}
                     />
                     {errors.address && touched.address && (
                        <Text style={styles.errors}>{errors.address}</Text>
                     )}
                     <MyTextInput
                        style={styles.regular}
                        label="Last 4 digits of SSN"
                        placeholder="1234"
                        placeholderTextColor={darkLight}
                        keyboardType="numeric"
                        onChangeText={handleChange("ssn")}
                        onBlur={handleBlur("ssn")}
                        value={values.ssn}
                        maxLength={4}
                        icon="device-mobile"
                     />
                     {errors.ssn && touched.ssn && (
                        <Text style={styles.errors}>{errors.ssn}</Text>
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

         {/* <StyledTextInput {...props} /> */}

         {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
               <StyledTextInput {...props} />
            </TouchableOpacity>
         )}
         {!isDate && <StyledTextInput {...props} />}

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

export default MerchantPersonalDetails;

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
