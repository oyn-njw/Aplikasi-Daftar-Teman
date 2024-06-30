import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Kontak from './Kontak';
import Data from './Data';

const Home = ({ navigation }) => {
const sortedContacts = Data.sort((a, b) => a.judul.localeCompare(b.judul));
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Kontak
            judul={item.judul}
            telpon={item.telpon}
            gambar={item.gambar}
            onPress={() => navigation.navigate('About', { contact: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default Home;
