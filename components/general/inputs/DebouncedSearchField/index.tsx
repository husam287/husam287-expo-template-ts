import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useMemo, useEffect, useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { debounce } from 'lodash-es';
import PureInput from '../PureInput';

const styles = StyleSheet.create({
  spaceEnd: {
    marginEnd: 10,
  },
});

export default function DebouncedSearchField({
  onSearchChange = (e: string | undefined) => { },
  withCloseButton = false,
  onSubmit = () => { },
}) {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const debouncedSearchHandler = useMemo(
    () => debounce(onSearchChange, 300),
    [],
  );

  useEffect(() => {
    if (searchValue === undefined) return;

    debouncedSearchHandler(searchValue);
  }, [searchValue, debouncedSearchHandler]);

  const onDismiss = () => {
    setSearchValue('');
  };

  return (
    <PureInput
      prefix={(
        <Ionicons
          style={styles.spaceEnd}
          name="search"
          size={24}
          color={Colors.dark}
        />
      )}
      placeholder="Search here"
      onChangeText={setSearchValue}
      onSubmitEditing={onSubmit}
      value={searchValue}
      suffix={(withCloseButton === false && searchValue) ? (
        <TouchableOpacity onPress={onDismiss}>
          <AntDesign name="close" size={20} color={Colors.dark} />
        </TouchableOpacity>
      ) : null}
    />
  );
}
