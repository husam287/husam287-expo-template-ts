export interface DateTimeSelectionProps {
  onChange?: (e?: string) => void;
  placeholder?: string;
  minDate?: string;
  mode?: "calendar" | "time" | "datepicker";
  value?: string;
  error?: string;
}
