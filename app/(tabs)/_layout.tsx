import { Tabs } from "expo-router";
import NavigationHeader from "@/components/general/navigation/Header";
import NavigationTab from "@/components/general/navigation/Tab";
import METRICS from "@/constants/Metrics";
import COLORS from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { NavigationTabProps } from "@/components/@types/NavigationTabProps";

const TABWIDTH = METRICS.screenWidth / 5;

function HomeTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title={"HOME"}
      iconComponent={<AntDesign name="home" size={24} color={COLORS.primary} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function CategoryTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title={"CATEGORIES"}
      iconComponent={<AntDesign name="book" size={24} color={COLORS.primary} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function OfferTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title={"OFFERS"}
      iconComponent={
        <AntDesign name="calculator" size={24} color={COLORS.primary} />
      }
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function CartTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title={"CART"}
      iconComponent={<AntDesign name="car" size={24} color={COLORS.primary} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function ProfileTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title={"PROFILE"}
      iconComponent={<AntDesign name="user" size={24} color={COLORS.primary} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={(props) => ({
        header: ({ route }) => (
          <NavigationHeader
            // @ts-ignore
            title={route.params?.title}
            hasBackArrow={false}
          />
        ),
        tabBarShowLabel: false,
        tabBarStyle: {
          height: METRICS.bottomTabsHeight,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        initialParams={{ title: "Home" }}
        options={{
          tabBarIcon: HomeTabBarElement,
        }}
      />

      <Tabs.Screen
        name="category"
        initialParams={{ title: "Categories" }}
        options={{
          tabBarIcon: CategoryTabBarElement,
        }}
      />

      <Tabs.Screen
        name="offer"
        initialParams={{ title: "Offers" }}
        options={{
          tabBarIcon: OfferTabBarElement,
        }}
      />

      <Tabs.Screen
        name="cart"
        initialParams={{ title: "Cart" }}
        options={{
          tabBarIcon: CartTabBarElement,
        }}
      />

      <Tabs.Screen
        name="profile"
        initialParams={{ title: "Profile" }}
        options={{
          tabBarIcon: ProfileTabBarElement,
        }}
      />
    </Tabs>
  );
}
