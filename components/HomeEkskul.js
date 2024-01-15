//Tomo


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import bgImage from '../assets/bg.png'; // Ganti dengan gambar latar belakang yang diinginkan

const HomeEkskul = ({ navigation }) => {
  const navigateToEndpoint = (endpoint) => {
    console.log('Navigating to:', endpoint);
    navigation.navigate(endpoint);
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToEndpoint('list')}>
          <Text style={styles.menuText}>List Data Ekskul</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToEndpoint('tambah')}>
          <Text style={styles.menuText}>Tambah Data Ekskul</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToEndpoint('edit')}>
          <Text style={styles.menuText}>Edit Data Ekskul</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToEndpoint('delete')}>
          <Text style={styles.menuText}>Delete Data Ekskul</Text>
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  // backgroundContainer: {
  //   flex: 1,
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FEFAE0', // Memberikan efek transparan pada latar belakang
  },
  menuItem: {
    backgroundColor: '#E48F45', // Warna latar belakang dengan efek transparan
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeEkskul;
