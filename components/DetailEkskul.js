// Tomo

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Data Ekskul</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Ekskul: {data.ekskul}</Text>
        <Text style={styles.detailText}>Nama: {data.nama}</Text>
        <Text style={styles.detailText}>Kelas: {data.kelas}</Text>
        <Text style={styles.detailText}>Gender: {data.gender}</Text>
        <Text style={styles.detailText}>Domisili: {data.domisili}</Text>
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FEFA',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailContainer: {
    backgroundColor: '#E48F45',
    padding: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  detailText: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DetailScreen;
