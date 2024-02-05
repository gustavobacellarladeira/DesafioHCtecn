import React, {ReactNode, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Typography} from '../Styles/Typography';

const Tag = ({
  label,
  isSelectable = true,
  isSelected = false,
  onSelect,
}: {
  label: string;
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}) => {
  const Label = () => (
    <Text
      style={{
        ...styles.tag,
        ...(isSelected ? styles.selectedColors : styles.standardColors),
      }}>
      {label}
    </Text>
  );

  return (
    <>
      {isSelectable ? (
        <TouchableOpacity
          onPress={() => {
            // setIsSelected(!isSelected);
            onSelect?.();
          }}>
          <Label />
        </TouchableOpacity>
      ) : (
        <Label />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tag: {
    fontSize: Typography.caption1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 4,
  },
  selectedColors: {
    backgroundColor: 'dodgerblue',
    color: 'white',
  },
  standardColors: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    color: 'gray',
  },
});

export default Tag;
