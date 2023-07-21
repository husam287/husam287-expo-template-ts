import { ReactNode } from "react";
import ReactNativeModal from "react-native-modal";
import SnackbarComponent from "../general/SnackbarComponent";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <>
      {children}

      {/* GENERAL MODALS */}
      <SnackbarComponent />
      <ReactNativeModal>
        <SnackbarComponent />
      </ReactNativeModal>
    </>
  );
}
