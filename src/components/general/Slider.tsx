import { Animated, StyleSheet, View } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import METRICS from "@/constants/Metrics";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import LoadingComponent from "./LoadingComponent";
import SliderProps from "../@types/SliderProps";

const WIDTH = METRICS.screenWidth;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row-reverse",
    top: 0,
  },
  dotStyle: {
    borderRadius: 16,
    height: 8,
    marginHorizontal: 5,
    width: 18,
  },
  spaceBottom: {
    paddingBottom: 15,
  },
});

export default function Slider({
  data,
  renderItem = () => {},
  dotColor = COLORS.secondary,
  dotBackground = COLORS.primary,
  isLoading,
  width = WIDTH - METRICS.generalSpacingValue * 2,
  height = WIDTH / 2,
  isParallelX = false,
  autoPlay = false,
  loopDisabled = false,
}: SliderProps) {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;

  if (!data) return null;

  const inputRange = [0, data.length];

  const outputRange = [0, data.length * WIDTH];

  const scrollX = scrollOffsetAnimatedValue.interpolate({
    inputRange,
    outputRange,
  });

  const hasLengthAndMoreThan1 = !!data?.length && data?.length > 1;

  return !isLoading ? (
    <View style={styles.spaceBottom}>
      <Carousel
        loop={!loopDisabled && hasLengthAndMoreThan1}
        width={width}
        height={height}
        autoPlay={autoPlay}
        autoPlayInterval={5000}
        data={data}
        scrollAnimationDuration={500}
        onProgressChange={(_, absoluteProgress) =>
          scrollOffsetAnimatedValue.setValue(absoluteProgress)
        }
        renderItem={renderItem}
        mode={isParallelX ? "parallax" : undefined}
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: 110,
        }}
      />

      {hasLengthAndMoreThan1 && (
        <View style={[GLOBAL_STYLES.row, GLOBAL_STYLES.vhCentering]}>
          <ExpandingDot
            data={data}
            expandingDotWidth={38}
            scrollX={scrollX as Animated.Value}
            inActiveDotOpacity={0.17}
            activeDotColor={dotColor}
            inActiveDotColor={dotBackground}
            dotStyle={styles.dotStyle}
            containerStyle={styles.dotContainer}
          />
        </View>
      )}
    </View>
  ) : (
    <View style={[GLOBAL_STYLES.fullSize, GLOBAL_STYLES.vhCentering]}>
      <LoadingComponent />
    </View>
  );
}
