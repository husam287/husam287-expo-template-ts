import { ScrollView } from "react-native";
import { ScrollViewWithoutBarProps } from "../@types/ScrollViewWithoutBarProps";

export default function ScrollViewWithoutBar({
  children,
  ...otherProps
}: ScrollViewWithoutBarProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} {...otherProps}>
      {children}
    </ScrollView>
  );
}
