import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import i18n from "@/i18n";
import Img from "@/components/general/Image";
import Slider from "@/components/general/Slider";
import Button from "@/components/general/Button";
import ScrollViewWithoutBar from "@/components/general/ScrollViewWithoutBar";
import METRICS from "@/constants/Metrics";
import styles from "./styles";
import getShadowStyle from "@/utils/getShadowStyle";
import Text from "@/components/general/Text";
import {
  WelcomeScreenSliderData,
  welcomeScreenSliderData,
} from "@/data/welcomeScreenSliderData";

const SLIDER_HEIGHT = METRICS.screenHeight * 0.37 + 140;

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const onClickLoginButton = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <ScreenWrapper isHeaderHidden hasNoHorizontalSpacing>
      <ScrollViewWithoutBar>
        <View style={GLOBAL_STYLES.mainContainer}>
          <View>
            <Slider
              data={welcomeScreenSliderData}
              height={SLIDER_HEIGHT}
              loopDisabled
              renderItem={({ item }: { item: WelcomeScreenSliderData }) => (
                <View>
                  <Img
                    source={{ uri: item?.picture }}
                    contentFit="contain"
                    style={styles.coverImage}
                  />
                  <Text numberOfLines={1} style={styles.paragraphTitle}>
                    {item?.title}
                  </Text>
                  <Text numberOfLines={3} style={styles.paragraphDescription}>
                    {item?.description}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>

        {/* BUTTONS GROUPS */}
        <View style={[getShadowStyle(), styles.buttonsBox]}>
          <Button
            onPress={onClickLoginButton}
            title={i18n.t("LOGIN")}
            IconName="login"
          />
        </View>
      </ScrollViewWithoutBar>
    </ScreenWrapper>
  );
}
