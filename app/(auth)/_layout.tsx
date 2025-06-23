import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router, Tabs, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/AuthHeader";

const AuthLayout = () => {
  return (
    <SafeAreaView className="px-6 h-full gap-6 bg-white">
      <Tabs
        screenOptions={{
          animation: "fade",
          headerShown: false,
          tabBarStyle: {
            display: "none",
            backgroundColor: "#fff",
          },
        }}
      >
        <Tabs.Screen name="login" />
        <Tabs.Screen name="otp" />
        <Tabs.Screen name="register" />
      </Tabs>
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
