import { Image, StyleSheet, View } from "react-native";
import { useState } from "react";
import LoadingComponent from "./LoadingComponent";
import { ImgProps } from "../@types/ImgProps";

const styles = StyleSheet.create({
  loadingFullContainer: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
});

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
