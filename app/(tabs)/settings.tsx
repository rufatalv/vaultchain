import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { useAuth } from "../../components/AuthContext";

const Settings = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-8">
        <Text className="text-3xl font-bold mb-8">Settings</Text>

        <View className="space-y-4">
          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-2">Account</Text>
            <Text className="text-gray-600">Manage your account settings</Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-2">Security</Text>
            <Text className="text-gray-600">
              Update your security preferences
            </Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-2">Notifications</Text>
            <Text className="text-gray-600">
              Configure notification settings
            </Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold mb-2">About</Text>
            <Text className="text-gray-600">App version and information</Text>
          </View>
        </View>

        <View className="mt-8">
          <Pressable
            onPress={handleLogout}
            className="bg-red-500 px-6 py-4 rounded-lg"
          >
            <Text className="text-white font-semibold text-center">Logout</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
