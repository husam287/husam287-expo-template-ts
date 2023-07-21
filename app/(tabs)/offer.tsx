import { StyleSheet, Text, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form'
import ControllableInput from '@/components/general/inputs/ControllableInput';
import Button from '@/components/general/Button';
import NormalSelectionModal from '@/components/general/inputs/NormalSelectionModal';
import GENDERS from '@/data/genders';
import ScreenWrapper from '@/components/general/ScreenWrapper';
import GLOBAL_STYLES from '@/constants/GlobalStyles';
import { testSchema } from '@/schemas';
import useAutoCompleteTranslation from '@/hooks/useAutoCompleteTranslation';

export default function OfferScreen() {
  const { t } = useAutoCompleteTranslation()

  const { control, handleSubmit } = useForm({
    resolver: testSchema
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <ScreenWrapper>
      <Text style={styles.title}>Form example</Text>
      <View>
        <ControllableInput
          control={control}
          name='name'
          labelText={t("NAME")}
        />

        <ControllableInput
          control={control}
          name='email'
          labelText={t('EMAIL')}
          textContentType='password'
        />

        <ControllableInput
          control={control}
          name='bio'
          labelText={t('BIO')}
          isTextAreaInput
        />

        <Controller
          control={control}
          name='gender'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <NormalSelectionModal
              inputValue={value}
              InputLabel={t('GENDER')}
              onChange={onChange}
              data={GENDERS}
              error={error?.message}
            />
          )}
        />

        <Button
          title='hiii'
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    ...GLOBAL_STYLES.font700
  },
});
