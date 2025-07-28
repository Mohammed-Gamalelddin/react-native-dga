import {
  View,
  TextInput as TextInputType,
  TextInput,
  type TextInputProps,
  type ViewStyle,
  type StyleProp,
  Text,
} from 'react-native';
import React, { useRef, useEffect, type ReactNode } from 'react';
import colors from '../../theme/colors';
import { InfoCircle } from '../../assets/Svg';
import DgaText from '../DgaText';
import useStyles from './useStyles';

interface Props extends TextInputProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  style?: StyleProp<ViewStyle>;
  error?: boolean;
  message?: string;
  autoFocus?: boolean;
  label?: string;
  required?: boolean;
}

const DgaTextInput: React.FC<Props> = ({
  prefix,
  suffix,
  style,
  error,
  message,
  autoFocus = false,
  label = '',
  required = false,
  ...otherProps
}) => {
  const inputRef = useRef<TextInputType>(null);
  const styles = useStyles();

  //Auto focus on the input field when the component is mounted and autoFocus = true
  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current && autoFocus) {
        inputRef.current.focus();
      }
    }, 100);
  });

  return (
    <>
      {!!label && (
        <DgaText weight="semiBold" style={[styles.upperLabel]}>
          {label}
          {required && <Text style={styles.star}>*</Text>}
        </DgaText>
      )}
      <View
        style={[
          styles.container,
          style,
          { borderColor: error ? colors.error : colors.fieldBorderDefault },
        ]}
      >
        {prefix}
        <TextInput ref={inputRef} style={styles.textInput} {...otherProps} />
      </View>
      {error && message && (
        <View style={styles.messageContainer}>
          <InfoCircle />
          <DgaText weight="extraLight" style={styles.message}>
            {message}
          </DgaText>
        </View>
      )}
    </>
  );
};

export default DgaTextInput;
