import { StyleSheet, Text, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form'
import ControllableInput from '@/components/general/inputs/ControllableInput';
import Button from '@/components/general/Button';
import NormalSelectionModal from '@/components/general/inputs/NormalSelectionModal';
import GENDERS from '@/data/genders';
import ScreenWrapper from '@/components/general/ScreenWrapper';
import GLOBAL_STYLES from '@/constants/GlobalStyles';
export default function OfferScreen() {
  const { control, handleSubmit } = useForm({})

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
        />

        <ControllableInput
          control={control}
          name='age'
        />

        <ControllableInput
          control={control}
          name='desc'
        />

        <Controller
          control={control}
          name='gender'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <NormalSelectionModal
              inputValue={value}
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
