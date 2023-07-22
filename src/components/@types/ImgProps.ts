import { ImageProps } from "expo-image";
import { ViewStyle } from "react-native";

export interface ImgProps extends ImageProps {
  containerStyle?: ViewStyle;
}
