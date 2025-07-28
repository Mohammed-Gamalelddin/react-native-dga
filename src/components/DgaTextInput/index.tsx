import {
  View,
  TextInput as TextInputType,
  TextInput,
  type TextInputProps,
  type ViewStyle,
  type StyleProp,
  Animated,
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
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [isFocused, setIsFocused] = React.useState(false);
  const underlineAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(underlineAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(underlineAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  // Get container width on layout
  const handleLayout = (event: any) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  //Auto focus on the input field when the component is mounted and autoFocus = true
  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current && autoFocus) {
        inputRef.current.focus();
      }
    }, 100);
  });

  return (
    <View style={style}>
      {!!label && (
        <DgaText weight="regular" style={[styles.upperLabel]}>
          {label}
          {required && (
            <DgaText weight="regular" style={styles.star}>
              *
            </DgaText>
          )}
        </DgaText>
      )}
      <View
        onLayout={handleLayout}
        style={[
          styles.container,
          style,
          {
            borderColor: error
              ? colors.error[700] // Error state (highest priority)
              : isFocused
                ? colors.textColor // Focused state
                : colors.neutral[400], // Default state
          },
        ]}
      >
        <View style={styles.innerContainer}>
          {prefix}
          <TextInput
            placeholderTextColor={colors.neutral[500]}
            ref={inputRef}
            style={styles.textInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...otherProps}
          />
          {suffix}
        </View>
        <View style={styles.animatedLineContainer}>
          <Animated.View
            style={[
              styles.animatedLine,
              {
                backgroundColor: error ? colors.error[700] : colors.textColor,
                width: underlineAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, containerWidth],
                }),
              },
            ]}
          />
        </View>
      </View>
      {message && (
        <View style={styles.messageContainer}>
          <InfoCircle color={error ? colors.error[700] : colors.neutral[700]} />
          <DgaText
            weight="extraLight"
            style={[
              styles.message,
              { color: error ? colors.error[700] : colors.neutral[700] },
            ]}
          >
            {message}
          </DgaText>
        </View>
      )}
    </View>
  );
};

export default DgaTextInput;
