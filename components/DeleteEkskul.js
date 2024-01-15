//Tomo

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DeleteScreen = ({ navigation }) => {
  const [deletedData, setDeletedData] = useState('');

  const handleDelete = () => {
    // Implement your logic to delete the data
    // You can show an alert or confirmation dialog before deletion
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this data?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => performDelete() },
      ],
      { cancelable: true }
    );
  };

  const performDelete = () => {
    // Perform the actual deletion logic here
    console.log('Data deleted:', deletedData);
    // You can also navigate back to the previous screen or perform other actions
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Data Ekskul</Text>

      {/* Display the data to be deleted (replace this with your own data display logic) */}
      <Text style={styles.dataText}>{deletedData}</Text>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete Data</Text>
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
    backgroundColor: '#D8D8D8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataText: {
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: '#E48F45',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DeleteScreen;
