import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";
import DebouncedSearchField from "@/components/general/inputs/DebouncedSearchField";
import DateTimeSelection from "@/components/general/inputs/DateTimeSelection";
import styles from "./styles";

export default function CartScreen() {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Tab Two</Text>
      <DebouncedSearchField onSearchChange={(e) => console.log(e)} />

      <DateTimeSelection />
    </ScreenWrapper>
  );
}
