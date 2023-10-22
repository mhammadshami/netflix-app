import { StyleSheet, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./StackNavigator";
import { StripeProvider } from "@stripe/stripe-react-native";
import { ProfileContext } from "./Context";

const App = () => {
  return (
    <>
      <ProfileContext>
        <StripeProvider publishableKey="pk_test_uvATloDWGDdrf9AaI0v6VmBM00ZiiIUNTw">
          <StatusBar style="light" />
          <StackNavigator />
        </StripeProvider>
      </ProfileContext>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
