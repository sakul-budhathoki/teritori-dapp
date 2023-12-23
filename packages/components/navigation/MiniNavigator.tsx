import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { TabBarIcon } from "./components/TabBarIcon";
import { HomeScreen } from "../../screens/Home/HomeScreen";
import { MiniChatScreen } from "../../screens/Mini/Chat/MiniChatScreen";
import { RootStackParamList } from "../../utils/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const screenTitle = (title: string) => "Teritori - " + title;

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          return <TabBarIcon {...props} title={route.name} />;
        },
      })}
    >
      <Tab.Screen
        name="Chats"
        options={{ header: () => null, title: screenTitle("Home") }}
        component={MiniChatScreen}
      />
    </Tab.Navigator>
  );
};

export const MiniNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Tabs"
        options={{ header: () => null }}
        component={() => <MainTab />}
      />
    </Stack.Navigator>
  );
};
