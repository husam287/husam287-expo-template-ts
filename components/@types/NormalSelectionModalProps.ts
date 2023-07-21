import { ViewStyle } from "react-native";

interface SelectionItem {
  label: string;
  value: string | number;
}

export interface NormalSelectionModalProps {
  data: SelectionItem[];
  onChange: Function;
  inputValue: string | number;
  InputLabel?: string;
  InputPlaceholder?: string;
  error?: string;
  containerStyle?: ViewStyle;
  customInputStyle?: ViewStyle;
  isLoading?: boolean;
  prefix?: JSX.Element;
  emptyPlaceholder?: string;
}
