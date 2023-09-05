import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import ControllableInput from "@/components/inputs/ControllableInput";
import Button from "@/components/general/Button";
import NormalSelectionModal from "@/components/inputs/NormalSelectionModal";
import GENDERS from "@/data/genders";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import { testSchema } from "@/schemas";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { UserInfoBody } from "@/apis/@types/auth";

export default function OfferScreen() {
  const { t } = useAutoCompleteTranslation();

  const { control, handleSubmit } = useForm({
    resolver: testSchema,
  });

  const onSubmit = (values: UserInfoBody) => {
    console.log(values);
  };

  return (
    <ScreenWrapper>
      <View>
        <ControllableInput
          control={control}
          name="name"
          labelText={t("NAME")}
        />

        <ControllableInput
          control={control}
          name="email"
          labelText={t("EMAIL")}
          textContentType="password"
        />

        <ControllableInput
          control={control}
          name="bio"
          labelText={t("BIO")}
          isTextAreaInput
        />

        <Controller
          control={control}
          name="gender"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <NormalSelectionModal
              inputValue={value}
              InputLabel={t("GENDER")}
              onChange={onChange}
              data={GENDERS}
              error={error?.message}
            />
          )}
        />

        <Button title="hiii" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScreenWrapper>
  );
}
