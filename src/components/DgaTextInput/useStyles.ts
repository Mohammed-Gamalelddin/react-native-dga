import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const useStyles = () => {
  const styles = StyleSheet.create({
    upperLabel: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.textColor,
      marginBottom: 16,
      paddingLeft: 6,
    },
    star: {
      color: colors.error[700],
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 3,
    },
    container: {
      borderWidth: 1,
      borderRadius: 4,
      height: 44,
      overflow: 'hidden',
    },
    innerContainer: {
      flex: 1,
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    animatedLineContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    animatedLine: {
      height: 2,
      backgroundColor: colors.textColor,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      marginHorizontal: 6,
      color: colors.textColor,
      fontFamily: 'IBMPlexSansArabic-Regular',
    },
    messageContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 16,
    },
    message: {
      fontSize: 14,
      lineHeight: 20,
      marginLeft: 8,
    },
  });

  return styles;
};

export default useStyles;
