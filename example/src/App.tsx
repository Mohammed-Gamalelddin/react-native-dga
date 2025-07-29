import { View, StyleSheet } from 'react-native';
import { DgaTextInput, DgaButton } from 'react-native-dga';

export default function App() {
  return (
    <View style={styles.container}>
      <DgaTextInput
        label="اسم المستخدم"
        placeholder="أدخل اسم المستخدم"
        message="هذا حقل مطلوب"
        error
        required
      />

      <DgaTextInput
        label="اسم المستخدم"
        placeholder="أدخل اسم المستخدم"
        message="هذا حقل مطلوب"
        required
      />

      <DgaButton
        title="تسجيل"
        color="seconday"
        size="large"
        variant="contained"
        onPress={() => {
          console.log('Button pressed');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
