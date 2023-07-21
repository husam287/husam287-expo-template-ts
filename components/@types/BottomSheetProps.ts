import { ReactNode } from "react";

export interface BottomSheetProps {
  isVisible: boolean;
  setVisible: Function;
  children: ReactNode;
  draggable?: boolean;
  isCloseButtonHidden?: boolean;
}
