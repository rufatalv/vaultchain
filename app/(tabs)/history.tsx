import { View, Text, ScrollView } from "react-native";
import React from "react";

const History = () => {
  const transactions = [
    {
      type: "Buy",
      asset: "Bitcoin",
      amount: "0.5 BTC",
      value: "$4,125.00",
      date: "2024-01-15",
      status: "Completed",
    },
    {
      type: "Sell",
      asset: "Ethereum",
      amount: "2.0 ETH",
      value: "$3,200.00",
      date: "2024-01-14",
      status: "Completed",
    },
    {
      type: "Swap",
      asset: "ADA → ETH",
      amount: "1000 ADA",
      value: "$1,000.00",
      date: "2024-01-13",
      status: "Completed",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-8">
        <Text className="text-3xl font-bold mb-6">Transaction History</Text>

        <View className="space-y-4">
          {transactions.map((tx, index) => (
            <View key={index} className="bg-gray-50 p-4 rounded-lg">
              <View className="flex-row justify-between items-start mb-2">
                <Text className="text-lg font-semibold">{tx.type}</Text>
                <Text
                  className={
                    tx.type === "Buy"
                      ? "text-green-600"
                      : tx.type === "Sell"
                        ? "text-red-600"
                        : "text-blue-600"
                  }
                >
                  {tx.type}
                </Text>
              </View>

              <Text className="text-gray-600 mb-1">{tx.asset}</Text>
              <Text className="text-sm text-gray-500 mb-2">
                {tx.amount} • {tx.value}
              </Text>

              <View className="flex-row justify-between items-center">
                <Text className="text-sm text-gray-500">{tx.date}</Text>
                <Text className="text-sm text-green-600">{tx.status}</Text>
              </View>
            </View>
          ))}
        </View>

        {transactions.length === 0 && (
          <View className="flex-1 justify-center items-center py-12">
            <Text className="text-gray-500 text-center">
              No transactions yet
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default History;
