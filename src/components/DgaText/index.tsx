import React, { useMemo } from 'react';
import {
  Text,
  type TextProps,
  type TextStyle,
  type StyleProp,
} from 'react-native';

interface Props extends TextProps {
  style?: StyleProp<TextStyle>;
  weight:
    | 'bold'
    | 'extraLight'
    | 'thin'
    | 'semiBold'
    | 'regular'
    | 'medium'
    | 'light';
}

const DgaText: React.FC<Props> = ({
  weight,
  style,
  children,
  ...otherProps
}) => {
  const fontFamily = useMemo(() => {
    switch (weight) {
      case 'thin':
        return 'IBMPlexSansArabic-Thin';
      case 'extraLight':
        return 'IBMPlexSansArabic-ExtraLight';
      case 'light':
        return 'IBMPlexSansArabic-Light';
      case 'medium':
        return 'IBMPlexSansArabic-Medium';
      case 'semiBold':
        return 'IBMPlexSansArabic-SemiBold';
      case 'bold':
        return 'IBMPlexSansArabic-Bold';
      default:
        return 'IBMPlexSansArabic-Regular';
    }
  }, [weight]);

  return (
    <Text style={[{ fontFamily: fontFamily }, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default DgaText;
