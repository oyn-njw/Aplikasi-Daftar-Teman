import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const About = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={contact.gambar} style={styles.img} />
      <Text style={styles.title}>{contact.judul}</Text>
      <Text style={styles.telpon}>Telpon: {contact.telpon}</Text>
      <Text style={styles.alamat}>Alamat: {contact.alamat}</Text>
      <Text style={styles.email}>Email: {contact.email}</Text>
      <Text style={styles.tanggalLahir}>Tanggal Lahir: {contact.tanggalLahir}</Text>
      <Text style={styles.catatan}>Catatan: {contact.catatan}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  telpon: {
    fontSize: 25,
    color: '#3498db',
    marginBottom: 10,
    alignItems: 'right'
  },
  alamat: {
    fontSize: 20,
    marginBottom: 10
  },
  email: {
    fontSize: 20,
    marginBottom: 10
  },
  tanggalLahir: {
    fontSize: 20,
    marginBottom: 10
  },
  catatan: {
    fontSize: 20,
    marginBottom: 20
  }
});

export default About;
