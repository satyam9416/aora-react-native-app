import React from "react";
import { Slot, Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{ title: "Home", headerShown: false }}
        />
        <Tabs.Screen name="create" options={{ title: "Create" }} />
        <Tabs.Screen name="bookmark" options={{ title: "Bookmarks" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </>
  );
};

export default TabsLayout;
