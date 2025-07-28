import {
  TouchableOpacity,
  ActivityIndicator,
  type ViewStyle,
  type StyleProp,
  type TextStyle,
  View,
} from 'react-native';
import React, { type ReactNode, useMemo } from 'react';
import useStyles from './useStyles';
import DgaText from '../DgaText';
import colors from '../../theme/colors';

interface Props {
  color: 'natural' | 'primary' | 'error';
  size: 'small' | 'medium' | 'large';
  variant: 'contained' | 'outlined' | 'transparent';
  disabled?: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: ReactNode;
  loading?: boolean;
  activityIndicatorColor?: string;
  fullWidth?: boolean;
  onPress: () => void;
}

const DgaButton: React.FC<Props> = ({
  color,
  size,
  variant,
  disabled,
  title,
  style,
  textStyle,
  icon,
  loading,
  activityIndicatorColor,
  fullWidth = false,
  onPress,
  ...otherProps
}) => {
  const styles = useStyles();

  const getButtonColors = () => {
    if (variant === 'outlined') {
      if (disabled) {
        return {
          backgroundColor: 'transparent',
          labelColor: colors.neutral[400],
          borderColor: colors.neutral[200],
        };
      }
      switch (color) {
        case 'primary':
          return {
            backgroundColor: 'transparent',
            labelColor: colors.primary[600],
            borderColor: colors.primary[600],
          };
        case 'error':
          return {
            backgroundColor: 'transparent',
            labelColor: colors.error[600],
            borderColor: colors.error[600],
          };
        default: // 'natural'
          return {
            backgroundColor: 'transparent',
            labelColor: colors.neutral[950],
            borderColor: colors.neutral[950],
          };
      }
    } else if (variant === 'transparent') {
      if (disabled) {
        return {
          backgroundColor: 'transparent',
          labelColor: colors.neutral[400],
          borderColor: 'transparent',
        };
      }
      switch (color) {
        case 'primary':
          return {
            backgroundColor: 'transparent',
            labelColor: colors.primary[600],
            borderColor: 'transparent',
          };
        case 'error':
          return {
            backgroundColor: 'transparent',
            labelColor: colors.error[600],
            borderColor: 'transparent',
          };
        default: // 'natural'
          return {
            backgroundColor: 'transparent',
            labelColor: colors.neutral[950],
            borderColor: 'transparent',
          };
      }
    } else {
      //variant === 'contained'
      if (disabled) {
        return {
          backgroundColor: colors.neutral[200],
          labelColor: colors.neutral[400],
          borderColor: colors.neutral[200],
        };
      }
      switch (color) {
        case 'primary':
          return {
            backgroundColor: colors.primary[600],
            labelColor: colors.common.white,
            borderColor: colors.primary[600],
          };
        case 'error':
          return {
            backgroundColor: colors.error[600],
            labelColor: colors.common.white,
            borderColor: colors.error[600],
          };
        default: // 'natural'
          return {
            backgroundColor: colors.neutral[950],
            labelColor: colors.common.white,
            borderColor: colors.neutral[950],
          };
      }
    }
  };

  const buttonSize = useMemo(() => {
    switch (size) {
      case 'small':
        return { height: 32, fontSize: 12 };
      case 'large':
        return { height: 44, fontSize: 16 };
      default: // 'medium'
        return { height: 40, fontSize: 14 };
    }
  }, [size]);

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        styles.buttonContainer,
        {
          height: buttonSize.height,
          backgroundColor: getButtonColors().backgroundColor,
          borderColor: getButtonColors().borderColor,
          ...(fullWidth ? { width: '100%' } : {}),
        },
        style,
      ]}
      onPress={onPress}
      {...otherProps}
    >
      {loading ? (
        <ActivityIndicator
          animating
          size={'small'}
          color={
            activityIndicatorColor
              ? activityIndicatorColor
              : getButtonColors().labelColor
          }
        />
      ) : (
        <View style={styles.textContainer}>
          {icon}
          <DgaText
            weight="medium"
            style={[
              {
                color: getButtonColors().labelColor,
                fontSize: buttonSize.fontSize,
              },
              textStyle,
            ]}
          >
            {title}
          </DgaText>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DgaButton;

// {icon && isValidElement(icon)
//     ? cloneElement(icon, {
//         color: iconColor,
//         // Preserve existing props and override color
//         ...(icon.props || {}),
//       })
//     : icon
// }
