import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "@/components/TabIcon";
import aliensImage from "../../assets/images/marsieciai.png";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "grey", height: 84 },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={aliensImage} name="Home" />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} source={aliensImage} name="Create" />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
