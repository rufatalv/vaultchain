import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

const TabsIndex = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl mb-8 text-center">Welcome to VaultChain</Text>
      <Text className="text-gray-600 mb-8 text-center px-6">
        Your secure digital asset management platform
      </Text>

      <View className="w-full px-6 space-y-4">
        <Pressable
          onPress={() => router.push("/home")}
          className="bg-blue-500 px-6 py-4 rounded-lg"
        >
          <Text className="text-white font-semibold text-center">
            Go to Home
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/assets")}
          className="bg-green-500 px-6 py-4 rounded-lg"
        >
          <Text className="text-white font-semibold text-center">
            View Assets
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TabsIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
