import HandleErrors from "@/utils/handleErrors";
import { isRejectedWithValue } from "@reduxjs/toolkit";

const rtkQueryErrorLogger = () => (next: Function) => (action: any) => {
  if (isRejectedWithValue(action)) {
    HandleErrors(action?.payload?.data);
  }

  return next(action);
};

export default rtkQueryErrorLogger;
