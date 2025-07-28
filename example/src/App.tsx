import { View, StyleSheet } from 'react-native';
import { DgaTextInput } from 'react-native-dga';

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
