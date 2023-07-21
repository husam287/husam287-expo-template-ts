import { yupResolver } from "@hookform/resolvers/yup";
import * as YUP from "yup";
import i18n from "@/i18n";

const phoneRegex = /^01[0125][0-9]{8}$/gm;

const phoneValidation = YUP.string()
  .required(`${i18n.t("PHONE")} ${i18n.t("REQUIRED")}`)
  .matches(phoneRegex, i18n.t("WRONG_PHONE_FORMATE"));

export const loginSchema = yupResolver(
  YUP.object().shape({
    email: YUP.string()
      .email()
      .required(`${i18n.t("EMAIL")} ${i18n.t("REQUIRED")}`),
    password: YUP.string().required(
      `${i18n.t("PASSWORD")} ${i18n.t("REQUIRED")}`
    ),
  })
);

export const signupSchema = yupResolver(
  YUP.object().shape({
    phone: phoneValidation,
    email: YUP.string()
      .email()
      .required(`${i18n.t("EMAIL")} ${i18n.t("REQUIRED")}`),
    password: YUP.string().required(
      `${i18n.t("PASSWORD")} ${i18n.t("REQUIRED")}`
    ),
    confirm_password: YUP.string()
      .required(`${i18n.t("PASSWORD")} ${i18n.t("REQUIRED")}`)
      .oneOf([YUP.ref("password")], i18n.t("PASSWORD_DONT_MATCH")),
  })
);

export const testSchema = yupResolver(
  YUP.object().shape({
    name: YUP.string().required(`${i18n.t("NAME")} ${i18n.t("REQUIRED")}`),
    email: YUP.string()
      .email()
      .required(`${i18n.t("EMAIL")} ${i18n.t("REQUIRED")}`),
    bio: YUP.string().required(`${i18n.t("BIO")} ${i18n.t("REQUIRED")}`),
    gender: YUP.string().required(`${i18n.t("GENDER")} ${i18n.t("REQUIRED")}`),
  })
);
