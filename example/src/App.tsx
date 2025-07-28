import { Text, View, StyleSheet } from 'react-native';
import { DgaButton, DgaTextInput } from 'react-native-dga';

export default function App() {
  return (
    <View style={styles.container}>
      <DgaButton
        color="natural"
        size="large"
        variant="contained"
        title="إجراء"
        onPress={() => console.log('Button Pressed')}
      />
      <DgaTextInput
        label="اسم المستخدم"
        placeholder="أدخل اسم المستخدم"
        message="هذا حقل مطلوب"
        error={true}
      />
      <Text>بعض النصوص</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
