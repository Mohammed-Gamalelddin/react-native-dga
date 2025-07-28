import { StyleSheet } from 'react-native';

const useStyles = () => {
  const styles = StyleSheet.create({
    buttonContainer: {
      paddingHorizontal: 15,
      borderWidth: 1,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return styles;
};

export default useStyles;
