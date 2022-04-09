import Home from "../screens/Home";
import Espace from "../screens/Space";
import Trails from "../screens/Trails";
import Workshop from "../screens/Workshop";
import Communaute from "../screens/Communaute";
import TabBarComponent from "../components/TabBarComponent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBarComponent {...props} />}
    >
      <Tab.Screen
        options={{ tabBarLabel: "Acceuil", title: "Acceuil" }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Mon Espace", title: "Mon Espace" }}
        name="Espace"
        component={Espace}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Trails", title: "Trails" }}
        name="Trails"
        component={Trails}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Workshop", title: "Workshop" }}
        name="Workshop"
        component={Workshop}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Communauté", title: "Communauté" }}
        name="Communaute"
        component={Communaute}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
