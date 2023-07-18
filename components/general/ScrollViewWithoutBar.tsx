import { ScrollView } from 'react-native';
import React from 'react';
import { ScrollViewWithoutBarProps } from '../@types/ScrollViewWithoutBarProps';

export default function ScrollViewWithoutBar({ children, ...otherProps }: ScrollViewWithoutBarProps) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} {...otherProps}>
      {children}
    </ScrollView>
  );
}
