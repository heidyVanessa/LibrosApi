import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Home() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const obtenerLibros = async () => {
      const res = await fetch("https://gutendex.com/books/?languages=es");
      const json = await res.json();
      setLibros(json.results);
    };

    obtenerLibros();
  }, []);

  return (
    <ScrollView>
      <View style={styles.lista}>
        {libros.map((libro, index) => (
          <View key={index} style={styles.item}>
            <Text>{libro.title}</Text>
            <Image
              source={{
                uri: libro.formats?.["image/jpeg"] || "https://via.placeholder.com/150",
              }}
              style={styles.imagen}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    backgroundColor: 'aliceblue',
    width: '48%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

