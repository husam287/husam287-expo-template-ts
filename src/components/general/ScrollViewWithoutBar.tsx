import { ScrollView, ScrollViewProps } from "react-native";
import { ReactNode } from "react";

interface ScrollViewWithoutBarProps extends ScrollViewProps {
  children: ReactNode;
}

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
