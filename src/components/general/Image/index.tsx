import { View } from "react-native";
import { useState } from "react";
import { Image } from "expo-image";
import LoadingComponent from "@/components/general/LoadingComponent";
import { ImgProps } from "./types";
import styles from "./styles";

function Img({ containerStyle, style, ...otherProps }: ImgProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={containerStyle}>
      <Image
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        style={style}
        {...otherProps}
      />
      {isLoading && (
        <View style={[styles.loadingFullContainer, style]}>
          <LoadingComponent />
        </View>
      )}
    </View>
  );
}

export default Img;
