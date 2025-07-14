import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddNoteScreen({ navigation, route }) {
  const [noteText, setNoteText] = useState('');

  const handleSave = () => {
    if (noteText.trim() === '') {
      Alert.alert('Note is empty!', 'Please enter some text.');
      return;
    }

   
    route.params?.onAddNote(noteText);
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Write your note below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={noteText}
        onChangeText={setNoteText}
        multiline
      />
      <Button title="Save Note" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
