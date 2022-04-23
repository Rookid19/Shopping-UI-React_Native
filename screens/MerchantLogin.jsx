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
});

const MerchantLogin = ({ navigation }) => {
   // const [email, setEmail] = useState("");
   // const [password, setPassword] = useState("");
   const [hidePassword, setHidePassword] = useState(true);

   useLayoutEffect(() => {
      navigation.setOptions({
         title: "",
         headerStyle: { backgroundColor: "white" },
         headerTitleStyle: { color: "black", textAlign: "center" },
         headerTintColor: "black",
      });
   });

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            console.log(authUser);
            navigation.replace("Merchant Dashboard2");
         }
      });
      return unsubscribe;
   }, [navigation]);

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
         <InnerContainer>
            <PageTitle style={styles.medium}>Welcome back</PageTitle>
            <SubTitle style={styles.regular}>Log in to continue</SubTitle>

            <Formik
               initialValues={{ email: "", password: "" }}
               onSubmit={(values) => {
                  const { email, password } = values;
                  auth
                     .signInWithEmailAndPassword(email, password)
                     // we didnt write any promise after the email and password because is a listener in the useEffect called unsubscribe
                     .catch((error) => alert(error.message));
                  // alert(password);
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
                     </View>
                     <MsgBox>...</MsgBox>

                     <StyledButton
                        onPress={handleSubmit}
                        disabled={!isValid}
                        style={{
                           shadowColor: "#00acee",
                           backgroundColor: !isValid ? "#CACFD2" : "#0667d0",
                        }}
                     >
                        <ButtonText style={styles.regular}>Login</ButtonText>
                     </StyledButton>
                     <Line />

                     <ExtraView>
                        <ExtraText style={styles.regular}>
                           Don't have an account already?{" "}
                        </ExtraText>
                        <TextLink onPress={() => navigation.navigate("Phone")}>
                           <TextLinkContent style={styles.regular}>
                              Signup
                           </TextLinkContent>
                        </TextLink>
                     </ExtraView>
                     <ExtraView>
                        <TextLink
                           onPress={() => navigation.navigate("Reset Password")}
                        >
                           <TextLinkContent style={styles.regular}>
                              Forgot Password ?
                           </TextLinkContent>
                        </TextLink>
                     </ExtraView>
                  </StyledFormArea>
               )}
            </Formik>
         </InnerContainer>
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

export default MerchantLogin;

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
