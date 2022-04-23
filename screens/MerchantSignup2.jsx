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
import MerchantSignup from "./MerchantSignup";
import { Fragment } from "react";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";

let loginValidationSchema = yup.object().shape({
   email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is required"),
   password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required")
      .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
   confirmPassword: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
   // country: yup.string().required("Country is required"),
   checkBox: yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});
const MerchantSignup2 = ({ navigation, route }) => {
   const [hidePassword, setHidePassword] = useState(true);
   const [dateOfBirth] = useState(route.params.dateOfBirth);
   const [firstName] = useState(route.params.firstName);
   const [lastName] = useState(route.params.lastName);
   const [address] = useState(route.params.address);
   const [ssn] = useState(route.params.ssn);

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
               email: "",
               password: "",
               confirmPassword: "",
               country: "United States",
               checkBox: false,
            }}
            onSubmit={(values) => {
               const { email, password, country } = values;

               auth
                  .createUserWithEmailAndPassword(email, password)
                  .then((authUser) => {
                     console.log(authUser);
                     authUser.user
                        .updateProfile({
                           displayName: firstName,
                           // photoURL:
                           //    imageUrl ||
                           //    "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                        })
                        .then(() => {
                           navigation.navigate("Merchant Signup Get Started", {
                              firstName,
                              lastName,
                              address,
                              dateOfBirth,
                              ssn,
                              email,
                              country,
                           });
                        });
                  })
                  .catch((error) => alert(error.message));
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
                  <PageTitle style={styles.medium}>Sign Up</PageTitle>
                  <SubTitle style={styles.regular}>
                     Let's create your account
                  </SubTitle>
                  <View>
                     <MyTextInput
                        style={styles.regular}
                        label="Email Address"
                        placeholder="eric@gmail.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        keyboardType="email-address"
                        icon="mail"
                     />

                     {errors.email && touched.email && (
                        <Text style={styles.errors}>{errors.email}</Text>
                     )}
                     <MyTextInput
                        label="Password"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        icon="lock"
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                     />
                     {errors.password && touched.password && (
                        <Text style={styles.errors}>{errors.password}</Text>
                     )}
                     <MyTextInput
                        label="Confirm Password"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        value={values.confirmPassword}
                        secureTextEntry={hidePassword}
                        icon="lock"
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                     />
                     {errors.confirmPassword && touched.confirmPassword && (
                        <Text style={styles.errors}>
                           {errors.confirmPassword}
                        </Text>
                     )}
                     <Text>Select your country</Text>
                     <Fragment>
                        <View style={styles.picker}>
                           <Picker
                              selectedValue={values.country}
                              onValueChange={handleChange("country")}
                              onPress={() =>
                                 setFieldValue("country", values.country)
                              }
                           >
                              <Picker.Item label="Ghana" value="Ghana" />
                              <Picker.Item
                                 label="United States"
                                 value="United States"
                              />
                           </Picker>
                        </View>
                     </Fragment>
                     <View style={{ flexDirection: "row", marginRight: 80 }}>
                        <View>
                           <CheckBox
                              containerStyle={styles.checkBoxContainer}
                              //   checkedIcon="check-box"
                              iconType="material"
                              checkedColor={brand}
                              uncheckedIcon="check-box-outline-blank"
                              checkedIcon="check-box"
                              checked={values.checkBox}
                              onPress={() =>
                                 setFieldValue("checkBox", !values.checkBox)
                              }
                           />
                        </View>
                        {/* <Text>Is CheckBox selected: {isSelected ?  "red" : "👎"}</Text> */}
                        <View>
                           <Text>
                              I agree, on behalf on my company, to the{" "}
                              <Text
                                 style={{
                                    color: "#0667d0",
                                    fontFamily: "AthleticsRegular",
                                 }}
                                 onPress={() =>
                                    Linking.openURL("https://roodev19.web.app/")
                                 }
                              >
                                 Halfcard for Business Terms and Conditions,
                              </Text>
                              <Text> and I agree to Halfcard's </Text>
                              <Text
                                 style={{
                                    color: "#0667d0",
                                    fontFamily: "AthleticsRegular",
                                 }}
                                 onPress={() =>
                                    Linking.openURL("https://roodev19.web.app/")
                                 }
                              >
                                 Terms of Use
                              </Text>
                              <Text> and </Text>
                              <Text
                                 style={{
                                    color: "#0667d0",
                                    fontFamily: "AthleticsRegular",
                                 }}
                                 onPress={() =>
                                    Linking.openURL("https://roodev19.web.app/")
                                 }
                              >
                                 Privacy Policy.
                              </Text>
                           </Text>
                        </View>
                     </View>
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

export default MerchantSignup2;

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
