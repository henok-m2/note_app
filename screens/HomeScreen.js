import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = (newNote) => {
    setNotes((currentNotes) => [
      ...currentNotes,
      { id: Date.now().toString(), text: newNote },
    ]);
  };

  const deleteNote = (id) => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setNotes((notes) => notes.filter((note) => note.id !== id));
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Notes</Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => deleteNote(item.id)}
            style={styles.noteItem}
          >
            <Text style={styles.noteText}>{item.text}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No notes yet.</Text>}
      />

      <Button
        title="Add Note"
        onPress={() =>
          navigation.navigate('AddNote', {
            onAddNote: addNoteHandler,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noteItem: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    marginVertical: 20,
    color: 'gray',
  },
});
