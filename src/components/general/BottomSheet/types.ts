import { ReactNode } from "react";

export interface BottomSheetProps {
  isVisible: boolean;
  setVisible: (state: boolean) => void;
  children: ReactNode;
  draggable?: boolean;
  isCloseButtonHidden?: boolean;
}
