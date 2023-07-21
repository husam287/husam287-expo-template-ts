import { Action, isRejectedWithValue } from "@reduxjs/toolkit";
import HandleErrors from "@/utils/handleErrors";

type NextFunction = (action: Action) => void;

const rtkQueryErrorLogger = () => (next: NextFunction) => (action: Action) => {
  if (isRejectedWithValue(action)) {
    // @ts-ignore
    HandleErrors(action?.payload?.data);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
