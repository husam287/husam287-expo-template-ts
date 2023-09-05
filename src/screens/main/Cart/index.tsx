import ScreenWrapper from "@/components/general/ScreenWrapper";
import Text from "@/components/general/Text";
import DebouncedSearchField from "@/components/inputs/DebouncedSearchField";
import DateTimeSelection from "@/components/inputs/DateTimeSelection";
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
