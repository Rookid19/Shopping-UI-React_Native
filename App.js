import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./screens/Register";
import GetStarted from "./screens/GetStarted";
import Phone from "./screens/Phone";
import VerifyPhone from "./screens/VerifyPhone";
import PersonalDetails from "./screens/PersonalDetails";
import UserDashboard from "./screens/UserDashboard";
import Login from "./screens/Login";
import ResetPassword from "./screens/ResetPassword";
import PasswordConfirmation from "./screens/PasswordConfirmation";
import Profile from "./screens/Profile";
import MakePayments from "./screens/MakePayments";
import About from "./screens/About";
import LinkDebitCard from "./screens/LinkDebitCard";
import AddPaymentMethod from "./screens/AddPaymentMethod";
import AccountType from "./screens/AccountType";
import MerchantDashboard from "./screens/MerchantDashboard";
import WidthrawalCash from "./screens/WidthrawalCash";
import MerchantGetStarted from "./screens/MerchantGetStarted";
import MerchantSignup from "./screens/MerchantSignup";
import MerchantSignupGetStarted from "./screens/MerchantSignupGetStarted";
import MerchantPersonalDetails from "./screens/MerchantPersonalDetails";
import MerchantCustomerSupport from "./screens/MerchantCustomerSupport";
import MerchantPayout from "./screens/MerchantPayout";
import MerchantPayout2 from "./screens/MerchantPayout2";
import MerchantFinal from "./screens/MerchantFinal";
import MerchantMobileVerification from "./screens/MerchantMobileVerification";
import MerchantDashboard2 from "./screens/MerechantDashboard2";
import MerchantCheckout from "./screens/MerchantCheckout";
import Email from "./screens/Email";
import UserFinal from "./screens/UserFinal";
import UserDashboard2 from "./screens/UserDashboard2";
import BusinessAccount from "./screens/BusinessAccount";
import MerchantSignup2 from "./screens/MerchantSignup2";
import MerchantPersonalDetails2 from "./screens/MerchantPersonalDetails2";
import MerchantCustomerSupport2 from "./screens/MerchantCustomerSupport2";
import BusinessAccount2 from "./screens/BusinessAccount2";
import MerchantLogin from "./screens/MerchantLogin";
import Trial from "./screens/Trial";
import Products from "./screens/Products";
import ImagePickerExample from "./screens/ImagePickerExample";
import CreateItem from "./screens/CreateItem";
import BarcodeScanner from "./screens/BarcodeScanner";
import QrCode from "./screens/QrCode";
import Products2 from "./screens/Products2";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createStackNavigator();
const globalScreenOptions = {
   headerStyle: { backgroundColor: "#0667d0" },
   headerTitleStyle: {
      color: "black",
      textAlign: "center",
   },
   headerTintColor: "black", //changes any icon color in the header to white
   headerTransparent: true,
};

export default function App() {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={globalScreenOptions}
               // initialRouteName="Merchant Dashboard2"
            >
               <Stack.Screen
                  name="Halfcard"
                  options={{ headerShown: false }}
                  component={GetStarted}
               />

               <Stack.Screen name="Phone" component={Phone} />

               <Stack.Screen name="Verify Phone" component={VerifyPhone} />
               <Stack.Screen
                  name="Personal Details"
                  component={PersonalDetails}
               />
               <Stack.Screen name="Email" component={Email} />
               <Stack.Screen
                  name="User Final"
                  options={{ headerShown: false }}
                  component={UserFinal}
               />
               <Stack.Screen
                  name="User Dashboard"
                  component={UserDashboard}
                  options={{ headerShown: false }}
               />
               <Stack.Screen
                  name="User Dashboard2"
                  component={UserDashboard2}
                  options={{ headerShown: false }}
               />
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Reset Password" component={ResetPassword} />
               <Stack.Screen
                  name="Password Confirmation"
                  component={PasswordConfirmation}
               />
               <Stack.Screen name="Profile" component={Profile} />
               <Stack.Screen
                  name="Make Payments"
                  component={MakePayments}
                  options={{ headerTransparent: false }}
               />
               <Stack.Screen name="About" component={About} />
               <Stack.Screen
                  name="Link Debit Card"
                  component={LinkDebitCard}
                  options={{ headerTransparent: false }}
               />
               <Stack.Screen
                  options={{ headerTransparent: false }}
                  name="Add Payment Method"
                  component={AddPaymentMethod}
               />
               <Stack.Screen
                  name="Account Type"
                  component={AccountType}
                  // options={{ headerTransparent: true }}
               />
               <Stack.Screen
                  name="Merchant Signup2"
                  component={MerchantSignup2}
               />

               <Stack.Screen
                  // options={{ headerTransparent: true }}
                  name="Merchant Dashboard"
                  component={MerchantDashboard}
               />
               <Stack.Screen
                  name="Withdrawal Cash"
                  component={WidthrawalCash}
               />
               <Stack.Screen
                  name="Merchant GetStarted"
                  component={MerchantGetStarted}
               />
               <Stack.Screen
                  name="Merchant Signup"
                  component={MerchantSignup}
               />

               <Stack.Screen
                  name="Merchant Signup Get Started"
                  component={MerchantSignupGetStarted}
               />
               <Stack.Screen
                  name="Merchant Personal Details"
                  component={MerchantPersonalDetails}
               />
               <Stack.Screen
                  name="Merchant Personal Details2"
                  component={MerchantPersonalDetails2}
               />
               <Stack.Screen
                  name="Merchant Customer Support"
                  component={MerchantCustomerSupport}
               />
               <Stack.Screen
                  name="Merchant Customer Support2"
                  component={MerchantCustomerSupport2}
               />
               {/* <Stack.Screen name="Merchant Payout" component={MerchantPayout} /> */}
               <Stack.Screen
                  name="Merchant Payout2"
                  component={MerchantPayout2}
               />

               <Stack.Screen name="Merchant Final" component={MerchantFinal} />
               <Stack.Screen
                  name="Merchant Mobile Verification"
                  component={MerchantMobileVerification}
               />
               <Stack.Screen
                  name="Merchant Dashboard2"
                  component={MerchantDashboard2}
               />
               <Stack.Screen
                  name="Merchant Checkout"
                  component={MerchantCheckout}
               />
               <Stack.Screen
                  name="Business Account"
                  component={BusinessAccount}
               />
               <Stack.Screen
                  name="Business Account2"
                  component={BusinessAccount2}
               />
               <Stack.Screen name="Merchant Login" component={MerchantLogin} />

               <Stack.Screen
                  name="Image Picker Example"
                  component={ImagePickerExample}
               />
               <Stack.Screen name="Trial" component={Trial} />
               <Stack.Screen name="Products" component={Products} />
               <Stack.Screen name="Create Item" component={CreateItem} />
               <Stack.Screen
                  name="Barcode Scanner"
                  component={BarcodeScanner}
               />
               <Stack.Screen name="QR Code" component={QrCode} />
               <Stack.Screen name="Products2" component={Products2} />
            </Stack.Navigator>
         </NavigationContainer>
      </Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
