//Tomo

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const EditEkskul = ({ navigation }) => {
  const [editedData, setEditedData] = useState('');
  
  const handleSave = () => {
    // Implement your logic to save the edited data
    console.log('Data saved:', editedData);
    // You can also navigate back to the previous screen or perform other actions
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Data Ekskul</Text>

      <TextInput
        style={styles.input}
        placeholder="Ekskul"
        onChangeText={(text) => setEditedData(text)}
        value={editedData}
      />
       <TextInput
        style={styles.input}
        placeholder="Nama"
        onChangeText={(text) => setEditedData(text)}
        value={editedData}
      />
       <TextInput
        style={styles.input}
        placeholder="Kelas"
        onChangeText={(text) => setEditedData(text)}
        value={editedData}
      />
            <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={(text) => setKelas(text)}
        value={editedData}
      />
            <TextInput
        style={styles.input}
        placeholder="Domisili"
        onChangeText={(text) => setKelas(text)}
        value={editedData}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FEFAE0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#E48F45',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditEkskul;
