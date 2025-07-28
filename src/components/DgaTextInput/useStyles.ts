import { StyleSheet, I18nManager } from 'react-native';
import colors from '../../theme/colors';

const useStyles = () => {
  const styles = StyleSheet.create({
    upperLabel: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.textDefault,
    },
    star: {
      color: colors.error,
    },
    container: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderRadius: 5,
      height: 48,
      paddingVertical: 0,
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      marginHorizontal: 5,
      color: colors.fieldTextFilled,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      fontFamily: 'IBMPlexSansArabic-Regular',
    },
    messageContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 15,
    },
    message: {
      fontSize: 16,
      color: colors.error,
      marginHorizontal: 5,
      writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    },
  });

  return styles;
};

export default useStyles;
